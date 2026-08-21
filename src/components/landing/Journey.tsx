import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import nino from "@/assets/nino.png";
import certificado from "@/assets/pdf-certificado.jpg.asset.json";

const steps = [
  { n: "01", emoji: "🛒", title: "COMPRE", desc: "Escolha o kit e finalize sua compra." },
  { n: "02", emoji: "📩", title: "RECEBA", desc: "Tenha acesso ao material digital após a confirmação do pagamento." },
  { n: "03", emoji: "🖨️", title: "IMPRIMA E EXPLORE", desc: "Imprima as atividades e comece a jornada com a criança." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-accent-soft/60 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
            Começar a aventura é simples
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="h-full rounded-3xl border border-border bg-card p-7 text-center shadow-soft">
                <span className="mx-auto grid size-16 place-items-center rounded-3xl bg-secondary text-3xl" aria-hidden>
                  {s.emoji}
                </span>
                <span className="mt-4 block font-display text-sm font-bold tracking-[0.2em] text-tangerine-foreground">
                  {s.n}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const audiences = [
  {
    emoji: "👨‍👩‍👧",
    title: "Pais e responsáveis",
    desc: "Para quem quer atividades educativas prontas para utilizar em casa.",
  },
  {
    emoji: "🏫",
    title: "Educadores",
    desc: "Para complementar momentos de alfabetização com atividades variadas.",
  },
  {
    emoji: "🐰",
    title: "Pequenos exploradores",
    desc: "Para crianças que podem aprender através de desafios, descobertas e brincadeiras.",
  },
];

export function ForWho() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-balance text-primary sm:text-4xl">
            Para todos os pequenos exploradores
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 100}>
              <div className="h-full rounded-[24px] border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                <div className="grid size-14 place-items-center rounded-2xl bg-primary-soft text-3xl" aria-hidden>
                  {a.emoji}
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-primary">{a.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NinoSection() {
  return (
    <section className="bg-primary-soft py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <span className="font-display text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            🔎 O guia da jornada
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Conheça o Nino!</h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-secondary-foreground sm:text-lg">
            Ele é o Coelho Detetive que acompanha o pequeno explorador durante essa jornada. Com a
            lupa na mão, o Nino aparece nas missões incentivando cada nova descoberta.
          </p>
        </Reveal>
        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute inset-6 -z-10 rounded-full bg-card/70 blur-2xl" aria-hidden />
            <img
              src={nino}
              alt="Nino, o Coelho Detetive, segurando uma lupa"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full animate-float-slow"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Achievement() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <span className="absolute top-10 left-[10%] text-xl animate-twinkle">⭐</span>
        <span className="absolute top-24 right-[12%] text-lg animate-twinkle [animation-delay:1s]">🎉</span>
        <span className="absolute bottom-12 left-[20%] text-lg animate-twinkle [animation-delay:1.8s]">✨</span>
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="rotate-[-1.5deg] rounded-4xl border-4 border-card bg-card p-3 shadow-lift">
            <img
              src={certificado.url}
              alt="Certificado de Superleitor(a) do Kit Exploradores da Leitura"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full rounded-3xl"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 font-display text-xs font-bold tracking-wide text-accent-foreground uppercase">
            🏆 A grande conquista
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-balance text-primary sm:text-4xl">
            E toda grande aventura merece uma recompensa.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Depois de completar as 100 missões, a criança chega ao desafio final e recebe um
            certificado especial de Superleitor(a).
          </p>
          <Button asChild variant="hero" size="xl" className="mt-8 w-full sm:w-auto">
            <a href="#oferta">🚀 QUERO COMEÇAR A JORNADA</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
