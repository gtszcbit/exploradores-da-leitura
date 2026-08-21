import { Reveal } from "./Reveal";
import { TESTIMONIALS } from "@/lib/kit-content";
import { ShieldCheck, Star } from "lucide-react";

export function Testimonials() {
  return (
    <section id="feedbacks" className="bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-2 font-display text-xs font-semibold tracking-wide text-primary uppercase">
            💬 Feedbacks
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold text-balance text-primary sm:text-4xl">
            Famílias que já começaram a aventura
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Depoimentos de pais, mães e professoras que usam o kit no dia a dia.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 70}>
              <figure className="flex h-full flex-col rounded-[24px] border border-border bg-card p-8 shadow-soft transition-shadow hover:shadow-card">
                <div className="flex gap-1" aria-label={`${t.stars} de 5 estrelas`}>
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} className="size-4 fill-primary text-primary" aria-hidden />
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
    <section id="garantia" className="bg-background py-12 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-[24px] border border-primary/10 bg-card p-8 text-center shadow-soft sm:p-12">
            <div className="grid size-16 place-items-center rounded-full bg-primary-soft">
              <ShieldCheck className="size-8 text-primary" aria-hidden />
            </div>
            <h2 className="font-display text-2xl font-bold text-balance text-primary sm:text-3xl">
              Garantia de 7 dias
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Se por qualquer motivo você não gostar do Kit Exploradores da Leitura, é só avisar em até
              7 dias após a compra e devolvemos 100% do valor.
            </p>
            <div className="rounded-full bg-primary-soft px-4 py-2 font-display text-xs font-bold tracking-wide text-primary uppercase">
              🛡️ Risco zero para você
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
