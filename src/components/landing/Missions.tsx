import { Reveal } from "./Reveal";
import { MISSIONS } from "@/lib/kit-content";

export function Missions() {
  return (
    <section id="missoes" className="bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-balance text-primary sm:text-4xl">
            100 missões. Muitas descobertas.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Alguns exemplos das atividades que fazem parte da aventura.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MISSIONS.map((m, i) => (
            <Reveal key={m.n} delay={i * 60}>
              <article className="group h-full rounded-3xl border border-border bg-background p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary text-2xl transition-transform duration-300 group-hover:-rotate-6"
                    aria-hidden
                  >
                    {m.emoji}
                  </span>
                  <span className="font-display text-xs font-bold tracking-wide text-muted-foreground">
                    MISSÃO {m.n}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
