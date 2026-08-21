import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import heroMockup from "@/assets/hero-mockup.jpg";
import { Check, X } from "lucide-react";

const trust = [
  { emoji: "📚", label: "100 MISSÕES" },
  { emoji: "🎯", label: "APRENDIZAGEM PROGRESSIVA" },
  { emoji: "🖨️", label: "PRONTO PARA IMPRIMIR" },
  { emoji: "🏆", label: "CERTIFICADO FINAL" },
];

export function TrustBar() {
  return (
    <section className="bg-background py-10 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
          {trust.map((t) => (
            <div key={t.label} className="flex items-center gap-3">
              <span className="grid size-8 place-items-center rounded-xl bg-primary-soft text-base" aria-hidden>
                {t.emoji}
              </span>
              <span className="font-display text-xs font-bold tracking-[0.15em] text-primary uppercase">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const antes = ["Atividades repetitivas", "Falta de interesse", "Dificuldade para manter a atenção"];
const depois = [
  "Missões divertidas",
  "Atividades variadas",
  "Sensação de progresso",
  "Uma jornada com começo, meio e fim",
];

export function PainDesire() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-balance text-primary sm:text-4xl">
            Aprender a ler não precisa parecer uma obrigação.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Quando a criança participa de uma atividade como uma missão, cada som, letra e palavra
            pode virar uma pequena descoberta.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <h3 className="font-display text-lg font-semibold tracking-wide text-muted-foreground uppercase">
                Antes
              </h3>
              <ul className="mt-5 space-y-3">
                {antes.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/80">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground">
                      <X className="size-3.5" aria-hidden />
                    </span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-3xl border-2 border-primary/20 bg-primary-soft p-6 shadow-card sm:p-8">
              <h3 className="font-display text-lg font-semibold tracking-wide text-primary uppercase">
                Depois
              </h3>
              <ul className="mt-5 space-y-3">
                {depois.map((i) => (
                  <li key={i} className="flex items-start gap-3 font-semibold text-secondary-foreground">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const specs = [
  { value: "100", label: "Missões" },
  { value: "7", label: "Mundos" },
  { value: "4–6", label: "Anos" },
  { value: "PDF", label: "Digital" },
];

export function ProductIntro() {
  return (
    <section id="o-kit" className="bg-sky-soft py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="rotate-[1deg] rounded-4xl border-4 border-card bg-card p-3 shadow-lift">
            <img
              src={heroMockup}
              width={1200}
              height={1200}
              loading="lazy"
              alt="Kit Exploradores da Leitura: capa do material e páginas de missões"
              className="w-full rounded-3xl"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="font-display text-3xl font-bold text-balance text-primary sm:text-4xl">
            Conheça o Kit Exploradores da Leitura
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Um material digital criado para transformar momentos de alfabetização em uma verdadeira
            jornada de descobertas.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-4">
            {specs.map((s) => (
              <div key={s.label} className="rounded-3xl bg-card p-5 shadow-soft">
                <dt className="font-display text-3xl font-bold text-primary">{s.value}</dt>
                <dd className="mt-1 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          <Button asChild variant="hero" size="lg" className="mt-8 w-full sm:w-auto">
            <a href="#missoes">QUERO CONHECER AS MISSÕES</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
