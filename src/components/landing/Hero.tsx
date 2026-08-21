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
    <section id="topo" className="relative overflow-hidden bg-white pb-16 pt-24 sm:pb-24 lg:pb-32 lg:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="reveal-in flex flex-col items-center">
            <span className="inline-flex items-center rounded-full bg-[#E8F9F1] px-4 py-1.5 text-xs font-bold tracking-wider text-[#065F46] uppercase">
              PDF Digital • 4 a 6 anos
            </span>

            <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[1.1] font-bold tracking-tight text-[#122E54] sm:text-6xl lg:text-7xl">
              Transforme a alfabetização em uma aventura!
            </h1>
          </div>

          <div className="reveal-in mt-12 w-full max-w-lg">
            <div className="relative rounded-3xl bg-white p-6 shadow-soft transition-transform hover:scale-[1.02]">
              <img
                src={capa.url}
                width={703}
                height={970}
                alt="Mockup Kit Exploradores da Leitura"
                className="w-full rounded-2xl shadow-sm lg:shadow-md"
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="reveal-in mt-12 flex flex-col items-center">
            <p className="max-w-2xl text-lg leading-relaxed text-[#475569] sm:text-xl">
              Uma jornada lúdica com atividades que despertam o interesse da criança
              pelos sons e letras.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
              {newBullets.map((b) => (
                <div key={b.text} className="flex items-center gap-2 text-sm font-semibold text-[#64748B]">
                  <div className="size-1.5 rounded-full bg-[#86EFAC]" />
                  {b.text.replace('.', '')}
                </div>
              ))}
            </div>

            <div className="mt-10 w-full max-w-sm">
              <Button asChild variant="hero" size="xl" className="w-full px-12">
                <a href="#oferta">QUERO COMEÇAR</a>
              </Button>
              <p className="mt-4 text-center text-xs font-semibold tracking-wide text-[#94A3B8] uppercase">
                Acesso imediato • Garantia de 7 dias
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
