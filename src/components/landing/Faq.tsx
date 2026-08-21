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
    <section id="faq" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[700px] px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Perguntas Frequentes
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-12 sm:mt-16">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-[20px] border border-primary/10 bg-white px-6 py-2 shadow-soft sm:rounded-[24px]"
              >
                <AccordionTrigger className="flex items-center justify-between py-4 text-left font-display text-base font-bold text-primary transition-all hover:no-underline sm:text-lg [&[data-state=open]>svg]:rotate-180">
                  <span>{f.q}</span>
                  <ChevronDown className="size-5 shrink-0 text-accent transition-transform duration-300" />
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
                  <div className="pt-2 border-t border-gray-50">
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
