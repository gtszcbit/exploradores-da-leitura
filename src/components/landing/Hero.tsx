import { Button } from "@/components/ui/button";
import capa from "@/assets/pdf-capa.jpg.asset.json";
import { Zap, Lock, ShieldCheck } from "lucide-react";

const bullets = [
  { text: "Acesso imediato", icon: Zap },
  { text: "Compra segura", icon: Lock },
  { text: "Garantia de 7 dias", icon: ShieldCheck },
];

const newBullets = [
  { text: "100 atividades de alfabetização.", icon: Zap },
  { text: "PDF pronto para imprimir.", icon: Lock },
  { text: "Acesso imediato e vitalício.", icon: ShieldCheck },
];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="reveal-in inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-2 font-display text-xs font-semibold tracking-wide text-primary uppercase">
            📚 Kit educativo • Premium
          </span>

          <h1 className="reveal-in mt-6 font-display text-4xl leading-[1.1] font-bold text-balance text-primary sm:text-6xl lg:text-7xl">
            Transforme a alfabetização em uma aventura!
          </h1>

          <p className="reveal-in mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl lg:mx-0">
            Uma jornada lúdica com atividades que despertam o interesse da criança
            pelos sons, letras e palavras de forma natural.
          </p>

          <div className="mt-10 flex w-full max-w-md flex-col gap-4 lg:max-w-sm">
            <Button asChild variant="hero" size="xl" className="w-full">
              <a href="#oferta">QUERO COMEÇAR</a>
            </Button>
            <Button asChild variant="explore" size="xl" className="w-full">
              <a href="#galeria">VER POR DENTRO</a>
            </Button>
          </div>

          <ul className="mt-10 flex flex-col items-center gap-3 lg:items-start">
            {newBullets.map((b) => (
              <li key={b.text} className="flex items-center gap-3 text-sm font-medium text-muted-foreground sm:text-base">
                <div className="flex size-5 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <b.icon className="size-3" aria-hidden />
                </div>
                {b.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal-in relative mx-auto w-full max-w-md [animation-delay:150ms] lg:max-w-none">
          <div className="relative rounded-[32px] bg-card p-4 shadow-card">
            <img
              src={capa.url}
              width={703}
              height={970}
              alt="Capa do Kit Exploradores da Leitura"
              className="w-full rounded-[24px] object-contain"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
