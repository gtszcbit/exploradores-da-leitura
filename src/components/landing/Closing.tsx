import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import nino from "@/assets/nino.png";
import { CHECKOUT, checkoutHref, NAV_LINKS } from "@/lib/kit-content";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-4 text-center sm:px-6 lg:grid-cols-[auto_1fr] lg:text-left">
        <Reveal>
          <img
            src={nino}
            alt="Nino, o Coelho Detetive"
            loading="lazy"
            width={1024}
            height={1024}
            className="mx-auto w-40 animate-float-slow sm:w-56"
          />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-4xl font-bold text-balance sm:text-5xl lg:text-6xl">
            Pronto para começar?
          </h2>
          <p className="mt-6 text-lg opacity-90 sm:text-xl">
            100 missões esperando pelo próximo explorador.
          </p>

          <div className="mt-8">
            <Button asChild variant="adventure" size="xl" className="w-full rounded-full sm:w-auto">
              <a href={checkoutHref(CHECKOUT.kitCompleto)}>QUERO COMEÇAR AGORA</a>
            </Button>
          </div>
          <p className="mt-6 text-sm font-medium opacity-80 uppercase tracking-widest">
            R$ 24,90 • ACESSO IMEDIATO
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-background py-20 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold text-primary">Kit Exploradores da Leitura</p>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
            Material digital educativo premium para apoio à alfabetização.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h3 className="font-display text-sm font-bold tracking-widest text-foreground uppercase">Navegue</h3>
          <ul className="mt-6 space-y-4 text-base text-muted-foreground">
            <li><a href="#topo" className="hover:text-primary transition-colors">Início</a></li>
            <li><a href="#galeria" className="hover:text-primary transition-colors">Por dentro</a></li>
            <li><a href="#feedbacks" className="hover:text-primary transition-colors">Feedbacks</a></li>
            <li><a href="#oferta" className="hover:text-primary transition-colors">Planos</a></li>
          </ul>
        </nav>

        <nav aria-label="Links legais">
          <h3 className="font-display text-sm font-bold tracking-widest text-foreground uppercase">Legal</h3>
          <ul className="mt-6 space-y-4 text-base text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-4 text-center sm:px-6">
        <p className="text-xs text-muted-foreground opacity-60">
          © {new Date().getFullYear()} Kit Exploradores da Leitura. Design Premium.
        </p>
      </div>
    </footer>
  );
}
