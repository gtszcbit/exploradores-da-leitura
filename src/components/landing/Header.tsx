import { useEffect, useState } from "react";
import { Menu, X, Rabbit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/kit-content";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent bg-background/85 backdrop-blur transition-shadow",
        scrolled && "border-border shadow-soft",
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:gap-8">
        <a href="#topo" className="flex min-w-0 items-center gap-3">
          <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
            <Rabbit className="size-6" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base leading-tight font-semibold text-primary sm:text-lg">
              Kit Exploradores da Leitura
            </span>
            <span className="block truncate text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
              100 Missões de Alfabetização
            </span>
          </span>
        </a>

        <nav className="hidden justify-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <a href="#oferta">QUERO O KIT</a>
          </Button>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-2xl border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-card px-4 pb-5 lg:hidden">
          <nav className="flex flex-col py-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 font-display text-base font-medium text-foreground hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <Button asChild variant="hero" className="w-full">
            <a href="#oferta" onClick={() => setOpen(false)}>
              QUERO O KIT
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
