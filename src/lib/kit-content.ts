/**
 * Conteúdo e configuração do Kit Exploradores da Leitura.
 *
 * ==========================================================
 * CONFIGURAÇÃO DOS CHECKOUTS — cole aqui os links reais
 * ==========================================================
 * Enquanto estiverem vazios, os botões não saem da página.
 */
export const CHECKOUT_10_00 = "https://pay.cakto.com.br/3fdj6gx_1051461";
export const CHECKOUT_14_90 = "https://pay.cakto.com.br/yqa82rh_1050045";
export const CHECKOUT_27_90 = "https://pay.cakto.com.br/itxbwm9_1051437";

export const CHECKOUT = {
  acessoInicial: CHECKOUT_10_00,
  kitCompleto: CHECKOUT_27_90,
  upsell: CHECKOUT_14_90,
} as const;

export const checkoutHref = (url: string) => (url.length > 0 ? url : "#oferta");

/** Envia o usuário ao checkout (ou mantém na oferta se o link ainda não foi configurado). */
export const goToCheckout = (url: string) => {
  if (url.length > 0) {
    window.location.href = url;
    return;
  }
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
};

/** Rastreamento simples: usa dataLayer/gtag se existirem, sem adicionar serviços novos. */
export const trackEvent = (event: string, params: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  };
  w.dataLayer?.push({ event, ...params });
  w.gtag?.("event", event, params);
};

export const TESTIMONIALS = [
  {
    name: "Juliana M.",
    role: "Mãe da Alice, 5 anos",
    text: "A Alice pede para fazer as missões todo dia. Em poucas semanas ela já estava juntando as sílabas sozinha.",
    stars: 5,
  },
  {
    name: "Patrícia S.",
    role: "Professora de Educação Infantil",
    text: "Material muito bem organizado. Uso as missões dos primeiros mundos na sala e as crianças adoram o Nino.",
    stars: 5,
  },
  {
    name: "Rodrigo A.",
    role: "Pai do Théo, 4 anos",
    text: "Imprimi em casa e virou nossa atividade da noite. Trocamos o tablet por letras e risadas.",
    stars: 5,
  },
  {
    name: "Camila F.",
    role: "Mãe do Bento, 6 anos",
    text: "O certificado de Superleitor foi a melhor parte: ele guardou como se fosse um troféu.",
    stars: 5,
  },
  {
    name: "Aline R.",
    role: "Mãe da Manu, 5 anos",
    text: "Vale muito o preço. São atividades de verdade, não umas folhinhas soltas.",
    stars: 5,
  },
  {
    name: "Marcos T.",
    role: "Pai da Lívia, 6 anos",
    text: "A leitura de frases era o maior desafio dela. Os mundos finais ajudaram demais.",
    stars: 5,
  },
] as const;


export const NAV_LINKS = [
  { label: "O Kit", href: "#o-kit" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "O que vem", href: "#missoes" },
  { label: "Dúvidas", href: "#faq" },
];

export const WORLDS = [
  {
    n: "01",
    emoji: "🌳",
    name: "Floresta dos Sons",
    skill: "Consciência fonológica",
    missions: "Missões 01–20",
    tone: "primary",
  },
  {
    n: "02",
    emoji: "🪨",
    name: "Caverna dos Fonemas",
    skill: "Consciência fonêmica",
    missions: "Missões 21–40",
    tone: "sky",
  },
  {
    n: "03",
    emoji: "🏙️",
    name: "Cidade das Letras",
    skill: "Letra + Som",
    missions: "Missões 41–60",
    tone: "tangerine",
  },
  {
    n: "04",
    emoji: "🏞️",
    name: "Vale das Sílabas",
    skill: "Sílabas e decodificação",
    missions: "Missões 61–75",
    tone: "primary",
  },
  {
    n: "05",
    emoji: "🏘️",
    name: "Vila das Palavras",
    skill: "Leitura de palavras",
    missions: "Missões 76–85",
    tone: "sky",
  },
  {
    n: "06",
    emoji: "🏰",
    name: "Reino das Histórias",
    skill: "Frases e compreensão",
    missions: "Missões 86–95",
    tone: "tangerine",
  },
  {
    n: "07",
    emoji: "🏆",
    name: "Torre dos Campeões",
    skill: "Missões finais",
    missions: "Missões 96–100",
    tone: "accent",
  },
] as const;

export const MISSIONS = [
  { n: "01", emoji: "🎵", title: "Caça às Rimas", desc: "Encontrar palavras que terminam com o mesmo som." },
  { n: "02", emoji: "👏", title: "Bate-Palmas das Sílabas", desc: "Bater palmas para descobrir quantas sílabas cada palavra tem." },
  { n: "03", emoji: "🔎", title: "Caçador do Som Inicial", desc: "Identificar o primeiro som das palavras." },
  { n: "04", emoji: "🔤", title: "Caça à Letra", desc: "Localizar letras específicas no meio de muitas outras." },
  { n: "05", emoji: "🧩", title: "Palavra Embaralhada", desc: "Organizar as letras até formar a palavra certa." },
  { n: "06", emoji: "⭐", title: "Superleitor de Palavras", desc: "Ler palavras completas com autonomia." },
  { n: "07", emoji: "🧱", title: "Monte a Frase", desc: "Juntar palavras para construir frases com sentido." },
  { n: "08", emoji: "📖", title: "Mini-História", desc: "Ler uma pequena história e compreender o que aconteceu." },
  { n: "09", emoji: "🏆", title: "O Grande Desafio do Leitor", desc: "A missão final que fecha a jornada das 100 missões." },
] as const;

export const FAQS = [
  {
    q: "O material é físico ou digital?",
    a: "É um material 100% digital em PDF. Você recebe o acesso imediatamente após a confirmação da compra e pode baixar no celular, computador ou tablet.",
  },
  {
    q: "Para qual idade o kit é indicado?",
    a: "O Kit Exploradores da Leitura foi desenvolvido especialmente para crianças de 4 a 6 anos, em fase de pré-alfabetização e alfabetização inicial.",
  },
  {
    q: "Como funciona a metodologia das 100 missões?",
    a: "As atividades seguem uma sequência progressiva em 7 mundos, ensinando a criança desde os sons das palavras até a leitura de frases e pequenas histórias.",
  },
  {
    q: "Preciso imprimir todas as páginas?",
    a: "Não. Você pode imprimir apenas as atividades que desejar e reutilizar o arquivo sempre que precisar.",
  },
  {
    q: "O kit serve para pais e professores?",
    a: "Sim. O material foi criado para ser usado tanto em casa pelos pais quanto por professores e profissionais de reforço escolar.",
  },
  {
    q: "O material possui atividades lúdicas?",
    a: "Sim. O kit inclui jogos, rimas, sílabas, desafios, caça-palavras, leitura guiada e diversas atividades educativas que tornam o aprendizado mais divertido.",
  },
  {
    q: "Como vou receber o acesso ao material?",
    a: "Após a compra, você recebe um link para acessar e baixar o PDF imediatamente, sem esperar entrega.",
  },
  {
    q: "Por quanto tempo terei acesso?",
    a: "O acesso é vitalício. Você poderá baixar o material sempre que quiser.",
  },
  {
    q: "Posso imprimir quantas vezes quiser?",
    a: "Sim. O arquivo é seu e pode ser impresso quantas vezes forem necessárias para uso pessoal ou em sala de aula.",
  },
  {
    q: "Existe garantia?",
    a: "Sim. A compra possui garantia de 7 dias. Se o material não atender às suas expectativas, você pode solicitar o reembolso dentro desse período.",
  },
] as const;
