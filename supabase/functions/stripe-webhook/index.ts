// Edge Function « stripe-webhook » : reçoit les événements Stripe, vérifie
// la signature HMAC, marque la commande payée et émet le jeton de
// téléchargement. Déployée avec verify_jwt=false : la signature Stripe est
// l'authentification.
import { createClient } from "jsr:@supabase/supabase-js@2";

const TOKEN_VALIDITY_DAYS = 7;

function json(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

/** Comparaison en temps constant de deux chaînes hexadécimales. */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

async function verifyStripeSignature(
  payload: string,
  header: string,
  secret: string
): Promise<boolean> {
  const parts = new Map(
    header.split(",").map((kv) => kv.split("=", 2) as [string, string])
  );
  const timestamp = parts.get("t");
  const signature = parts.get("v1");
  if (!timestamp || !signature) return false;

  // Tolérance de 5 minutes contre le rejeu.
  const age = Math.abs(Date.now() / 1000 - Number(timestamp));
  if (!Number.isFinite(age) || age > 300) return false;

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const mac = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(`${timestamp}.${payload}`)
  );
  const expected = Array.from(new Uint8Array(mac))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return timingSafeEqual(expected, signature);
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
  if (!webhookSecret) {
    return json(503, { error: "Webhook not configured" });
  }

  const signature = req.headers.get("stripe-signature");
  const payload = await req.text();
  if (!signature || !(await verifyStripeSignature(payload, signature, webhookSecret))) {
    return json(400, { error: "Invalid signature" });
  }

  let event: {
    type?: string;
    data?: {
      object?: {
        id?: string;
        payment_status?: string;
        customer_details?: { email?: string };
        amount_total?: number;
        currency?: string;
        metadata?: { deck_slug?: string };
      };
    };
  };
  try {
    event = JSON.parse(payload);
  } catch {
    return json(400, { error: "Invalid payload" });
  }

  const relevant =
    event.type === "checkout.session.completed" ||
    event.type === "checkout.session.async_payment_succeeded";
  const session = event.data?.object;

  if (!relevant || !session?.id || session.payment_status !== "paid") {
    // Événement reçu mais sans action : accusé de réception pour éviter les retries.
    return json(200, { received: true });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  const { data: order, error: orderError } = await supabase
    .from("orders")
    .update({
      status: "paid",
      paid_at: new Date().toISOString(),
      email: session.customer_details?.email ?? null,
      amount_total: session.amount_total ?? null,
      currency: session.currency ?? null,
    })
    .eq("stripe_session_id", session.id)
    .select("id, deck_slug")
    .single();

  if (orderError || !order) {
    console.error("Order not found for session", session.id, orderError?.message);
    // 200 : la commande sera rattrapée par confirm-order côté client.
    return json(200, { received: true });
  }

  // Jeton de téléchargement (idempotent : un seul par commande).
  const { data: existing } = await supabase
    .from("download_tokens")
    .select("token")
    .eq("order_id", order.id)
    .maybeSingle();

  if (!existing) {
    const expiresAt = new Date(
      Date.now() + TOKEN_VALIDITY_DAYS * 24 * 3600 * 1000
    ).toISOString();
    const { error: tokenError } = await supabase.from("download_tokens").insert({
      order_id: order.id,
      deck_slug: order.deck_slug,
      expires_at: expiresAt,
    });
    if (tokenError) {
      console.error("Token insert error:", tokenError.message);
    }
  }

  return json(200, { received: true });
});
