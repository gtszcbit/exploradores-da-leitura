import { Reveal } from "./Reveal";
import { Check, Star, BookOpen, Dice5, Printer, Award, Trees } from "lucide-react";

const benefits = [
  {
    icon: <Check className="size-5" />,
    text: "100 missões organizadas por aprendizado.",
  },
  {
    icon: <Trees className="size-5" />,
    text: "Jornada completa em 7 mundos.",
  },
  {
    icon: <BookOpen className="size-5" />,
    text: "Do reconhecimento dos sons às frases.",
  },
  {
    icon: <Dice5 className="size-5" />,
    text: "Atividades lúdicas e desafios divertidos.",
  },
  {
    icon: <Printer className="size-5" />,
    text: "113 páginas em PDF prontas para imprimir.",
  },
  {
    icon: <Award className="size-5" />,
    text: "Certificado de conclusão personalizado.",
  },
];

export function WhatYouGet() {
  return (
    <section className="bg-background py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            O Que Você Vai Receber
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-center gap-4 rounded-[24px] bg-card p-6 shadow-soft transition-shadow hover:shadow-card">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  {item.icon}
                </div>
                <span className="text-sm font-medium leading-tight text-foreground/80 sm:text-base">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
