import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import nino from "@/assets/nino.png";
import { CHECKOUT, checkoutHref, NAV_LINKS } from "@/lib/kit-content";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground sm:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
        <span className="absolute top-8 left-[8%] text-xl animate-twinkle">⭐</span>
        <span className="absolute top-24 right-[10%] text-lg animate-twinkle [animation-delay:1s]">✨</span>
        <span className="absolute bottom-10 left-[24%] text-lg animate-float-slow">🗺️</span>
        <span className="absolute right-[26%] bottom-16 text-lg animate-float-slow [animation-delay:0.7s]">📖</span>
      </div>

      <div className="relative mx-auto grid max-w-5xl items-center gap-8 px-4 text-center sm:px-6 lg:grid-cols-[auto_1fr] lg:text-left">
        <Reveal>
          <img
            src={nino}
            alt="Nino, o Coelho Detetive, convidando para a aventura"
            loading="lazy"
            width={1024}
            height={1024}
            className="mx-auto w-40 animate-float-slow sm:w-52"
          />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl lg:text-5xl">
            Pronto para começar a aventura?
          </h2>
          <p className="mt-4 text-base opacity-90 sm:text-lg">
            100 missões estão esperando pelo próximo pequeno explorador.
          </p>

          <div className="mt-7 inline-flex flex-col items-center gap-1 rounded-3xl bg-primary-foreground/12 px-6 py-4 backdrop-blur">
            <span className="font-display text-xs font-bold tracking-[0.2em] uppercase">Kit completo</span>
            <span className="font-display text-4xl font-bold">R$ 24,90</span>
          </div>

          <div className="mt-7">
            <Button asChild variant="adventure" size="xl" className="w-full sm:w-auto">
              <a href={checkoutHref(CHECKOUT.kitCompleto)}>🚀 QUERO COMEÇAR AGORA</a>
            </Button>
          </div>
          <p className="mt-4 text-sm opacity-85">
            Kit digital em PDF • Para crianças de 4 a 6 anos
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-card py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold text-primary">Kit Exploradores da Leitura</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Material digital educativo para momentos de aprendizagem e alfabetização.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h3 className="font-display text-sm font-bold tracking-wide text-foreground uppercase">Navegue</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#topo" className="hover:text-primary">
                Início
              </a>
            </li>
            {NAV_LINKS.filter((l) => l.label !== "O que vem").map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-primary">
                  {l.label === "Dúvidas" ? "FAQ" : l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Links legais">
          <h3 className="font-display text-sm font-bold tracking-wide text-foreground uppercase">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#faq" className="hover:text-primary">
                Termos de Uso
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-primary">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-primary">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-border px-4 pt-6 sm:px-6">
        <p className="text-xs leading-relaxed text-muted-foreground">
          Este material é um recurso complementar de apoio à alfabetização e não substitui a escola,
          professores ou acompanhamento profissional.
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kit Exploradores da Leitura. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
