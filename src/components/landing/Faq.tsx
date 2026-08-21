import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { FAQS } from "@/lib/kit-content";
import { ChevronDown } from "lucide-react";

export function Faq() {
  return (
    <section id="faq" className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
            Dúvidas Frequentes
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-[20px] border border-border bg-card shadow-soft"
              >
                <AccordionTrigger className="flex items-center justify-between px-6 py-5 text-left font-display text-base font-semibold text-primary transition-all hover:bg-muted/50 hover:no-underline sm:text-lg [&[data-state=open]>svg]:rotate-180">
                  <span>{f.q}</span>
                  <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform duration-300" />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <div className="pt-2">
                    {f.a}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
