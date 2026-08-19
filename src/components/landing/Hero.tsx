import { Button } from "@/components/ui/button";
import capa from "@/assets/pdf-capa.jpg.asset.json";
import { Check } from "lucide-react";

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

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-20 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="reveal-in inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-2 font-display text-xs font-semibold tracking-wide text-accent-foreground uppercase">
            📚 Kit educativo • 100 missões
          </span>

          <h1 className="reveal-in mt-5 font-display text-[2.1rem] leading-[1.08] font-bold text-balance text-primary sm:text-5xl">
            Transforme a alfabetização em uma aventura que a criança vai querer continuar!
          </h1>

          <p className="reveal-in mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            Uma jornada lúdica com 100 missões para explorar sons, letras, sílabas, palavras e frases
            de um jeito muito mais divertido.
          </p>

          <div className="mt-10 flex w-full max-w-md flex-col gap-3 lg:max-w-none">
            <Button asChild variant="hero" size="xl" className="w-full">
              <a href="#oferta">🚀 QUERO COMEÇAR A AVENTURA</a>
            </Button>
            <Button asChild variant="explore" size="xl" className="w-full">
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

        <div className="reveal-in relative mx-auto w-full max-w-md [animation-delay:150ms] lg:max-w-none">
          <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-primary-soft/70 blur-2xl" aria-hidden />
          <div className="relative rounded-4xl border-4 border-card bg-card p-3 shadow-lift">
            <img
              src={capa.url}
              width={703}
              height={970}
              alt="Capa do Kit Exploradores da Leitura com o Nino, o Coelho Detetive"
              className="w-full rounded-3xl bg-card object-contain"
              fetchPriority="high"
            />
            <span className="absolute -top-4 -left-3 rotate-[-8deg] rounded-2xl bg-accent px-4 py-2 font-display text-sm font-bold text-accent-foreground shadow-card">
              100 MISSÕES
            </span>
            <span className="absolute -right-2 -bottom-4 rotate-[6deg] rounded-2xl bg-sky px-4 py-2 font-display text-sm font-bold text-sky-foreground shadow-card">
              4–6 ANOS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
