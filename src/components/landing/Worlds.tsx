import { Reveal } from "./Reveal";
import { WORLDS } from "@/lib/kit-content";
import { cn } from "@/lib/utils";

const toneMap: Record<string, string> = {
  primary: "bg-primary-soft text-secondary-foreground",
  sky: "bg-sky-soft text-sky-foreground",
  tangerine: "bg-tangerine/20 text-tangerine-foreground",
  accent: "bg-accent-soft text-accent-foreground",
};

const badgeMap: Record<string, string> = {
  primary: "bg-primary text-primary-foreground",
  sky: "bg-sky text-sky-foreground",
  tangerine: "bg-tangerine text-tangerine-foreground",
  accent: "bg-accent text-accent-foreground",
};

export function Worlds() {
  return (
    <section id="mundos" className="relative overflow-hidden py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-display text-xs font-semibold tracking-[0.2em] text-tangerine-foreground uppercase">
            🗺️ Mapa da jornada
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-balance text-primary sm:text-4xl">
            Uma jornada por 7 mundos
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Cada etapa leva a criança um pouco mais longe na aventura da leitura.
          </p>
        </Reveal>

        <div className="relative mt-12">
          <div className="dotted-trail absolute top-8 right-8 left-8 hidden h-[3px] lg:block" aria-hidden />
          <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WORLDS.map((w, i) => (
              <Reveal key={w.n} delay={i * 70}>
                <li
                  className={cn(
                    "group h-full list-none rounded-3xl border border-border/70 p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-card",
                    toneMap[w.tone],
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "grid size-11 shrink-0 place-items-center rounded-2xl font-display text-sm font-bold",
                        badgeMap[w.tone],
                      )}
                    >
                      {w.n}
                    </span>
                    <span className="text-3xl transition-transform duration-300 group-hover:scale-110" aria-hidden>
                      {w.emoji}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold">{w.name}</h3>
                  <p className="mt-1 text-sm font-semibold opacity-80">{w.skill}</p>
                  <p className="mt-4 inline-flex rounded-full bg-card/80 px-3 py-1 text-xs font-bold tracking-wide uppercase">
                    {w.missions}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
