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
import enHero from "../assets/en-hero.webp";
import enIntro from "../assets/en-intro.webp";
import enCenario from "../assets/en-cenario.webp";
import enDesafios from "../assets/en-desafios.webp";
import enCta from "../assets/en-cta.webp";
import ozCta from "../assets/oz-cta.webp";

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
  designSystem?: "orizon" | "raceon" | "envia";
  appCta?: { image: string; url: string; alt: string; accent?: string; accentText?: string };
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
    appCta: {
      image: ozCta,
      url: "https://looptech-omega.vercel.app/",
      alt: "Conheça a Orizon: sua mudança organizada do início ao fim, em laptop e tablet",
      accent: "#7FBA00",
      accentText: "#0D0D0D",
    },
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
    kicker: "App · Transferências internacionais · 2026",
    cardDesc:
      "Transferências internacionais EUA → Brasil: rápido, seguro e transparente, feito pro brasileiro imigrante.",
    summary:
      "Uma plataforma de transferências internacionais que aproxima brasileiros nos EUA de suas famílias no Brasil, transformando o envio de dinheiro num processo simples, seguro e sem burocracia.",
    meta: [
      { label: "Meu papel", value: "Product Design, identidade de marca, UX/UI e Design System" },
      { label: "Tipo", value: "App mobile + landing · Money transfer" },
      { label: "Empresa", value: "Envia+, do grupo EzPag" },
      { label: "Ano", value: "2026" },
    ],
    designSystem: "envia",
    appCta: {
      image: enCta,
      url: "https://jessyln29-netizen.github.io/envia-plus/app/",
      alt: "Conheça o app Envia+: transferências internacionais simples, seguras e transparentes",
      accent: "#5B0CD8",
      accentText: "#ffffff",
    },
    heroImage: enHero,
    heroImageAlt:
      "Experiência Envia+ em vários celulares: home, transferências e calculadora de câmbio",
    sections: [
      {
        kicker: "Introdução",
        title: "Dinheiro que atravessa a fronteira sem atrito",
        layout: "imageFull",
        image: enIntro,
        imageAlt:
          "Onboarding do Envia+: login, verificação de telefone e conta criada com sucesso",
        caption: "Onboarding: uma experiência simples desde o primeiro acesso",
        paragraphs: [
          "A Envia+ é uma plataforma de transferências internacionais criada para aproximar brasileiros que vivem nos Estados Unidos de suas famílias no Brasil. A proposta é oferecer uma experiência rápida, segura e transparente, transformando o envio de dinheiro em um processo simples, acessível e sem burocracias desnecessárias.",
        ],
      },
      {
        kicker: "Cenário",
        title: "Uma renda que cruza fronteiras",
        layout: "imageFull",
        image: enCenario,
        imageAlt:
          "Jornada de transferência do Envia+: beneficiário, motivo, pagamento e confirmação",
        caption: "Da escolha ao envio, cada etapa flui",
        paragraphs: [
          "Milhares de brasileiros que vivem nos Estados Unidos enviam dinheiro regularmente para o Brasil, contribuindo com despesas familiares, projetos pessoais e planos para o futuro. Muitos desses imigrantes possuem renda variável, trabalham em setores como construção, limpeza, delivery e hospitalidade e encontram dificuldades para utilizar serviços financeiros tradicionais. Nesse contexto, eles procuram uma solução confiável, fácil de entender e preparada para a sua realidade.",
        ],
      },
      {
        kicker: "Desafios",
        title: "Transmitir segurança sem parecer complexo",
        layout: "imageFull",
        image: enDesafios,
        imageAlt: "Fluxo de identidade e comprovante do Envia+: confiança em cada etapa",
        caption: "Confiança em cada etapa: documento, comprovante e status transparente",
        paragraphs: [
          "O principal desafio foi desenvolver uma experiência digital capaz de transmitir segurança sem parecer complexa ou distante. A solução precisava simplificar cada etapa da transferência, apresentar informações e valores com transparência e criar uma comunicação próxima e acolhedora. Além da eficiência, era fundamental construir uma identidade que valorizasse o público brasileiro e fortalecesse a confiança necessária para movimentar dinheiro entre países.",
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
