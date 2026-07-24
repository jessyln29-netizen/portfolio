import envia from "../assets/envia.webp";
import orizon from "../assets/orizon.webp";
import coinrun from "../assets/coinrun.webp";
import ozDevices from "../assets/oz-devices.webp";
import ozCanvas from "../assets/oz-canvas.webp";
import ozSteps from "../assets/oz-steps.webp";
import ozPricing from "../assets/oz-pricing.webp";
import ozBrand from "../assets/oz-brand.webp";

export type ProjectBlock =
  | { label: string; paragraphs: string[] }
  | { label: string; items: string[] };

/** Seção rica de estudo de caso (usada pelo Orizon). */
export type CaseSection = {
  kicker?: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  caption?: string;
  layout?: "text" | "imageRight" | "imageLeft" | "imageFull";
};

export type Project = {
  id: string;
  name: string;
  tag: string;
  cover: string;
  coverAlt: string;
  kicker: string;
  cardDesc: string;
  summary: string;
  meta: { label: string; value: string }[];
  // caso rico (Orizon)
  heroImage?: string;
  heroImageAlt?: string;
  sections?: CaseSection[];
  designSystem?: boolean;
  // caso simples (Envia+, Coin Run)
  screenCaption?: string;
  blocks?: ProjectBlock[];
};

