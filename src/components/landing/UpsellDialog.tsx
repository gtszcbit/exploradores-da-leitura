import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Reveal } from "./Reveal";
import { CHECKOUT, goToCheckout, trackEvent } from "@/lib/kit-content";
import { Check, ShieldCheck, Zap, X } from "lucide-react";

interface UpsellDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDecline: () => void;
}

const benefits = [
  "Acesso total às 100 missões educativas",
  "Todos os 7 mundos de aprendizagem",
  "Certificado de Superleitor personalizado",
  "Bônus: Guia prático para pais e educadores",
  "Acesso vitalício ao material completo",
];

export function UpsellDialog({ open, onOpenChange, onDecline }: UpsellDialogProps) {
  const handleUpgrade = () => {
    trackEvent("upsell_aceito", { price: 14.9 });
    goToCheckout(CHECKOUT.upsell);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg overflow-hidden rounded-[32px] border-none bg-white p-0 shadow-2xl">
        <div className="relative bg-[#122E54] px-8 py-10 text-center text-white">
          <div className="absolute top-4 right-4">
            <button 
              onClick={onDecline}
              className="rounded-full bg-white/10 p-1 hover:bg-white/20 transition-colors"
            >
              <X className="size-5" />
            </button>
          </div>
          
          <div className="mb-4 inline-flex rounded-full bg-[#86EFAC] px-4 py-1 text-[10px] font-bold tracking-widest text-[#065F46] uppercase">
            Oferta Única
          </div>
          
          <DialogTitle className="font-display text-3xl font-bold leading-tight">
            Espere! Antes de continuar...
          </DialogTitle>
          <DialogDescription className="mt-4 text-slate-300 text-lg">
            Garanta o Kit Completo agora por um valor simbólico exclusivo.
          </DialogDescription>
        </div>

        <div className="px-8 py-10">
          <ul className="space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm font-medium text-[#475569]">
                <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#E8F9F1]">
                  <Check className="size-3 text-[#065F46]" />
                </div>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-4">
            <Button variant="hero" size="xl" className="w-full text-lg shadow-xl" onClick={handleUpgrade}>
              QUERO O KIT COMPLETO
            </Button>
            
            <div className="text-center">
              <span className="text-sm font-medium text-[#94A3B8]">
                Por apenas mais <span className="font-bold text-[#122E54]">R$ 14,90</span>
              </span>
            </div>

            <button
              onClick={onDecline}
              className="block w-full text-center text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase transition-colors hover:text-[#475569]"
            >
              NÃO, OBRIGADO. QUERO APENAS O BÁSICO.
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 border-t border-slate-100 pt-8 text-[10px] font-bold tracking-[0.15em] text-[#94A3B8] uppercase">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="size-3" />
              Garantia Total
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="size-3" />
              Acesso Agora
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
