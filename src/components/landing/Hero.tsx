import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.jpg";
import { Sparkles, Check } from "lucide-react";

const bullets = ["100 missões", "Para crianças de 4 a 6 anos", "PDF pronto para imprimir"];

export function Hero() {
  return (
    <section id="topo" className="surface-paper relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <span className="absolute top-16 left-[6%] text-2xl animate-twinkle">⭐</span>
        <span className="absolute top-40 right-[8%] text-xl animate-twinkle [animation-delay:1.2s]">✨</span>
        <span className="absolute bottom-16 left-[14%] text-2xl animate-float-slow">🍃</span>
        <span className="absolute right-[18%] bottom-24 text-xl animate-float-slow [animation-delay:0.8s]">🔎</span>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pt-12 pb-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:pt-20 lg:pb-24">
        <div className="reveal-in text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-2 font-display text-xs font-semibold tracking-wide text-accent-foreground uppercase">
            📚 Kit educativo • 100 missões
          </span>

          <h1 className="mt-5 font-display text-[2.1rem] leading-[1.08] font-bold text-balance text-primary sm:text-5xl lg:text-[3.4rem]">
            Transforme a alfabetização em uma aventura que a criança vai querer continuar!
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            Uma jornada lúdica com 100 missões para explorar sons, letras, sílabas, palavras e frases
            de um jeito muito mais divertido.
          </p>

          <div className="mt-8 flex flex-col flex-wrap gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
              <a href="#oferta">🚀 QUERO COMEÇAR A AVENTURA</a>
            </Button>
            <Button asChild variant="explore" size="xl" className="w-full sm:w-auto">
              <a href="#missoes">VER O QUE VEM NO KIT</a>
            </Button>
          </div>

          <ul className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                <Check className="size-4 text-primary" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal-in relative [animation-delay:150ms]">
          <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-primary-soft/70 blur-2xl" aria-hidden />
          <div className="relative rotate-[-1.5deg] rounded-4xl border-4 border-card bg-card p-3 shadow-lift">
            <img
              src={heroMockup}
              width={1200}
              height={1200}
              alt="Mockup do Kit Exploradores da Leitura com capa e páginas de atividades impressas"
              className="w-full rounded-3xl object-cover"
              fetchPriority="high"
            />
            <span className="absolute -top-4 -left-3 rotate-[-8deg] rounded-2xl bg-accent px-4 py-2 font-display text-sm font-bold text-accent-foreground shadow-card">
              100 MISSÕES
            </span>
            <span className="absolute -right-2 -bottom-4 rotate-[6deg] rounded-2xl bg-sky px-4 py-2 font-display text-sm font-bold text-sky-foreground shadow-card">
              4–6 ANOS
            </span>
            <span className="absolute -top-5 right-6 grid size-11 place-items-center rounded-full bg-card text-primary shadow-soft animate-float-slow">
              <Sparkles className="size-5" aria-hidden />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
