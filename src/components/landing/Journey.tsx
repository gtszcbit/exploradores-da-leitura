import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import nino from "@/assets/nino.png";
import certificado from "@/assets/pdf-certificado.jpg.asset.json";
import { WORLDS } from "@/lib/kit-content";

export function ForWho() {
  const audiences = [
    {
      title: "Pais e responsáveis",
      desc: "Para quem quer atividades educativas prontas para utilizar em casa.",
    },
    {
      title: "Educadores",
      desc: "Para complementar momentos de alfabetização com atividades variadas.",
    },
    {
      title: "Pequenos exploradores",
      desc: "Para crianças que podem aprender através de desafios e brincadeiras.",
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#122E54] sm:text-4xl">
            Benefícios para todos
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 100}>
              <div className="group rounded-3xl border border-slate-100 bg-white p-10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft">
                <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-[#E8F9F1]">
                  <div className="size-2 rounded-full bg-[#065F46]" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#122E54]">{a.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[#64748B]">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorldsSection() {
  return (
    <section id="missoes" className="bg-[#F8FAFC] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#122E54] sm:text-4xl">
            Uma jornada em 7 fases
          </h2>
          <p className="mt-4 text-lg text-[#64748B]">
            Cada etapa foi pensada para o desenvolvimento progressivo da criança.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WORLDS.map((w, i) => (
            <Reveal key={w.name} delay={i * 50}>
              <div className="h-full rounded-3xl bg-white p-8 shadow-sm transition-all hover:shadow-soft">
                <div className="mb-4 text-3xl">{w.emoji}</div>
                <h3 className="font-display text-lg font-bold text-[#122E54]">{w.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{w.skill}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Achievement() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <img
                src={certificado.url}
                alt="Certificado do Kit"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full rounded-2xl"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="inline-flex items-center rounded-full bg-[#FEF9C3] px-4 py-1.5 text-xs font-bold tracking-wider text-[#854D0E] uppercase">
              🏆 Conquista final
            </span>
            <h2 className="mt-8 font-display text-3xl font-bold tracking-tight text-[#122E54] sm:text-4xl">
              Toda grande aventura merece uma recompensa.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#475569]">
              Ao completar as 100 missões, a criança recebe um certificado especial de Superleitor(a).
            </p>
            <Button asChild variant="hero" size="xl" className="mt-10 w-full px-12 sm:w-auto">
              <a href="#oferta">QUERO COMEÇAR A JORNADA</a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
