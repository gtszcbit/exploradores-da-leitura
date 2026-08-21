import { Reveal } from "./Reveal";
import { Zap, Lock, ShieldCheck, Printer } from "lucide-react";

const trust = [
  { icon: Zap, label: "ACESSO IMEDIATO" },
  { icon: Lock, label: "COMPRA SEGURA" },
  { icon: ShieldCheck, label: "7 DIAS DE GARANTIA" },
  { icon: Printer, label: "PDF PARA IMPRIMIR" },
];

export function TrustBar() {
  return (
    <section className="bg-white py-12 border-b border-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {trust.map((t) => (
            <div key={t.label} className="flex items-center gap-3">
              <t.icon className="size-4 text-[#94A3B8]" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#94A3B8] uppercase">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
