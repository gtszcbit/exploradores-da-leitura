import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import nino from "@/assets/nino.png";
import { CHECKOUT, checkoutHref } from "@/lib/kit-content";
import { ShieldCheck, Lock } from "lucide-react";

export function FinalCta() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[40px] bg-[#122E54] px-8 py-16 text-center text-white sm:px-16 sm:py-24">
          <Reveal>
            <img
              src={nino}
              alt="Nino"
              loading="lazy"
              width={200}
              height={200}
              className="mx-auto w-32 animate-float-slow sm:w-40"
            />
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Pronto para a aventura?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-300 sm:text-xl">
              A alfabetização do seu pequeno explorador começa aqui.
            </p>

            <div className="mt-12 flex flex-col items-center gap-6">
              <Button asChild variant="hero" size="xl" className="w-full px-16 sm:w-auto">
                <a href={checkoutHref(CHECKOUT.kitCompleto)}>QUERO O KIT COMPLETO AGORA</a>
              </Button>
              <div className="flex flex-wrap items-center justify-center gap-8 text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-3" />
                  Garantia de 7 Dias
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="size-3" />
                  Compra 100% Segura
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="text-center lg:text-left">
            <h3 className="font-display text-xl font-bold text-[#122E54]">
              Exploradores da Leitura
            </h3>
            <p className="mt-2 text-sm text-[#64748B]">
              Transformando a alfabetização em uma jornada inesquecível.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-xs font-bold tracking-widest text-[#94A3B8] uppercase">
            <a href="#" className="hover:text-[#122E54] transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-[#122E54] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#122E54] transition-colors">Contato</a>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-10 text-center">
          <p className="text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase">
            © {new Date().getFullYear()} Kit Exploradores da Leitura. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
