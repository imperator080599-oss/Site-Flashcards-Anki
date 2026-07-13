/** Formatte un prix en centimes vers « 29 € » / « 24,50 € ». */
export function formatPrice(cents: number): string {
  const euros = cents / 100;
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: Number.isInteger(euros) ? 0 : 2,
  }).format(euros);
}

export function formatCardCount(count: number): string {
  return `${new Intl.NumberFormat("fr-FR").format(count)} cartes`;
}
