import envia from "../assets/envia.webp";
import orizon from "../assets/orizon.webp";
import coinrun from "../assets/coinrun.webp";

export type ProjectBlock =
  | { label: string; paragraphs: string[] }
  | { label: string; items: string[] };

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
  screenCaption: string;
  blocks: ProjectBlock[];
};

export const projects: Project[] = [
  {
    id: "orizon",
    name: "Orizon Mudanças",
    tag: "UI/UX Design",
    cover: orizon,
    coverAlt:
      "Landing da Orizon Mudanças: cada mudança é um novo começo, com grade de fotos de casas e CTAs",
    kicker: "Landing page · Mudanças residenciais",
    cardDesc:
      "Landing de conversão: proposta de valor emocional, prova social e assinatura com teste grátis.",
    summary:
      "“Cada mudança é um novo começo.” — uma landing que transforma um serviço estressante em promessa de recomeço.",
    meta: [
      { label: "Papel", value: "Design de interface & UX Writing" },
      { label: "Formato", value: "Landing page de conversão" },
      { label: "Ferramentas", value: "Figma" },
    ],
    screenCaption: "Hero — proposta de valor + prova visual",
    blocks: [
      {
        label: "O projeto",
        paragraphs: [
          "Landing page para plataforma de mudanças residenciais. A headline aposta na carga emocional da mudança (“cada mudança é um novo começo”) e o corpo da página responde às ansiedades práticas: móveis intactos, cotações transparentes, acompanhamento em tempo real e suporte humano em português.",
        ],
      },
      {
        label: "Decisões de design",
        items: [
          "Grade de fotos reais de casas e interiores como prova visual — mudança é sobre o lugar aonde se chega, não sobre caminhões.",
          "Checklist de benefícios com verificação verde, reduzindo a incerteza antes do CTA.",
          "Dupla CTA: “Assine agora” (compromisso) e “Testar grátis por 14 dias” (baixa fricção), com nota “sem cartão de crédito” pra remover a última objeção.",
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
