import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { FAQS } from "@/lib/kit-content";

export function Faq() {
  return (
    <section id="faq" className="bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">Dúvidas frequentes</h2>
          <p className="mt-4 text-base text-muted-foreground">
            Tudo o que você precisa saber antes de começar a jornada.
          </p>
        </Reveal>

        <Reveal className="mt-8">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-3xl border border-border bg-background px-5 shadow-soft"
              >
                <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
