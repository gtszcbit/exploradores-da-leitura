import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CHECKOUT, goToCheckout, trackEvent } from "@/lib/kit-content";
import { Check, ArrowRight } from "lucide-react";

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
      <DialogContent className="max-h-[92dvh] w-[92vw] max-w-md overflow-x-hidden overflow-y-auto rounded-3xl border-0 bg-background p-0 shadow-lift">
        <div className="px-6 pt-7 pb-6 sm:px-8">
          <span className="inline-flex items-center rounded-full bg-destructive/15 px-3 py-1.5 font-display text-[11px] font-bold tracking-wide text-destructive uppercase">
            OFERTA POR TEMPO LIMITADO
          </span>

          <h2 className="mt-4 font-display text-2xl leading-tight font-bold text-foreground sm:text-3xl">
            Espere! Antes de continuar...
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Faça upgrade para o Kit Completo por um preço especial, só nesta página.
          </p>

          <div className="mt-5 rounded-2xl bg-sky-soft/60 p-4 sm:p-5">
            <ul className="space-y-2.5">
              {completo.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-base font-semibold text-muted-foreground line-through">
              de R$ 27,90
            </span>
            <span className="font-display text-4xl font-bold text-primary sm:text-5xl">
              R$ 14,90
            </span>
          </div>

          <Button
            variant="hero"
            size="xl"
            className="mt-5 w-full rounded-2xl"
            onClick={accept}
          >
            <span className="truncate">QUERO O PACOTE COMPLETO POR R$ 14,90</span>
            <ArrowRight className="size-5 shrink-0" aria-hidden />
          </Button>

          <button
            type="button"
            onClick={onDecline}
            className="mx-auto mt-4 block text-center text-sm font-semibold text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Não, quero apenas o Acesso Inicial
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
