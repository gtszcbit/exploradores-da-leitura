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
    <section id="faq" className="bg-[#F8FAFC] py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#122E54] sm:text-4xl">
            Perguntas Frequentes
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-soft"
              >
                <AccordionTrigger className="flex items-center justify-between px-8 py-6 text-left font-display text-lg font-bold text-[#122E54] transition-all hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <span>{f.q}</span>
                  <ChevronDown className="size-5 shrink-0 text-[#94A3B8] transition-transform duration-300" />
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8 text-base leading-relaxed text-[#64748B]">
                  <div className="border-t border-slate-50 pt-6">
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
