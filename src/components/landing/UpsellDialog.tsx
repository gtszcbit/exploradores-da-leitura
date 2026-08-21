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
      <DialogContent className="flex max-h-[95dvh] w-[95vw] max-w-lg flex-col overflow-hidden rounded-[1.5rem] border-0 bg-card p-0 shadow-lift sm:w-[92vw] sm:rounded-[2rem]">
        {/* Cabeçalho decorativo com gradiente */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-soft px-5 py-3 text-center sm:px-8 sm:py-6">
          {/* Círculos decorativos sutis */}
          <div className="absolute top-0 right-0 size-20 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/20 sm:size-32" />
          <div className="absolute bottom-0 left-0 size-12 -translate-x-1/3 translate-y-1/3 rounded-full bg-white/15 sm:size-24" />

          <span className="relative inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 font-display text-[9px] font-bold tracking-wider text-accent-foreground uppercase shadow-sm sm:px-3 sm:py-1.5 sm:text-[10px]">
            <Sparkles className="size-2.5 sm:size-3" aria-hidden />
            OFERTA POR TEMPO LIMITADO
          </span>

          <h2 className="relative mt-2 font-display text-lg leading-tight font-bold text-white sm:mt-3 sm:text-2xl">
            Espere! Antes de continuar...
          </h2>

          <p className="relative mx-auto mt-1 max-w-sm text-xs leading-relaxed text-[#064e3b] sm:mt-2 sm:text-base font-medium">
            Faça upgrade para o Kit Completo por um preço especial, só nesta página.
          </p>
        </div>

        {/* Corpo centralizado */}
        <div className="overflow-y-auto px-5 pt-3 pb-4 text-center sm:px-8 sm:pt-4 sm:pb-6">
          <p className="text-xs font-semibold text-muted-foreground sm:text-sm">
            O Kit Completo inclui tudo isso:
          </p>

          <div className="mt-2 rounded-xl border border-primary/10 bg-primary-soft/60 p-2 text-left sm:mt-4 sm:rounded-2xl sm:p-4">
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-2">
              {completo.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[11px] text-foreground/90 sm:text-xs">
                  <span className="mt-0.5 grid size-3.5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-2" aria-hidden strokeWidth={4} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Preço centralizado e destacado */}
          <div className="mt-3 flex flex-col items-center justify-center sm:mt-4">
            <span className="text-[10px] font-semibold text-muted-foreground line-through sm:text-xs">
              de R$ 27,90
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xs font-semibold text-primary sm:text-sm">por</span>
              <span className="font-display text-2xl font-bold text-primary sm:text-4xl">
                R$ 14,90
              </span>
            </div>
            <span className="mt-0.5 inline-flex items-center rounded-full bg-accent/20 px-2 py-0.5 text-[9px] font-bold text-accent-foreground sm:text-xs">
              ECONOMIA DE R$ 13,00
            </span>
          </div>

          <Button
            variant="hero"
            size="lg"
            className="mt-3 w-full rounded-xl shadow-card sm:mt-4 sm:rounded-2xl"
            onClick={accept}
          >
            <span className="truncate">QUERO O PACOTE COMPLETO</span>
            <ArrowRight className="size-4 shrink-0 sm:size-5" aria-hidden />
          </Button>

          <button
            type="button"
            onClick={onDecline}
            className="mx-auto mt-2.5 block text-center text-[10px] font-semibold text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground sm:mt-3 sm:text-xs"
          >
            Não, quero apenas o Acesso Inicial
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
