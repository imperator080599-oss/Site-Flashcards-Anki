import type { Metadata } from "next";
import { Suspense } from "react";
import { OrderConfirmation } from "@/components/OrderConfirmation";
import { t } from "@/content/i18n/ui";

const locale = "en" as const;

export const metadata: Metadata = {
  title: t(locale).order.metaTitle,
  description: t(locale).order.metaDescription,
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <div className="container-site flex min-h-[60vh] items-center justify-center py-20">
      <Suspense
        fallback={
          <p className="text-soft" role="status">
            {t(locale).order.verifying}
          </p>
        }
      >
        <OrderConfirmation locale={locale} />
      </Suspense>
    </div>
  );
}
