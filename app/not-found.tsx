import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-site flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="heading text-sm text-accent">Erreur 404</p>
      <h1 className="heading mt-3 text-4xl">Cette page n'existe pas</h1>
      <p className="mt-4 max-w-md text-soft">
        La page demandée a peut-être été déplacée ou n'existe plus. Le
        catalogue, lui, est bien là.
      </p>
      <div className="mt-8 flex gap-3">
        <ButtonLink href="/">Retour à l'accueil</ButtonLink>
        <ButtonLink href="/decks/" variant="secondary">
          Voir les decks
        </ButtonLink>
      </div>
    </div>
  );
}
