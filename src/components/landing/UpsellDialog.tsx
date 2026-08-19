import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import nino from "@/assets/nino.png";
import { CHECKOUT, goToCheckout, trackEvent } from "@/lib/kit-content";
import { Check } from "lucide-react";

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
      <DialogContent
        className="surface-paper max-h-[90dvh] w-[90vw] max-w-lg overflow-x-hidden overflow-y-auto rounded-3xl border-2 border-primary bg-background p-0 shadow-lift sm:w-full"
      >
        <div className="relative px-5 pt-8 pb-6 text-center sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full bg-accent px-3 py-1.5 font-display text-[11px] font-bold tracking-wide text-accent-foreground uppercase shadow-card">
              ⭐ Oferta especial
            </span>
            <span className="rounded-full bg-primary px-3 py-1.5 font-display text-[11px] font-bold tracking-wide text-primary-foreground uppercase shadow-card">
              100 missões
            </span>
          </div>

          <img
            src={nino}
            alt="Nino, o Coelho Detetive"
            className="mx-auto mt-4 h-24 w-auto object-contain sm:h-28"
          />

          <h2 className="mt-3 font-display text-2xl leading-tight font-bold text-balance text-primary sm:text-3xl">
            Espere! Temos uma condição especial para você 🚀
          </h2>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
            Você escolheu começar com 5 atividades. Mas, por apenas mais R$ 4,90, pode levar o Kit
            Completo com as 100 missões.
          </p>

          <div className="mt-6 rounded-3xl border-2 border-primary bg-card p-5 shadow-card">
            <p className="text-sm font-semibold text-muted-foreground line-through">DE R$ 27,90</p>
            <p className="font-display text-xs font-bold tracking-widest text-accent-foreground uppercase">
              por apenas
            </p>
            <p className="font-display text-5xl leading-none font-bold text-primary sm:text-6xl">
              R$ 14,90
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Preço normal do Kit Completo: R$ 27,90. Esta condição de R$ 14,90 é exclusiva desta tela.
            </p>
          </div>

          <div className="mt-5 grid gap-3 text-left sm:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card/80 p-4">
              <p className="font-display text-lg font-bold text-foreground/70">R$ 10,00</p>
              <p className="mt-1 text-sm text-muted-foreground">5 exercícios de alfabetização</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Você estava prestes a adquirir 5 exercícios por R$ 10,00.
              </p>
            </div>
            <div className="relative rounded-3xl border-2 border-primary bg-primary-soft p-4">
              <span className="absolute -top-3 left-4 rounded-full bg-accent px-3 py-1 font-display text-[10px] font-bold tracking-wide text-accent-foreground uppercase">
                Melhor escolha
              </span>
              <p className="font-display text-lg font-bold text-primary">R$ 14,90</p>
              <ul className="mt-2 space-y-1.5">
                {["100 missões", "7 mundos de aprendizagem", "Certificado de Superleitor(a)"].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {i}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-primary/80">
                Agora você pode desbloquear o Kit Completo por apenas R$ 14,90.
              </p>
            </div>
          </div>

          <Button variant="adventure" size="xl" className="mt-6 w-full" onClick={accept}>
            <span className="truncate">🚀 SIM! QUERO O KIT COMPLETO POR R$ 14,90</span>
          </Button>

          <button
            type="button"
            onClick={onDecline}
            className="mx-auto mt-4 block max-w-full text-center text-xs leading-relaxed text-muted-foreground underline underline-offset-4 hover:text-foreground sm:text-sm"
          >
            Não, obrigado. Quero continuar com os 5 exercícios por R$ 10,00.
          </button>

          <p className="mt-4 text-xs font-semibold text-muted-foreground">
            🔒 Compra segura • 🛡️ Garantia de 7 dias
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
