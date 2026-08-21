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
import { Check, ShieldCheck, Zap, X, ArrowRight } from "lucide-react";

interface UpsellDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDecline: () => void;
}

const benefits = [
  "Tudo do Kit Essencial.",
  "As 100 Missões completas de alfabetização.",
  "As 7 fases da jornada da leitura.",
  "Atividades de sons, letras, sílabas, palavras e frases.",
  "Jogos educativos e desafios lúdicos.",
  "Material completo pronto para impressão.",
  "Certificado de Superleitor(a).",
  "Acesso imediato e vitalício ao PDF.",
];

export function UpsellDialog({ open, onOpenChange, onDecline }: UpsellDialogProps) {
  const handleUpgrade = () => {
    trackEvent("upsell_aceito", { price: 14.9 });
    goToCheckout(CHECKOUT.upsell);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[520px] overflow-hidden rounded-[24px] border-none bg-white p-0 shadow-2xl">
        <div className="relative bg-white px-8 pt-10 pb-6 text-center">
          <div className="absolute top-4 right-4">
            <button 
              onClick={onDecline}
              className="rounded-full bg-slate-100 p-1 hover:bg-slate-200 transition-colors"
            >
              <X className="size-5 text-slate-500" />
            </button>
          </div>
          
          <div className="mb-4 inline-flex rounded-full bg-[#FEE2E2] px-4 py-1.5 text-[10px] font-bold tracking-widest text-[#B91C1C] uppercase">
            OFERTA ESPECIAL • SOMENTE NESTA PÁGINA
          </div>
          
          <DialogTitle className="font-display text-3xl font-bold leading-tight text-[#122E54]">
            Espere! Antes de continuar...
          </DialogTitle>
          <DialogDescription className="mt-4 text-[#475569] text-base leading-relaxed">
            Faça um upgrade para o <strong className="text-[#122E54]">Pacote Completo</strong> por apenas <strong className="text-[#122E54]">R$14,90</strong> e receba muito mais atividades para acelerar a alfabetização da criança.
          </DialogDescription>
        </div>

        <div className="px-8 pb-10">
          <div className="rounded-3xl bg-[#F8FAFC] p-6 mb-8">
            <ul className="grid gap-3 sm:grid-cols-1">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm font-medium text-[#475569]">
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] mt-0.5">
                    <Check className="size-3 text-[#166534]" />
                  </div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mb-6">
            <div className="text-sm font-medium text-[#94A3B8] line-through mb-1">
              de R$27,90
            </div>
            <div className="text-5xl font-display font-bold text-[#10B981]">
              R$14,90
            </div>
            <div className="mt-2 text-xs font-medium text-[#94A3B8]">
              Pagamento único • Acesso imediato.
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              variant="hero" 
              size="xl" 
              className="w-full text-lg shadow-lg group relative overflow-hidden" 
              onClick={handleUpgrade}
            >
              <span className="flex items-center justify-center gap-2">
                QUERO O PACOTE COMPLETO POR R$14,90
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            
            <button
              onClick={onDecline}
              className="block w-full text-center text-sm font-medium text-[#94A3B8] hover:text-[#475569] transition-colors"
            >
              Não, quero continuar apenas com o Kit Essencial.
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 border-t border-slate-100 pt-6 text-[10px] font-bold tracking-[0.15em] text-[#94A3B8] uppercase">
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
