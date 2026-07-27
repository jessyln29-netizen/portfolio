import envia from "../assets/envia.webp";
import orizon from "../assets/orizon.webp";
import ozDevices from "../assets/oz-devices.webp";
import ozSteps from "../assets/oz-steps.webp";
import ozPricing from "../assets/oz-pricing.webp";
import ozBrand from "../assets/oz-brand.webp";
import ozFlow1 from "../assets/oz-flow1.webp";
import ozFlow2 from "../assets/oz-flow2.webp";
import ozFlow3 from "../assets/oz-flow3.webp";
import ozFlow4 from "../assets/oz-flow4.webp";
import ozFlow5 from "../assets/oz-flow5.webp";
import ozFlow6 from "../assets/oz-flow6.webp";
import ozFlow7 from "../assets/oz-flow7.webp";
import ozFlow8 from "../assets/oz-flow8.webp";
import roHero from "../assets/ro-hero.webp";
import roCenario from "../assets/ro-cenario.webp";
import roDesafios from "../assets/ro-desafios.webp";
import roCiclo from "../assets/ro-ciclo.webp";
import roSlide1 from "../assets/ro-slide1.webp";
import roSlide2 from "../assets/ro-slide2.webp";
import roSlide3 from "../assets/ro-slide3.webp";
import roSlide4 from "../assets/ro-slide4.webp";
import roSlide5 from "../assets/ro-slide5.webp";
import roSlide6 from "../assets/ro-slide6.webp";

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
  gallery?: { id: number; title: string; description: string; imageSrc: string }[];
  galleryTitle?: string;
  galleryVariant?: "landscape" | "poster";
  designSystem?: "orizon" | "raceon";
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
      "SaaS de planejamento de mudanças, do canvas de carga ao pagamento, com design system próprio.",
    summary:
      "Um SaaS que transforma contratar mudança, algo caro, opaco e estressante, num fluxo visual: monte a carga arrastando móveis num canvas, veja o volume em tempo real e receba cotações comparáveis de transportadoras.",
    meta: [
      { label: "Meu papel", value: "Product Design end-to-end (UX/UI + Design System)" },
      { label: "Tipo", value: "Web app · SaaS B2C" },
      { label: "Stack", value: "Next.js · Tailwind · shadcn/ui · Prisma · Stripe" },
      { label: "Ano", value: "2026" },
    ],
    heroImage: ozDevices,
    heroImageAlt: "Orizon Mudanças em laptop, tablet e celular, landing e dashboard",
    designSystem: "orizon",
    galleryTitle: "O fluxo, tela a tela",
    gallery: [
      { id: 1, title: "Nova mudança", description: "Origem, destino e tamanho da casa em segundos", imageSrc: ozFlow1 },
      { id: 2, title: "Escolha o caminhão", description: "4 tamanhos + catálogo de itens por cômodo", imageSrc: ozFlow2 },
      { id: 3, title: "Capacidade em tempo real", description: "Alerta quando a carga passa do limite do veículo", imageSrc: ozFlow3 },
      { id: 4, title: "Resumo da carga", description: "Volume, peso e estimativa conforme você monta", imageSrc: ozFlow4 },
      { id: 5, title: "Cotações lado a lado", description: "Compare preço, nota, seguro e data por transportadora", imageSrc: ozFlow5 },
      { id: 6, title: "Resumo e pagamento", description: "Checkout com Cartão, Pix ou Boleto", imageSrc: ozFlow6 },
      { id: 7, title: "Do começo ao fim", description: "Landing: os 4 passos da mudança sem estresse", imageSrc: ozFlow7 },
      { id: 8, title: "Um novo começo", description: "Landing: prova visual e confiança pra quem vai mudar", imageSrc: ozFlow8 },
    ],
    sections: [
      {
        kicker: "Introdução",
        title: "Do caos ao fluxo",
        paragraphs: [
          "Contratar uma mudança é caro, opaco e estressante: você não sabe qual caminhão precisa, quanto vai custar, nem em quem confiar. O Orizon Mudanças nasceu pra virar esse jogo.",
          "A ideia é transformar esse caos num fluxo visual e previsível, a pessoa monta a própria mudança arrastando móveis de um catálogo para um caminhão virtual, vê o espaço ocupado na hora e recebe cotações comparáveis de transportadoras avaliadas. Do inventário ao pagamento, num só lugar.",
        ],
      },
      {
        kicker: "O coração do produto",
        title: "Um canvas que qualquer pessoa entende",
        image: ozFlow2,
        imageAlt: "Editor de mudança do Orizon: seleção de caminhão e catálogo de itens por cômodo",
        caption: "O canvas de verdade, escolha o caminhão e arraste itens do catálogo, com o volume ocupado em tempo real",
        layout: "imageFull",
        paragraphs: [
          "O catálogo tem 40+ itens com dimensões reais. Ao arrastar um item pro canvas, o volume é recalculado na hora e o app avisa quando a carga ultrapassa a capacidade do caminhão escolhido.",
          "Foi a decisão de produto mais importante: em vez de um formulário chato, a pessoa quase brinca de montar a mudança, e sai com uma estimativa confiável antes de falar com qualquer transportadora.",
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
          "Cada etapa foi desenhada pra reduzir incerteza, o usuário sempre sabe onde está e o que falta pra fechar.",
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
          "O plano Grátis deixa explorar (1 mudança, até 15 itens, 3 cotações). O PRO, R$ 29,90/mês, libera mudanças e itens ilimitados, filtros avançados e comparação lado a lado.",
          "Todo novo usuário começa num Trial de 14 dias com acesso PRO. O upgrade acontece via Stripe, e desenhei os paywalls (bloqueio de plano, banner de trial e card de upgrade) pra comunicar o limite dentro do fluxo, sem transformar cada clique numa parede de pagamento.",
        ],
      },
      {
        kicker: "Desafios",
        title: "O que foi difícil (e valeu a pena)",
        bullets: [
          "Traduzir volume 3D (m³) numa interface 2D que qualquer pessoa entende, sem pedir que ninguém pense em matemática.",
          "Comunicar limites de plano (Grátis vs PRO) dentro do fluxo, sem transformar cada ação numa parede de pagamento.",
          "Comparar cotações de forma justa: mesma estrutura de data, seguro e preço, lado a lado.",
          "Manter consistência absoluta entre landing, dashboard e checkout, resolvido com um Design System de tokens, fonte única de verdade.",
        ],
      },
      {
        kicker: "Sistema visual",
        title: "Uma marca, um verde",
        image: ozBrand,
        imageAlt: "Identidade do Orizon: logo, preços e cards sobre fundo verde e preto",
        caption: "Verde só onde há ação ou sucesso, pra nunca perder força",
        layout: "imageFull",
        paragraphs: [
          "Verde vibrante como único acento sobre preto e neutros: energia de logística com a seriedade de uma fintech. Poppins do display ao corpo. A regra de ouro do sistema é simples, verde aparece só onde há ação ou sucesso.",
          "Abaixo, o design system que sustenta tudo isso, recriado aqui em código, a partir da mesma fonte de tokens que roda no produto.",
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
      "Envie dinheiro para o Brasil sem burocracia, do briefing de negócio à interface, pensado pra quem não tem SSN.",
    summary:
      "A maioria dos apps de remessa é feita pra quem tem SSN e crédito nos EUA. A Envia+ nasceu pro brasileiro que não tem, e o site precisava dizer isso antes de qualquer outra coisa.",
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
        value: "Nubank, Wise, Inter e Nomad, adaptadas pra um público próprio",
      },
    ],
    screenCaption: "Home, hero + simulador de conversão",
    blocks: [
      {
        label: "Problema",
        paragraphs: [
          "Quem envia dinheiro dos EUA pro Brasil como brasileiro imigrante, muitas vezes trabalhando informalmente em construção, limpeza, delivery ou hospitalidade, esbarra num requisito que a maior parte dos apps de remessa trata como padrão: SSN e histórico de crédito americano. Serviços como Wise e Nomad são ótimos, mas não foram desenhados pensando nesse público específico.",
        ],
      },
      {
        label: "Meu papel",
        paragraphs: [
          "Entrei antes do Figma. Conduzi um briefing estruturado com o negócio, nome, propósito, missão, valores, público-alvo, aspirações, tom de voz, pra só depois definir a arquitetura de informação do site e escrever a copy seção a seção. A interface veio por último, como consequência de tudo isso.",
        ],
      },
      {
        label: "Processo",
        items: [
          "No briefing, identifiquei que a barreira real não era preço nem velocidade, era a exigência de documentação que grande parte do público não tem. Isso virou a decisão central do produto.",
          "Transformei essa decisão em seção própria da home (“Feita pra você”), com “aceita passaporte ou ID” dito de forma explícita, não escondido em letra miúda de termos de uso.",
          "Estruturei o storytelling da página inteira antes de desenhar: Hero → Como Funciona → Por que confiar → Depoimentos → Feita pra você → App → Fale com a gente, cada seção com hat, título, descrição e CTA já definidos em texto.",
          "Levei Nubank, Wise, Inter e Nomad como referência de fintech moderna, mas construí uma identidade própria pra não parecer clone de nenhuma delas.",
          "Coloquei o simulador de conversão USD → BRL logo no início da jornada, antes de qualquer formulário, a pessoa entende o valor antes de precisar confiar dados.",
        ],
      },
      {
        label: "Resultado",
        paragraphs: [
          "Um site que não é uma tradução de fintech americana pro português, é construído em cima da dor real de quem vai usar. A decisão de produto (aceitar passaporte/ID) virou também a decisão de copy e de interface, do briefing ao pixel.",
        ],
      },
    ],
  },
  {
    id: "raceon",
    name: "Race On",
    tag: "UI/UX · Produto",
    cover: roHero,
    coverAlt: "Landing e app do Race On: corra, explore, conquiste",
    kicker: "App mobile · Produto gamificado · 2026",
    cardDesc:
      "App que transforma corrida em jornada gamificada, geolocalização, moedas, missões e recompensas.",
    summary:
      "Um app que transforma caminhadas e corridas em jogo: geolocalização e gamificação viram moedas, missões, níveis e recompensas de verdade. A cidade é a sua arena.",
    meta: [
      { label: "Meu papel", value: "Product Design end-to-end (UX/UI + Design System)" },
      { label: "Tipo", value: "App mobile · fitness + gamificação" },
      { label: "Idioma", value: "PT-BR (multilíngue no roadmap)" },
      { label: "Estágio", value: "MVP · piloto em Brickell & Downtown Miami" },
    ],
    heroImage: roHero,
    heroImageAlt: "Race On em laptop e celular, landing e app",
    designSystem: "raceon",
    galleryTitle: "O app, tela a tela",
    galleryVariant: "poster",
    gallery: [
      { id: 1, title: "O movimento virou jogo", description: "Onboarding, comece sua jornada", imageSrc: roSlide1 },
      { id: 2, title: "Uma missão para cada dia", description: "Home, meta, progresso e ação", imageSrc: roSlide2 },
      { id: 3, title: "Escolha o seu caminho", description: "Mapa e preparação da atividade", imageSrc: roSlide3 },
      { id: 4, title: "Missões que geram recompensas", description: "Missões e loja de raridades", imageSrc: roSlide4 },
      { id: 5, title: "Agora é só correr", description: "Atividade em tempo real", imageSrc: roSlide5 },
      { id: 6, title: "Cada passo conta uma história", description: "Perfil, conquistas e histórico", imageSrc: roSlide6 },
    ],
    sections: [
      {
        kicker: "Introdução",
        title: "Corra. Explore. Conquiste.",
        paragraphs: [
          "O Race On nasceu com o propósito de transformar caminhadas e corridas em experiências mais envolventes, recompensadoras e divertidas. Por meio da geolocalização e da gamificação, o aplicativo incentiva as pessoas a explorarem a cidade, coletarem moedas, concluírem missões, evoluírem de nível e desbloquearem benefícios.",
        ],
      },
      {
        kicker: "Cenário",
        title: "Métrica não engaja. Jornada, sim.",
        image: roCenario,
        imageAlt: "Telas do Race On: home com meta de passos, missões, mapa e loja",
        caption: "Do passo à meta, cada tela reforça o próximo movimento",
        layout: "imageRight",
        paragraphs: [
          "Muitas pessoas desejam criar uma rotina de exercícios, mas encontram dificuldades para manter a motivação e a constância. Os aplicativos tradicionais costumam concentrar a experiência apenas em métricas como distância, tempo e ritmo, o que pode não ser suficiente para engajar usuários iniciantes ou aqueles que buscam uma atividade mais dinâmica.",
        ],
      },
      {
        kicker: "Como funciona",
        title: "Um ciclo simples que dá vontade de voltar",
        image: roCiclo,
        imageAlt: "Ciclo do Race On: escolha, mova-se, colete, evolua, volte, e recompensas por raridade",
        caption: "Escolha → Mova-se → Colete → Evolua → Volte",
        layout: "imageLeft",
        paragraphs: [
          "O ciclo combina três coisas que a pessoa já faz: se mover, explorar a cidade e ser recompensada. Caminhar e correr deixam de ser tarefa e viram progresso visível, distância, ritmo, moedas e níveis.",
          "E as moedas viram prêmios de verdade: na Loja, elas trocam por cupons de parceiros, tênis, skins e cartas colecionáveis em três raridades, Ouro, Prata e Bronze.",
        ],
      },
      {
        kicker: "Desafios",
        title: "O que precisou ser resolvido",
        bullets: [
          "Criar uma experiência atrativa tanto para iniciantes quanto para usuários experientes.",
          "Transformar a atividade física em uma jornada divertida sem perder a simplicidade.",
          "Usar a geolocalização de forma segura, evitando áreas inadequadas e distrações durante o percurso.",
          "Definir missões e recompensas capazes de incentivar a recorrência.",
          "Equilibrar competição, progressão e benefícios sem tornar o aplicativo complexo.",
          "Desenvolver mecanismos para identificar fraudes e atividades incompatíveis com caminhada ou corrida.",
          "Criar uma experiência multilíngue, tendo o português como idioma principal.",
          "Estruturar um MVP que valide o interesse dos usuários antes de incluir funcionalidades mais avançadas.",
        ],
        image: roDesafios,
        imageAlt: "Telas do Race On: preparar atividade, corrida ativa com timer e perfil com conquistas",
        caption: "Segurança, anti-fraude e simplicidade, pensados desde o MVP",
        layout: "imageFull",
      },
    ],
  },
];

export const getProject = (id?: string) =>
  projects.find((p) => p.id === id);
