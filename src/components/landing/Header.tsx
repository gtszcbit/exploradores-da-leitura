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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#topo" className="flex items-center gap-2">
          <Rabbit className="size-6 text-primary" aria-hidden />
          <span className="font-display text-lg font-bold text-primary">
            Exploradores da Leitura
          </span>
        </a>

        <div className="flex items-center gap-4">
          <Button asChild variant="hero" size="sm" className="px-6">
            <a href="#oferta">Comprar Agora</a>
          </Button>
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
