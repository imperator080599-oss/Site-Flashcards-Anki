-- Schéma commerce : catalogue vendable, commandes, jetons de téléchargement.
--
-- Sécurité : RLS est activé sur toutes les tables SANS policy publique.
-- Seules les Edge Functions (service_role) y accèdent. Le site statique ne
-- lit jamais la base directement.

create table public.decks (
  slug text primary key check (slug ~ '^[a-z0-9-]{1,100}$'),
  title text not null,
  price_cents integer not null check (price_cents > 0),
  currency text not null default 'eur',
  -- Chemin du fichier .apkg dans le bucket privé « deck-files ».
  storage_path text,
  active boolean not null default true,
  updated_at timestamptz not null default now()
);

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  stripe_session_id text not null unique,
  deck_slug text not null references public.decks (slug),
  email text,
  amount_total integer,
  currency text,
  status text not null default 'pending'
    check (status in ('pending', 'paid', 'failed')),
  created_at timestamptz not null default now(),
  paid_at timestamptz
);

create index orders_deck_slug_idx on public.orders (deck_slug);

create table public.download_tokens (
  token uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders (id) on delete cascade,
  deck_slug text not null references public.decks (slug),
  expires_at timestamptz not null,
  max_downloads integer not null default 10,
  download_count integer not null default 0,
  created_at timestamptz not null default now()
);

create index download_tokens_order_idx on public.download_tokens (order_id);

alter table public.decks enable row level security;
alter table public.orders enable row level security;
alter table public.download_tokens enable row level security;

-- Bucket privé pour les fichiers de decks (livraison via URL signées).
insert into storage.buckets (id, name, public)
values ('deck-files', 'deck-files', false)
on conflict (id) do nothing;
