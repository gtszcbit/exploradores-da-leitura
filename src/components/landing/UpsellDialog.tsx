import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CHECKOUT, goToCheckout, trackEvent } from "@/lib/kit-content";
import { Check, ArrowRight, Sparkles, Gift } from "lucide-react";

const completo = [
  "Tudo do Acesso Inicial",
  "100 missões de alfabetização",
  "7 mundos de aprendizagem",
  "Consciência fonológica e fonêmica",
  "Letras, sílabas e palavras",
  "Frases e compreensão leitora",
  "Missões finais",
  "Certificado de Superleitor(a)",
];

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDecline: () => void;
};

export function UpsellDialog({ open, onOpenChange, onDecline }: Props) {
  const accept = () => {
    trackEvent("upsell_aceito", { price: 14.9 });
    goToCheckout(CHECKOUT.upsell);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92dvh] w-[92vw] max-w-lg overflow-x-hidden overflow-y-auto rounded-[2rem] border-0 bg-card p-0 shadow-lift">
        {/* Cabeçalho decorativo com gradiente */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-soft px-6 py-8 text-center sm:px-8 sm:py-10">
          {/* Círculos decorativos sutis */}
          <div className="absolute top-0 right-0 size-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/20" />
          <div className="absolute bottom-0 left-0 size-24 -translate-x-1/3 translate-y-1/3 rounded-full bg-white/15" />

          <div className="relative mx-auto mb-4 grid size-16 place-items-center rounded-2xl bg-white/20 shadow-sm backdrop-blur-sm">
            <Gift className="size-8 text-white" aria-hidden />
          </div>

          <span className="relative inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 font-display text-[11px] font-bold tracking-wider text-accent-foreground uppercase shadow-sm">
            <Sparkles className="size-3.5" aria-hidden />
            OFERTA POR TEMPO LIMITADO
          </span>

          <h2 className="relative mt-4 font-display text-2xl leading-tight font-bold text-white sm:text-3xl">
            Espere! Antes de continuar...
          </h2>

          <p className="relative mx-auto mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
            Faça upgrade para o Kit Completo por um preço especial, só nesta página.
          </p>
        </div>

        {/* Corpo centralizado */}
        <div className="px-6 pt-6 pb-7 text-center sm:px-8 sm:pb-8">
          <p className="font-display text-base font-semibold text-foreground">
            Aproveite o upgrade exclusivo
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            O Kit Completo inclui tudo isso:
          </p>

          <div className="mt-5 rounded-2xl border border-primary/10 bg-primary-soft/60 p-4 text-left sm:p-5">
            <ul className="space-y-3">
              {completo.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3" aria-hidden strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Preço centralizado e destacado */}
          <div className="mt-6 flex flex-col items-center justify-center gap-1">
            <span className="text-sm font-semibold text-muted-foreground line-through">
              de R$ 27,90
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-semibold text-primary">por</span>
              <span className="font-display text-5xl font-bold text-primary sm:text-6xl">
                R$ 14,90
              </span>
            </div>
            <span className="mt-1 inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent-foreground">
              ECONOMIA DE R$ 13,00
            </span>
          </div>

          <Button
            variant="hero"
            size="xl"
            className="mt-6 w-full rounded-2xl shadow-card"
            onClick={accept}
          >
            <span className="truncate">QUERO O PACOTE COMPLETO POR R$ 14,90</span>
            <ArrowRight className="size-5 shrink-0" aria-hidden />
          </Button>

          <button
            type="button"
            onClick={onDecline}
            className="mx-auto mt-4 block text-center text-sm font-semibold text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Não, quero apenas o Acesso Inicial
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
