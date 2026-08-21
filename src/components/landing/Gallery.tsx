import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "./Reveal";
import capa from "@/assets/kit_cover_v2.jpeg.asset.json";
import sons from "@/assets/floresta-dos-sons.png.asset.json";
import fonemas from "@/assets/chatgpt-image-fonemas.png.asset.json";
import silabas from "@/assets/chatgpt-image-silabas.png.asset.json";
import historias from "@/assets/chatgpt-image-torre.png.asset.json";

const pages = [
  { src: capa.url, alt: "Capa do Kit Exploradores da Leitura", caption: "Capa do kit" },
  { src: sons.url, alt: "Página da Floresta dos Sons", caption: "Floresta dos Sons" },
  { src: fonemas.url, alt: "Página da Caverna dos Fonemas: Junte os Sons", caption: "Caverna dos Fonemas" },
  { src: silabas.url, alt: "Página do Vale das Sílabas", caption: "Vale das Sílabas" },
  { src: historias.url, alt: "Página da Torre dos Campeões: O Grande Detetive das Letras", caption: "Torre dos Campeões" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const active = open === null ? null : pages[open];

  return (
    <section id="galeria" className="bg-[#F8FAFC] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#122E54] sm:text-4xl">Veja por dentro</h2>
          <p className="mt-4 text-lg text-[#64748B]">
            Uma amostra das atividades que fazem parte da aventura.
          </p>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((p, i) => (
            <Reveal key={p.caption} delay={i * 50}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group w-full overflow-hidden rounded-3xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-soft"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  width={912}
                  height={1200}
                  className="aspect-[3/4] w-full rounded-2xl object-contain bg-slate-50"
                />
                <span className="mt-4 flex items-center justify-between px-2 pb-2">
                  <span className="font-display text-lg font-bold text-[#122E54]">
                    {p.caption}
                  </span>
                  <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Expandir</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-[92vw] border-none bg-transparent p-0 shadow-none sm:max-w-2xl">
          <DialogTitle className="sr-only">{active?.caption ?? "Página do kit"}</DialogTitle>
          {active && (
            <img src={active.src} alt={active.alt} className="w-full rounded-3xl shadow-2xl" width={912} height={1200} />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
