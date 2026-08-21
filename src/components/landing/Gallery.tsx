import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "./Reveal";

const pages = [
  { 
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1000&auto=format&fit=crop", 
    alt: "Criança realizando atividade de alfabetização", 
    caption: "Aprendizado na prática" 
  },
  { 
    src: "https://images.unsplash.com/photo-1544377624-d1794bd330ce?q=80&w=1000&auto=format&fit=crop", 
    alt: "Página de atividades de sons", 
    caption: "Floresta dos Sons" 
  },
  { 
    src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop", 
    alt: "Página de fonemas", 
    caption: "Caverna dos Fonemas" 
  },
  { 
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1000&auto=format&fit=crop", 
    alt: "Página de sílabas", 
    caption: "Vale das Sílabas" 
  },
  { 
    src: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1000&auto=format&fit=crop", 
    alt: "Página de palavras", 
    caption: "Vila das Palavras" 
  },
  { 
    src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1000&auto=format&fit=crop", 
    alt: "Certificado de conclusão", 
    caption: "Torre dos Campeões" 
  },
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
                  className="aspect-[3/4] w-full rounded-2xl object-cover bg-slate-50"
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
