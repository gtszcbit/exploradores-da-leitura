import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { UpsellDialog } from "./UpsellDialog";
import { CHECKOUT, goToCheckout, trackEvent } from "@/lib/kit-content";
import { Check } from "lucide-react";

const basico = ["5 exercícios de alfabetização", "PDF digital", "Material pronto para imprimir"];

const completo = [
  "100 missões",
  "7 mundos de aprendizagem",
  "Consciência fonológica",
  "Consciência fonêmica",
  "Letras e sons",
  "Sílabas e decodificação",
  "Leitura de palavras",
  "Frases e compreensão",
  "Missões finais",
  "Certificado de Superleitor(a)",
];

export function Offer() {
  const [upsellOpen, setUpsellOpen] = useState(false);
  const [upsellSeen, setUpsellSeen] = useState(false);

  const handleAcessoInicial = () => {
    trackEvent("clique_oferta_10", { price: 10 });
    if (upsellSeen) {
      goToCheckout(CHECKOUT.acessoInicial);
      return;
    }
    setUpsellSeen(true);
    setUpsellOpen(true);
    trackEvent("upsell_visualizado", { price: 14.9 });
  };

  const handleDecline = () => {
    trackEvent("upsell_recusado", { price: 10 });
    setUpsellOpen(false);
    goToCheckout(CHECKOUT.acessoInicial);
  };

  const handleKitCompleto = () => {
    trackEvent("clique_kit_completo", { price: 27.9 });
    goToCheckout(CHECKOUT.kitCompleto);
  };

  return (
    <section id="oferta" className="bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold text-balance text-primary sm:text-5xl">
            Escolha o melhor plano
          </h2>
        </Reveal>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-[24px] border border-border bg-card p-8 shadow-soft">
              <h3 className="font-display text-lg font-semibold tracking-wide text-foreground uppercase">
                Acesso inicial
              </h3>
              <p className="mt-4 font-display text-4xl font-bold text-primary">R$ 10,00</p>
              <ul className="mt-6 flex-1 space-y-3">
                {basico.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {i}
                  </li>
                ))}
              </ul>
              <Button variant="explore" size="lg" className="mt-8 w-full rounded-full" onClick={handleAcessoInicial}>
                COMEÇAR POR R$ 10,00
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative flex h-full flex-col rounded-[24px] border border-primary/20 bg-card p-8 shadow-lift lg:scale-105 lg:z-10">
              <span className="absolute -top-4 left-6 rounded-full bg-[#10b981] px-4 py-1.5 font-display text-xs font-bold tracking-wide text-white shadow-soft">
                ⭐ MAIS VANTAJOSO
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold tracking-wide text-primary uppercase">
                Kit completo
              </h3>
              <p className="mt-4 font-display text-5xl font-bold text-primary">R$ 27,90</p>
              <ul className="mt-6 flex-1 grid gap-3 sm:grid-cols-2">
                {completo.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-[#10b981]" aria-hidden />
                    {i}
                  </li>
                ))}
              </ul>
              <Button variant="adventure" size="xl" className="mt-8 w-full rounded-full" onClick={handleKitCompleto}>
                <span className="truncate">🚀 QUERO O KIT COMPLETO — R$ 27,90</span>
              </Button>
              <p className="mt-3 text-center text-xs font-semibold text-muted-foreground">
                Kit digital em PDF • Para crianças de 4 a 6 anos
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <UpsellDialog open={upsellOpen} onOpenChange={setUpsellOpen} onDecline={handleDecline} />
    </section>
  );
}


const security = [
  { emoji: "🔒", title: "Pagamento seguro" },
  { emoji: "📄", title: "Produto digital" },
  { emoji: "⚡", title: "Acesso após confirmação" },
  { emoji: "🖨️", title: "Material pronto para imprimir" },
];

export function Security() {
  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-xl font-bold text-primary sm:text-2xl opacity-80">
            Sua compra segura
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {security.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="flex h-full min-w-0 items-center gap-3 rounded-[20px] border border-border bg-card p-4 shadow-soft">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-lg" aria-hidden>
                  {s.emoji}
                </span>
                <span className="min-w-0 text-xs font-bold text-primary/80 uppercase tracking-wider">{s.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
