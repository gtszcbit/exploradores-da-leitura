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
      <DialogContent className="flex max-h-[92dvh] w-[92vw] max-w-lg flex-col overflow-hidden rounded-[2rem] border-0 bg-card p-0 shadow-lift">
        {/* Cabeçalho decorativo com gradiente */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-soft px-5 py-5 text-center sm:px-8 sm:py-10">
          {/* Círculos decorativos sutis */}
          <div className="absolute top-0 right-0 size-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/20 sm:size-32" />
          <div className="absolute bottom-0 left-0 size-16 -translate-x-1/3 translate-y-1/3 rounded-full bg-white/15 sm:size-24" />

          <div className="relative mx-auto mb-2 grid size-12 place-items-center rounded-2xl bg-white/20 shadow-sm backdrop-blur-sm sm:mb-4 sm:size-16">
            <Gift className="size-6 text-white sm:size-8" aria-hidden />
          </div>

          <span className="relative inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 font-display text-[10px] font-bold tracking-wider text-accent-foreground uppercase shadow-sm">
            <Sparkles className="size-3" aria-hidden />
            OFERTA POR TEMPO LIMITADO
          </span>

          <h2 className="relative mt-2.5 font-display text-lg leading-tight font-bold text-white sm:mt-4 sm:text-3xl">
            Espere! Antes de continuar...
          </h2>

          <p className="relative mx-auto mt-1.5 max-w-sm text-sm leading-relaxed text-[#064e3b] sm:mt-3 sm:text-base font-medium">
            Faça upgrade para o Kit Completo por um preço especial, só nesta página.
          </p>
        </div>

        {/* Corpo centralizado */}
        <div className="overflow-y-auto px-5 pt-4 pb-5 text-center sm:px-8 sm:pt-6 sm:pb-8">
          <p className="font-display text-base font-semibold text-foreground">
            Aproveite o upgrade exclusivo
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            O Kit Completo inclui tudo isso:
          </p>

          <div className="mt-3 rounded-2xl border border-primary/10 bg-primary-soft/60 p-3 text-left sm:mt-5 sm:p-5">
            <ul className="space-y-1.5 sm:space-y-2.5">
              {completo.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90 sm:gap-3">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3" aria-hidden strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Preço centralizado e destacado */}
          <div className="mt-3 flex flex-col items-center justify-center gap-1 sm:mt-6">
            <span className="text-sm font-semibold text-muted-foreground line-through">
              de R$ 27,90
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-semibold text-primary">por</span>
              <span className="font-display text-3xl font-bold text-primary sm:text-5xl">
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
            className="mt-4 w-full rounded-2xl shadow-card sm:mt-6"
            onClick={accept}
          >
            <span className="truncate">QUERO O PACOTE COMPLETO</span>
            <ArrowRight className="size-5 shrink-0" aria-hidden />
          </Button>

          <button
            type="button"
            onClick={onDecline}
            className="mx-auto mt-3 block text-center text-sm font-semibold text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground sm:mt-4"
          >
            Não, quero apenas o Acesso Inicial
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
