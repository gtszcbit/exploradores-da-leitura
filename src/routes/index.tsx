import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { TrustBar, PainDesire, ProductIntro } from "@/components/landing/Story";
import { WhatYouGet } from "@/components/landing/WhatYouGet";
import { Gallery } from "@/components/landing/Gallery";
import { HowItWorks, ForWho, Achievement } from "@/components/landing/Journey";
import { Offer } from "@/components/landing/Offer";
import { Testimonials, Guarantee } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { FinalCta, Footer } from "@/components/landing/Closing";
import { FAQS } from "@/lib/kit-content";

const title = "Kit Exploradores da Leitura | 100 Missões de Alfabetização";
const description =
  "Kit educativo com 100 missões de alfabetização para crianças de 4 a 6 anos. Atividades lúdicas para explorar sons, letras, sílabas, palavras e frases.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Kit Exploradores da Leitura — 100 Missões de Alfabetização",
          description,
          brand: { "@type": "Brand", name: "Kit Exploradores da Leitura" },
          offers: {
            "@type": "Offer",
            price: "24.90",
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
          },
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header removed as requested */}
      <main>
        <Hero />
        <TrustBar />
        
        <WhatYouGet />
        
        <Gallery />
        
        <ForWho />
        <Achievement />
        <Offer />
        <Guarantee />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
