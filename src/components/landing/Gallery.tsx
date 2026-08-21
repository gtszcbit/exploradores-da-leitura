import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "./Reveal";
import capa from "@/assets/pdf-capa.jpg.asset.json";
import sons from "@/assets/pdf-sons.jpg.asset.json";
import fonemas from "@/assets/pdf-fonemas.jpg.asset.json";
import silabas from "@/assets/pdf-silabas.jpg.asset.json";
import palavras from "@/assets/pdf-palavras.jpg.asset.json";
import historias from "@/assets/pdf-historias.jpg.asset.json";

const pages = [
  { src: capa.url, alt: "Capa do Kit Exploradores da Leitura", caption: "Capa do kit" },
  { src: sons.url, alt: "Página da Floresta dos Sons", caption: "Floresta dos Sons" },
  { src: fonemas.url, alt: "Página da Caverna dos Fonemas: Junte os Sons", caption: "Caverna dos Fonemas" },
  { src: silabas.url, alt: "Página do Vale das Sílabas", caption: "Vale das Sílabas" },
  { src: palavras.url, alt: "Página da Vila das Palavras", caption: "Vila das Palavras" },
  { src: historias.url, alt: "Página da Torre dos Campeões: O Grande Detetive das Letras", caption: "Torre dos Campeões" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const active = open === null ? null : pages[open];

  return (
    <section id="galeria" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">Veja por dentro</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Uma amostra das atividades que fazem parte da aventura.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-8 sm:px-6 lg:mx-auto lg:max-w-6xl lg:grid lg:grid-cols-3 lg:overflow-visible">
          {pages.map((p, i) => (
            <button
              key={p.caption}
              type="button"
              onClick={() => setOpen(i)}
              className="group w-[85vw] max-w-[320px] shrink-0 snap-center rounded-[24px] border border-border bg-card p-3 text-left shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card lg:w-auto lg:max-w-none"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width={912}
                height={1200}
                className="aspect-[3/4] w-full rounded-[18px] object-contain bg-muted/20"
              />
              <span className="mt-4 block px-1 pb-1 font-display text-base font-semibold text-primary">
                {p.caption}
                <span className="ml-2 text-xs font-medium text-muted-foreground block lg:inline lg:mt-0 mt-1">Clique para ampliar</span>
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-[92vw] rounded-3xl p-3 sm:max-w-xl">
          <DialogTitle className="sr-only">{active?.caption ?? "Página do kit"}</DialogTitle>
          {active && (
            <img src={active.src} alt={active.alt} className="w-full rounded-2xl" width={912} height={1200} />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