export const projects: Project[] = [
  {
    id: "orizon",
    name: "Orizon Mudanças",
    tag: "UI/UX · Produto",
    cover: orizon,
    coverAlt:
      "Landing da Orizon Mudanças: cada mudança é um novo começo, com grade de fotos de casas e CTAs",
    kicker: "Produto digital · SaaS · 2026",
    cardDesc:
      "SaaS de planejamento de mudanças — do canvas de carga ao pagamento, com design system próprio.",
    summary:
      "Um SaaS que transforma contratar mudança — algo caro, opaco e estressante — num fluxo visual: monte a carga arrastando móveis num canvas, veja o volume em tempo real e receba cotações comparáveis de transportadoras.",
    meta: [
      { label: "Meu papel", value: "Product Design end-to-end (UX/UI + Design System)" },
      { label: "Tipo", value: "Web app · SaaS B2C" },
      { label: "Stack", value: "Next.js · Tailwind · shadcn/ui · Prisma · Stripe" },
      { label: "Ano", value: "2026" },
    ],
    heroImage: ozDevices,
    heroImageAlt: "Orizon Mudanças em laptop, tablet e celular — landing e dashboard",
    designSystem: true,
    sections: [
      {
        kicker: "Introdução",
        title: "Do caos ao fluxo",
        paragraphs: [
          "Contratar uma mudança é caro, opaco e estressante: você não sabe qual caminhão precisa, quanto vai custar, nem em quem confiar. O Orizon Mudanças nasceu pra virar esse jogo.",
          "A ideia é transformar esse caos num fluxo visual e previsível — a pessoa monta a própria mudança arrastando móveis de um catálogo para um caminhão virtual, vê o espaço ocupado na hora e recebe cotações comparáveis de transportadoras avaliadas. Do inventário ao pagamento, num só lugar.",
        ],
      },
      {
        kicker: "O coração do produto",
        title: "Um canvas que qualquer pessoa entende",
        image: ozCanvas,
        imageAlt: "Canvas interativo do Orizon com catálogo de itens e ocupação do caminhão",
        caption: "Canvas interativo — arrasta, solta e vê o volume ocupado em tempo real",
        layout: "imageRight",
        paragraphs: [
          "O catálogo tem 40+ itens com dimensões reais. Ao arrastar um item pro canvas, o volume é recalculado na hora e o app avisa quando a carga ultrapassa a capacidade do caminhão escolhido.",
          "Foi a decisão de produto mais importante: em vez de um formulário chato, a pessoa quase brinca de montar a mudança — e sai com uma estimativa confiável antes de falar com qualquer transportadora.",
        ],
      },
      {
        kicker: "Fluxo completo",
        title: "Do inventário à entrega",
        image: ozSteps,
        imageAlt: "Seção passo a passo do Orizon: montar inventário, escolher caminhão, receber cotações, confirmar",
        caption: "Quatro passos, zero surpresa no dia da mudança",
        layout: "imageLeft",
        paragraphs: [
          "Quatro passos claros: montar o inventário no canvas, escolher o tamanho do caminhão, receber cotações automáticas com data, seguro e preço, e confirmar a melhor oferta.",
          "Cada etapa foi desenhada pra reduzir incerteza — o usuário sempre sabe onde está e o que falta pra fechar.",
        ],
      },
      {
        kicker: "Modelo de negócio",
        title: "Grátis, Trial e PRO",
        image: ozPricing,
        imageAlt: "Página de preços do Orizon com planos Grátis e PRO",
        caption: "Paywall que empurra valor sem irritar",
        layout: "imageRight",
        paragraphs: [
          "O plano Grátis deixa explorar (1 mudança, até 15 itens, 3 cotações). O PRO — R$ 29,90/mês — libera mudanças e itens ilimitados, filtros avançados e comparação lado a lado.",
          "Todo novo usuário começa num Trial de 14 dias com acesso PRO. O upgrade acontece via Stripe, e desenhei os paywalls (bloqueio de plano, banner de trial e card de upgrade) pra comunicar o limite dentro do fluxo, sem transformar cada clique numa parede de pagamento.",
        ],
      },
      {
        kicker: "Desafios",
        title: "O que foi difícil (e valeu a pena)",
        bullets: [
          "Traduzir volume 3D (m³) numa interface 2D que qualquer pessoa entende — sem pedir que ninguém pense em matemática.",
          "Comunicar limites de plano (Grátis vs PRO) dentro do fluxo, sem transformar cada ação numa parede de pagamento.",
          "Comparar cotações de forma justa: mesma estrutura de data, seguro e preço, lado a lado.",
          "Manter consistência absoluta entre landing, dashboard e checkout — resolvido com um Design System de tokens, fonte única de verdade.",
        ],
      },
      {
        kicker: "Sistema visual",
        title: "Uma marca, um verde",
        image: ozBrand,
        imageAlt: "Identidade do Orizon: logo, preços e cards sobre fundo verde e preto",
        caption: "Verde só onde há ação ou sucesso — pra nunca perder força",
        layout: "imageFull",
        paragraphs: [
          "Verde vibrante como único acento sobre preto e neutros: energia de logística com a seriedade de uma fintech. Poppins do display ao corpo. A regra de ouro do sistema é simples — verde aparece só onde há ação ou sucesso.",
          "Abaixo, o design system que sustenta tudo isso — recriado aqui em código, a partir da mesma fonte de tokens que roda no produto.",
        ],
      },
    ],
  },
  {
    id: "envia",
    name: "Envia+",
    tag: "UI/UX Design",
    cover: envia,
    coverAlt:
      "Home do site Envia+: envie dinheiro para o Brasil com segurança, rapidez e zero burocracia",
    kicker: "Site institucional · Money Transfer",
    cardDesc:
      "Envie dinheiro para o Brasil sem burocracia — do briefing de negócio à interface, pensado pra quem não tem SSN.",
    summary:
      "A maioria dos apps de remessa é feita pra quem tem SSN e crédito nos EUA. A Envia+ nasceu pro brasileiro que não tem — e o site precisava dizer isso antes de qualquer outra coisa.",
    meta: [
      {
        label: "Meu papel",
        value:
          "Briefing de produto, arquitetura de informação, UX Writing e interface (Figma)",
      },
      {
        label: "Empresa",
        value: "Envia+, a marca de remessa internacional do grupo EzPag",
      },
      {
        label: "Referências visuais",
        value: "Nubank, Wise, Inter e Nomad — adaptadas pra um público próprio",
      },
    ],
    screenCaption: "Home — hero + simulador de conversão",
    blocks: [
      {
        label: "Problema",
        paragraphs: [
          "Quem envia dinheiro dos EUA pro Brasil como brasileiro imigrante — muitas vezes trabalhando informalmente em construção, limpeza, delivery ou hospitalidade — esbarra num requisito que a maior parte dos apps de remessa trata como padrão: SSN e histórico de crédito americano. Serviços como Wise e Nomad são ótimos, mas não foram desenhados pensando nesse público específico.",
        ],
      },
      {
        label: "Meu papel",
        paragraphs: [
          "Entrei antes do Figma. Conduzi um briefing estruturado com o negócio — nome, propósito, missão, valores, público-alvo, aspirações, tom de voz — pra só depois definir a arquitetura de informação do site e escrever a copy seção a seção. A interface veio por último, como consequência de tudo isso.",
        ],
      },
      {
        label: "Processo",
        items: [
          "No briefing, identifiquei que a barreira real não era preço nem velocidade — era a exigência de documentação que grande parte do público não tem. Isso virou a decisão central do produto.",
          "Transformei essa decisão em seção própria da home (“Feita pra você”), com “aceita passaporte ou ID” dito de forma explícita — não escondido em letra miúda de termos de uso.",
          "Estruturei o storytelling da página inteira antes de desenhar: Hero → Como Funciona → Por que confiar → Depoimentos → Feita pra você → App → Fale com a gente — cada seção com hat, título, descrição e CTA já definidos em texto.",
          "Levei Nubank, Wise, Inter e Nomad como referência de fintech moderna, mas construí uma identidade própria pra não parecer clone de nenhuma delas.",
          "Coloquei o simulador de conversão USD → BRL logo no início da jornada, antes de qualquer formulário — a pessoa entende o valor antes de precisar confiar dados.",
        ],
      },
      {
        label: "Resultado",
        paragraphs: [
          "Um site que não é uma tradução de fintech americana pro português — é construído em cima da dor real de quem vai usar. A decisão de produto (aceitar passaporte/ID) virou também a decisão de copy e de interface, do briefing ao pixel.",
        ],
      },
    ],
  },
  {
    id: "coinrun",
    name: "Coin Run",
    tag: "UI/UX Design",
    cover: coinrun,
    coverAlt: "Tela de onboarding do app Coin Run: comece sua jornada de corrida",
    kicker: "App mobile · Protótipo MVP — 12 telas",
    cardDesc:
      "App de corrida gamificado — onboarding que transforma meta em jornada, do primeiro passo à recompensa.",
    summary:
      "App de corrida gamificado — 12 telas de MVP, do onboarding à recompensa.",
    meta: [
      { label: "Papel", value: "Product Design end-to-end" },
      { label: "Formato", value: "Protótipo mobile · PT-BR" },
      { label: "Escopo", value: "MVP — 12 telas" },
    ],
    screenCaption: "Onboarding — comece sua jornada",
    blocks: [
      {
        label: "O projeto",
        paragraphs: [
          "Protótipo de MVP para um app que transforma corrida em jogo: o usuário define metas, corre e acumula recompensas. O onboarding abre com fotografia em contexto urbano e uma promessa direta — “comece sua jornada de corrida” — pra converter intenção em primeiro passo.",
        ],
      },
      {
        label: "Decisões de design",
        items: [
          "Tom escuro com acentos vibrantes pra leitura em movimento e ao ar livre.",
          "Fluxo de 12 telas enxuto: onboarding, meta, corrida ativa e recompensa — nada que atrase o primeiro treino.",
          "CTA “Começar” sempre visível: a ação principal nunca sai do alcance do polegar.",
        ],
      },
    ],
  },
];

export const getProject = (id?: string) =>
  projects.find((p) => p.id === id);
