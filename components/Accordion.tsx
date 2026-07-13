export interface AccordionItem {
  question: string;
  answer: string;
}

/**
 * Accordéon accessible sans JavaScript, basé sur <details>/<summary>.
 */
export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group py-1">
          <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 py-4 text-[15px] font-medium marker:content-none [&::-webkit-details-marker]:hidden">
            {item.question}
            <span
              aria-hidden
              className="shrink-0 text-faint transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="pb-5 pr-8 text-sm leading-relaxed text-soft">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
