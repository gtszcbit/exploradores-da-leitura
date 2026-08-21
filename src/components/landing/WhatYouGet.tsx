import { Reveal } from "./Reveal";
import { Check, Trees, BookOpen, Dice5, Printer, Award } from "lucide-react";

const benefits = [
  {
    icon: Trees,
    text: "Jornada completa em 7 mundos lúdicos.",
  },
  {
    icon: Check,
    text: "100 missões organizadas por aprendizado.",
  },
  {
    icon: BookOpen,
    text: "Do reconhecimento dos sons até a leitura de frases.",
  },
  {
    icon: Dice5,
    text: "Atividades lúdicas e desafios divertidos.",
  },
  {
    icon: Printer,
    text: "113 páginas em PDF prontas para imprimir.",
  },
  {
    icon: Award,
    text: "Certificado de conclusão personalizado.",
  },
];

export function WhatYouGet() {
  return (
    <section className="bg-[#F8FAFC] py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#122E54] sm:text-4xl">
            O Que Você Vai Receber
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-soft">
          <div className="divide-y divide-slate-100">
            {benefits.map((b, i) => (
              <Reveal key={b.text} delay={i * 50}>
                <div className="flex items-center gap-5 px-6 py-6 sm:px-8">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F9F1]">
                    <b.icon className="size-5 text-[#065F46]" />
                  </div>
                  <span className="text-lg font-medium text-[#334155]">
                    {b.text}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
