import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "./Reveal";
import capa from "@/assets/hero-mockup.jpg";
import rimas from "@/assets/pagina-rimas.jpg";
import silabas from "@/assets/pagina-silabas.jpg";
import letras from "@/assets/pagina-letras.jpg";
import frases from "@/assets/pagina-frases.jpg";
import certificado from "@/assets/certificado.jpg";

const pages = [
  { src: capa, alt: "Capa do Kit Exploradores da Leitura", caption: "Capa do kit" },
  { src: rimas, alt: "Página de atividade Caça às Rimas", caption: "Caça às Rimas" },
  { src: silabas, alt: "Página de atividade Bate-Palmas das Sílabas", caption: "Bate-Palmas das Sílabas" },
  { src: letras, alt: "Página de atividade Caça à Letra", caption: "Caça à Letra" },
  { src: frases, alt: "Página de atividade Monte a Frase", caption: "Monte a Frase" },
  { src: certificado, alt: "Certificado de Superleitor", caption: "Certificado de Superleitor(a)" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const active = open === null ? null : pages[open];

  return (
    <section id="galeria" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">Veja por dentro</h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Uma pequena amostra das atividades que fazem parte da aventura.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:grid lg:grid-cols-3 lg:overflow-visible">
          {pages.map((p, i) => (
            <button
              key={p.caption}
              type="button"
              onClick={() => setOpen(i)}
              className="group w-[78vw] max-w-[320px] shrink-0 snap-center rounded-3xl border border-border bg-card p-3 text-left shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card lg:w-auto lg:max-w-none"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width={912}
                height={1200}
                className="aspect-[3/4] w-full rounded-2xl object-cover"
              />
              <span className="mt-3 block px-1 pb-1 font-display text-sm font-semibold text-foreground">
                {p.caption}
                <span className="ml-2 text-xs font-semibold text-muted-foreground">toque para ampliar</span>
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
