import { Reveal } from "./Reveal";
import { Check, Star, BookOpen, Dice5, Printer, Award, Trees } from "lucide-react";

const benefits = [
  {
    icon: <Check className="size-5 text-emerald-600" />,
    bg: "bg-emerald-100",
    text: "100 missões de alfabetização organizadas em ordem de aprendizado.",
  },
  {
    icon: <Trees className="size-5 text-green-600" />,
    bg: "bg-green-100",
    text: "Jornada completa em 7 mundos da leitura.",
  },
  {
    icon: <BookOpen className="size-5 text-blue-600" />,
    bg: "bg-blue-100",
    text: "Passo a passo do reconhecimento dos sons até a leitura de frases.",
  },
  {
    icon: <Dice5 className="size-5 text-amber-600" />,
    bg: "bg-amber-100",
    text: "Atividades lúdicas com jogos, rimas, sílabas e desafios.",
  },
  {
    icon: <Printer className="size-5 text-orange-600" />,
    bg: "bg-orange-100",
    text: "113 páginas em PDF prontas para imprimir quantas vezes quiser.",
  },
  {
    icon: <Award className="size-5 text-purple-600" />,
    bg: "bg-purple-100",
    text: "Certificado de Superleitor(a) para a criança ao concluir todas as missões.",
  },
];

export function WhatYouGet() {
  return (
    <section className="bg-[#F5F7FA] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#123B7A] sm:text-4xl lg:text-5xl">
            O Que Você Vai Receber
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-10 sm:mt-12">
          <div className="overflow-hidden rounded-[24px] bg-white shadow-soft">
            <ul className="divide-y divide-gray-100">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-center gap-4 p-5 sm:gap-6 sm:p-7">
                  <div className={`grid size-10 shrink-0 place-items-center rounded-xl sm:size-12 ${item.bg}`}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium leading-tight text-[#123B7A] sm:text-base md:text-lg">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
