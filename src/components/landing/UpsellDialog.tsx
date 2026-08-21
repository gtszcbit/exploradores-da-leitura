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
      <DialogContent className="flex max-h-[95dvh] w-[95vw] max-w-lg flex-col overflow-hidden rounded-[24px] border-0 bg-card p-0 shadow-lift sm:w-[92vw]">
        <div className="relative overflow-hidden bg-primary px-5 py-6 text-center sm:px-8 sm:py-8">
          <span className="relative inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 font-display text-[10px] font-bold tracking-wider text-accent-foreground uppercase shadow-sm">
            <Sparkles className="size-3" aria-hidden />
            OFERTA POR TEMPO LIMITADO
          </span>

          <h2 className="relative mt-4 font-display text-2xl leading-tight font-bold text-white sm:text-3xl">
            Espere! Antes de continuar...
          </h2>

          <p className="relative mx-auto mt-2 max-w-sm text-sm leading-relaxed text-white/90 sm:text-base font-medium">
            Faça upgrade para o Kit Completo por um preço especial, só nesta página.
          </p>
        </div>

        <div className="overflow-y-auto px-6 py-8 text-center sm:px-10">
          <div className="rounded-[20px] border border-border bg-muted/30 p-5 text-left">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {completo.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-foreground/80 font-medium">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-[#10b981]" aria-hidden strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center">
            <span className="text-xs font-semibold text-muted-foreground line-through">
              de R$ 27,90
            </span>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-sm font-semibold text-primary">por</span>
              <span className="font-display text-4xl font-bold text-primary sm:text-5xl">
                R$ 14,90
              </span>
            </div>
          </div>

          <Button
            variant="hero"
            size="xl"
            className="mt-8 w-full rounded-full shadow-soft"
            onClick={accept}
          >
            <span>QUERO O PACOTE COMPLETO</span>
            <ArrowRight className="size-5 shrink-0" aria-hidden />
          </Button>

          <button
            type="button"
            onClick={onDecline}
            className="mx-auto mt-6 block text-center text-xs font-semibold text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Não, quero apenas o Acesso Inicial
          </button>
        </div>
      </DialogContent>
      </DialogContent>
    </Dialog>
  );
}
