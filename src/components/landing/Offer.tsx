import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { UpsellDialog } from "./UpsellDialog";
import { CHECKOUT, goToCheckout, trackEvent } from "@/lib/kit-content";
import { Check, ShieldCheck, Zap } from "lucide-react";

const basico = ["5 exercícios de alfabetização", "PDF digital", "Material pronto para imprimir"];

const completo = [
  "100 missões educativas",
  "7 mundos de aprendizagem",
  "Consciência fonológica",
  "Consciência fonêmica",
  "Letras e sons",
  "Sílabas e decodificação",
  "Leitura de palavras e frases",
  "Certificado de Superleitor(a)",
  "Acesso vitalício",
];

export function Offer() {
  const [upsellOpen, setUpsellOpen] = useState(false);
  const [upsellSeen, setUpsellSeen] = useState(false);

  const handleAcessoInicial = () => {
    trackEvent("clique_oferta_10", { price: 10 });
    setUpsellOpen(true);
    return;
    setUpsellSeen(true);
    setUpsellOpen(true);
  };

  const handleKitCompleto = () => {
    trackEvent("clique_kit_completo", { price: 27.9 });
    goToCheckout(CHECKOUT.kitCompleto);
  };

  return (
    <section id="oferta" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-[#122E54] sm:text-5xl">
            Escolha o melhor plano
          </h2>
          <p className="mt-4 text-lg text-[#64748B]">
            Comece agora mesmo a transformar a alfabetização em diversão.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-2">
          {/* Plano Básico */}
          <Reveal>
            <div className="flex flex-col rounded-[32px] border border-slate-100 bg-white p-10 shadow-sm transition-all hover:shadow-soft">
              <h3 className="text-sm font-bold tracking-widest text-[#94A3B8] uppercase">
                Acesso Inicial
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-[#122E54]">R$</span>
                <span className="text-5xl font-bold tracking-tight text-[#122E54]">10,00</span>
              </div>
              
              <ul className="mt-10 space-y-4">
                {basico.map((i) => (
                  <li key={i} className="flex items-center gap-3 text-base text-[#475569]">
                    <Check className="size-5 text-[#86EFAC]" />
                    {i}
                  </li>
                ))}
              </ul>

              <Button variant="explore" size="xl" className="mt-10 w-full" onClick={handleAcessoInicial}>
                COMEÇAR AGORA
              </Button>
            </div>
          </Reveal>

          {/* Plano Premium (Kit Completo) */}
          <Reveal delay={100}>
            <div className="relative flex flex-col rounded-[32px] border-2 border-[#86EFAC]/20 bg-white p-10 shadow-soft lg:scale-105">
              <div className="absolute -top-4 right-10 rounded-full bg-[#86EFAC] px-4 py-1 text-[10px] font-bold tracking-widest text-[#065F46] uppercase">
                Mais Escolhido
              </div>
              
              <h3 className="text-sm font-bold tracking-widest text-[#065F46] uppercase">
                Kit Completo
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-[#122E54]">R$</span>
                <span className="text-5xl font-bold tracking-tight text-[#122E54]">27,90</span>
                <span className="ml-2 text-lg text-[#94A3B8] line-through">R$ 49,90</span>
              </div>

              <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {completo.map((i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#475569]">
                    <Check className="size-4 text-[#86EFAC]" />
                    {i}
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-4">
                <Button variant="hero" size="xl" className="w-full text-lg" onClick={handleKitCompleto}>
                  QUERO O KIT COMPLETO
                </Button>
                
                <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="size-3" />
                    Compra Segura
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="size-3" />
                    Acesso Imediato
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <UpsellDialog open={upsellOpen} onOpenChange={setUpsellOpen} onDecline={() => {
        setUpsellOpen(false);
        goToCheckout(CHECKOUT.acessoInicial);
      }} />
    </section>
  );
}
