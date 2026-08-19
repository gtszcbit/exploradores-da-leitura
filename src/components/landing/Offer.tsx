import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { CHECKOUT, checkoutHref } from "@/lib/kit-content";
import { Check } from "lucide-react";

const basico = ["5 exercícios de alfabetização", "PDF digital", "Pronto para imprimir"];

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
  return (
    <section id="oferta" className="surface-paper border-y border-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-balance text-primary sm:text-4xl">
            Escolha como começar a aventura
          </h2>
        </Reveal>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-8">
              <h3 className="font-display text-xl font-semibold tracking-wide text-foreground uppercase">
                Acesso inicial
              </h3>
              <p className="mt-4 font-display text-4xl font-bold text-primary">R$ 10,00</p>
              <ul className="mt-6 space-y-3">
                {basico.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {i}
                  </li>
                ))}
              </ul>
              <Button asChild variant="explore" size="lg" className="mt-8 w-full">
                <a href={checkoutHref(CHECKOUT.acessoInicial)}>COMEÇAR POR R$ 10,00</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative h-full rounded-3xl border-2 border-primary bg-card p-7 shadow-lift sm:p-8">
              <span className="absolute -top-4 left-6 rounded-full bg-accent px-4 py-1.5 font-display text-xs font-bold tracking-wide text-accent-foreground uppercase shadow-card">
                ⭐ Mais vantajoso
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-wide text-primary uppercase">
                Kit completo
              </h3>
              <p className="mt-4 text-sm font-semibold text-muted-foreground line-through">De R$ 27,90</p>
              <p className="font-display text-5xl font-bold text-primary">R$ 24,90</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {completo.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {i}
                  </li>
                ))}
              </ul>
              <Button asChild variant="adventure" size="xl" className="mt-8 w-full">
                <a href={checkoutHref(CHECKOUT.kitCompleto)}>🚀 QUERO O KIT COMPLETO</a>
              </Button>
              <p className="mt-3 text-center text-xs font-semibold text-muted-foreground">
                Kit digital em PDF • Para crianças de 4 a 6 anos
              </p>
            </div>
          </Reveal>
        </div>
      </div>
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
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
            Uma compra simples e segura
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {security.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="flex h-full min-w-0 items-center gap-3 rounded-3xl border border-border bg-card p-5 shadow-soft">
                <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-secondary text-lg" aria-hidden>
                  {s.emoji}
                </span>
                <span className="min-w-0 text-sm font-semibold text-foreground/85">{s.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
