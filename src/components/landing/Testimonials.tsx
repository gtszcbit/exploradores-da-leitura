import { Reveal } from "./Reveal";
import { TESTIMONIALS } from "@/lib/kit-content";
import { ShieldCheck, Star } from "lucide-react";

export function Testimonials() {
  return (
    <section id="feedbacks" className="bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-2 font-display text-xs font-semibold tracking-wide text-accent-foreground uppercase">
            💬 Feedbacks
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-balance text-primary sm:text-4xl">
            Famílias que já começaram a aventura
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Depoimentos de pais, mães e professoras que usam o kit no dia a dia.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 70}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-background p-6 shadow-soft">
                <div className="flex gap-1" aria-label={`${t.stars} de 5 estrelas`}>
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} className="size-4 fill-accent text-accent" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5">
                  <span className="block font-display text-sm font-bold text-primary">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Guarantee() {
  return (
    <section id="garantia" className="surface-paper border-y border-border py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-center gap-5 rounded-3xl border-2 border-primary bg-card p-7 text-center shadow-lift sm:p-9">
            <span className="grid size-16 place-items-center rounded-full bg-primary-soft">
              <ShieldCheck className="size-8 text-primary" aria-hidden />
            </span>
            <h2 className="font-display text-2xl font-bold text-balance text-primary sm:text-3xl">
              Garantia de 7 dias
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Se por qualquer motivo você não gostar do Kit Exploradores da Leitura, é só avisar em até
              7 dias após a compra e devolvemos 100% do valor. Sem burocracia e sem perguntas.
            </p>
            <span className="rounded-full bg-accent px-4 py-2 font-display text-xs font-bold tracking-wide text-accent-foreground uppercase">
              🛡️ Risco zero para você
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
