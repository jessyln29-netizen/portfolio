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
import ezCover from "../assets/ez-cover.webp";
import afCover from "../assets/af-cover.webp";
import afFigma from "../assets/af-figma.webp";
import afFigmaDados from "../assets/af-figma-dados.webp";
import afCta from "../assets/af-cta.webp";
import afAntesAnalise from "../assets/af-antes-analise.webp";
import afAntesLista from "../assets/af-antes-lista.webp";
import afAntesExtratos from "../assets/af-antes-extratos.webp";
import afWsObjetivo from "../assets/af-ws-objetivo.webp";
import afWsQuadro from "../assets/af-ws-quadro.webp";
import afWsFluxo from "../assets/af-ws-fluxo.webp";
import afSlide01 from "../assets/af-slide01.webp";
import afSlide02 from "../assets/af-slide02.webp";
import afSlide09 from "../assets/af-slide09.webp";
import afSlide12 from "../assets/af-slide12.webp";
import afNovoFila from "../assets/af-novo-fila.webp";
import afNovoDados from "../assets/af-novo-dados.webp";
import afNovoDocs from "../assets/af-novo-docs.webp";
import afNovoEndereco from "../assets/af-novo-endereco.webp";
import afNovoFaturamento from "../assets/af-novo-faturamento.webp";
import afNovoConclusao from "../assets/af-novo-conclusao.webp";
import ezCta from "../assets/ez-cta.webp";
import ezAntes1 from "../assets/ez-antes1.webp";
import ezAntes2 from "../assets/ez-antes2.webp";
import ezLista from "../assets/ez-lista.webp";
import ezDetalhe from "../assets/ez-detalhe.webp";
import ezVendas from "../assets/ez-vendas.webp";
import ezFunil from "../assets/ez-funil.webp";
import ezObjecoes from "../assets/ez-objecoes.webp";
import ezCobranca from "../assets/ez-cobranca.webp";
import ezSlide01 from "../assets/ez-slide01.webp";
import ezSlide02 from "../assets/ez-slide02.webp";
import ezSlide04 from "../assets/ez-slide04.webp";
import ezSlide12 from "../assets/ez-slide12.webp";
import ezSlide13 from "../assets/ez-slide13.webp";
import ezSlide14 from "../assets/ez-slide14.webp";
import ezSlide15 from "../assets/ez-slide15.webp";

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
  designSystem?: "orizon" | "raceon" | "envia" | "ezui";
  appCta?: { image: string; url: string; alt: string; accent?: string; accentText?: string; label?: string };
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

/** Projetos criados com apoio de IA (seção "Projetos IA"). Adicione aqui. */
export const aiProjects: Project[] = [
  {
    id: "ezcall",
    name: "Ezcall",
    tag: "IA aplicada · Produto interno",
    cover: ezCover,
    coverAlt: "Capa do Ezcall: cada ligação vira informação, com telas do produto e um resumo gerado por IA",
    kicker: "Inteligência de atendimento com IA · EzPag · 2026",
    cardDesc:
      "De repositório de gravações a uma camada de análise com IA para vendas, cobrança e produto.",
    summary:
      "O Ezcall gravava e transcrevia todas as ligações de vendas e cobrança, mas ninguém lia esse material. Usei IA para analisar 98 transcrições, encontrar onde o cliente realmente trava e transformar esse diagnóstico em produto: um pipeline de análise e as telas de desempenho, produto e operação.",
    meta: [
      { label: "Meu papel", value: "PO & Product Designer: discovery, análise, especificação e protótipo" },
      { label: "Tipo", value: "Produto interno · Inteligência de atendimento" },
      { label: "IA no processo", value: "Claude: leitura das transcrições, protótipo funcional e apresentação" },
      { label: "Ano", value: "2026" },
    ],
    heroImage: ezDetalhe,
    heroImageAlt:
      "Detalhe de uma ligação no Ezcall: transcrição separada por falante, resumo, próximos passos e tempo de fala",
    sections: [
      {
        kicker: "Ponto de partida",
        title: "Um arquivo completo, e mudo",
        image: ezSlide02,
        imageAlt: "Slide: o que já funciona, o que falta e o que fizemos",
        caption: "A infraestrutura já existia. Faltava a camada que lê o material e devolve decisão.",
        layout: "imageFull",
        paragraphs: [
          "O Ezcall é o programa interno da EzPag que grava e transcreve toda conversa entre o time e o cliente, amarrada ao pedido e ao atendente. Era um repositório completo e, ao mesmo tempo, mudo: o que o cliente dizia todos os dias não virava informação para ninguém.",
          "O pedido era evoluir o Ezcall usando IA para analisar as ligações: medir o desempenho de cada atendimento e de cada vendedor, captar reclamações e dificuldades do cliente, e descobrir o que mais estava escondido ali.",
        ],
      },
      {
        kicker: "Antes",
        title: "Uma lista de chamadas sem leitura nenhuma",
        image: ezAntes1,
        imageAlt: "Tela antiga do Ezcall: tabela de chamadas com ID, horários, duração, origem, telefone, cliente e pedido",
        caption: "A tela original: mais de 18 mil chamadas registradas, identificadas só por horário, duração e pedido. Dados de clientes ocultados.",
        layout: "imageFull",
        paragraphs: [
          "A tela original listava cada chamada com horário, duração, origem, cliente e pedido. Dava para saber que a ligação aconteceu, mas não o que foi dito, como terminou ou se havia algum problema.",
        ],
      },
      {
        kicker: "Antes",
        title: "Abrir uma ligação era ler um bloco de texto",
        image: ezAntes2,
        imageAlt: "Tela antiga de detalhe da chamada: metadados técnicos, player de áudio e transcrição em texto corrido",
        caption: "Metadados técnicos, o áudio e a transcrição em texto corrido, sem separar quem fala. Dados pessoais ocultados.",
        layout: "imageFull",
        paragraphs: [
          "No detalhe, a transcrição aparecia em um único bloco, sem separar cliente e atendente, sem resumo, sem desfecho e sem nenhum indicador. Para entender uma ligação, alguém precisava ouvir ou ler tudo, e com milhares de ligações isso não acontecia.",
        ],
      },
      {
        kicker: "Como a IA entrou",
        title: "98 transcrições lidas antes de desenhar qualquer tela",
        paragraphs: [
          "Em vez de começar pelo dashboard, comecei pelo material. Usei o Claude como parceiro de análise para ler integralmente 98 transcrições reais: 52 de cobrança, 32 de venda, 9 de suporte, 3 de pós-venda e 2 de pesquisa de experiência.",
          "A IA fez a leitura em escala e a primeira classificação. As perguntas, os critérios e a validação foram meus: o que separa uma boa ligação de uma ruim, o que é responsabilidade do atendente e o que é atrito de produto, e se cada número batia com a sua base antes de ir para a liderança.",
        ],
        bullets: [
          "Dados estruturados da ligação: modelo, valores, dia de cobrança, desfecho.",
          "Aderência ao roteiro: um checklist por etapa, que vira nota por ligação e média por vendedor.",
          "Qualidade da condução: descoberta, tratamento de objeções e próximo passo com data e hora.",
          "Voz do cliente: objeções, dúvidas e atritos que se repetem.",
          "Risco de conformidade: o que precisa de revisão humana antes de virar problema.",
        ],
      },
      {
        kicker: "O achado principal",
        title: "Não era preço. Era processo.",
        image: ezSlide04,
        imageAlt: "Slide: o que mais trava a empresa não é preço",
        layout: "imageFull",
        paragraphs: [
          "Em vendas, o cliente que já decidiu comprar para na documentação: o pedido de anexos chega em etapas, e a cada novo pedido a entrega é empurrada. Em cobrança, o caso mais comum é o aparelho estar com quem não assinou o contrato.",
          "Nos dois casos, o problema é processo, não argumento de venda. Essa leitura mudou a pergunta do projeto: não bastava avaliar vendedor, era preciso mostrar ao produto onde a operação trava.",
        ],
      },
      {
        kicker: "Do diagnóstico ao produto",
        title: "Um pipeline com evidência em cada número",
        image: ezLista,
        imageAlt: "Lista de ligações do Ezcall com resumo, resultado, atendente, duração e data",
        caption: "Todas as ligações transcritas e resumidas, com o desfecho de cada uma",
        layout: "imageRight",
        paragraphs: [
          "Desenhei o pipeline de processamento: classificar o tipo de ligação, extrair dados estruturados com evidência obrigatória em um trecho da transcrição, e atribuir o atendente pelo cadastro, nunca pelo que é dito na ligação.",
          "Também revisei a régua de avaliação usada em vendas e propus critérios ancorados em comportamento observável, para que cada nota pudesse ser conferida no trecho que a sustenta.",
        ],
      },
      {
        kicker: "Desempenho de vendas",
        title: "Separar o que é do vendedor do que é do produto",
        image: ezVendas,
        imageAlt: "Tela de desempenho de vendas: indicadores e atrito de processo por etapa",
        caption: "Indicadores do time e as etapas onde o cliente trava durante o fechamento",
        layout: "imageLeft",
        paragraphs: [
          "A tela de desempenho mostra conversão, tempo de ligação, clareza na explicação da quitação e onde cada ligação parou. O bloco de atrito de processo isola o tempo gasto com documentação, validação de cartão e assinatura: tempo que depende do produto, não do vendedor.",
          "Todo número é clicável e leva às ligações e ao trecho que o sustenta. Onde o dado ainda depende do pipeline ou dos dados de contrato, a tela diz isso em vez de inventar um valor.",
        ],
      },
      {
        kicker: "Cobrança",
        title: "A área de maior volume era a que menos enxergávamos",
        image: ezCobranca,
        imageAlt: "Tela de desempenho de cobrança: indicadores, funil do bloqueio e falha de sincronização",
        caption: "Cobrança acontece toda semana e, até aqui, não gerava nenhuma informação estruturada",
        layout: "imageRight",
        paragraphs: [
          "Fechamento acontece uma vez por cliente; cobrança acontece toda semana, por meses. Mais da metade das ligações lidas era de cobrança, e o sistema não produzia nada sobre ela.",
          "Especifiquei os indicadores dessa área: funil do bloqueio, falhas de desbloqueio por falta de conexão, conciliação de pagamento e quem está na linha quando não é o titular.",
        ],
      },
      {
        kicker: "O que muda",
        title: "Uma leitura, três áreas",
        image: ezSlide12,
        imageAlt: "Slide: cada ligação vira informação para produto, pessoas e operação",
        layout: "imageFull",
        paragraphs: [
          "A mesma leitura automática alimenta produto (onde o cliente trava e quanto tempo isso custa), pessoas (devolutiva sobre a etapa exata a corrigir e ligações-modelo para treinamento) e operação (bloqueios, conciliação e promessas conferíveis contra o sistema).",
        ],
      },
      {
        kicker: "O ganho maior",
        title: "Venda, contrato e cobrança na mesma linha",
        image: ezSlide13,
        imageAlt: "Slide: ligação de venda, contrato e cobrança ligados pelo número do contrato",
        layout: "imageFull",
        paragraphs: [
          "O número do contrato liga o que foi prometido na venda, o que foi assinado e o que foi vivido na cobrança. Não é um projeto de integração, é uma consulta, e responde perguntas que a empresa ainda não conseguia fazer.",
        ],
      },
      {
        kicker: "Entrega",
        title: "Do diagnóstico à aprovação com a liderança",
        image: ezSlide14,
        imageAlt: "Slide: três decisões para começar",
        layout: "imageFull",
        paragraphs: [
          "Montei o protótipo funcional e a apresentação com apoio de IA e levei o caso para CTO e CEO, com as dependências técnicas e as três decisões necessárias para a implementação: separar quem fala na transcrição, abrir os dados de contrato e escrever o padrão de atendimento a partir das melhores ligações do próprio time.",
        ],
      },
      {
        kicker: "Desafios",
        title: "O que foi difícil",
        bullets: [
          "Transcrições em texto corrido, sem separar cliente e atendente nem marcar tempo: isso limitava o que dava para medir, e virou uma das decisões levadas à liderança.",
          "Manter cada número fiel à sua base. Revisei as contagens entre os slides e as telas para que nenhum indicador parecesse contradizer outro.",
          "Avaliar pessoas com justiça: separar falha de condução de atrito causado pelo produto.",
          "Tratar dados reais com cuidado: nomes de clientes e do time foram substituídos nas telas deste case.",
        ],
      },
    ],
    designSystem: "ezui",
    appCta: {
      image: ezCta,
      url: "/prototipos/ezcall/",
      alt: "Teste o protótipo do Ezcall: ligações transcritas, resumidas e medidas",
      accent: "#6691FF",
      accentText: "#ffffff",
      label: "Abrir protótipo · requer senha",
    },
    galleryTitle: "O produto, tela a tela",
    gallery: [
      { id: 1, title: "Ligações", description: "Todas as ligações transcritas, resumidas e com desfecho", imageSrc: ezLista },
      { id: 2, title: "Detalhe da ligação", description: "Transcrição por falante, resumo, próximos passos e tempo de fala", imageSrc: ezDetalhe },
      { id: 3, title: "Desempenho de vendas", description: "Indicadores do time e atrito de processo por etapa", imageSrc: ezVendas },
      { id: 4, title: "Funil de desfecho", description: "Como as ligações de fechamento terminam e por quê", imageSrc: ezFunil },
      { id: 5, title: "Objeções e ranking", description: "Frequência, taxa de quebra e visão por vendedor", imageSrc: ezObjecoes },
      { id: 6, title: "Desempenho de cobrança", description: "Bloqueio, desbloqueio e falhas de sincronização", imageSrc: ezCobranca },
      { id: 7, title: "A apresentação", description: "O que as ligações estão dizendo", imageSrc: ezSlide01 },
      { id: 8, title: "Fechamento", description: "A resposta já está gravada. Falta perguntar.", imageSrc: ezSlide15 },
    ],
  },
  {
    id: "antifraude",
    name: "Antifraude",
    tag: "Discovery · IA aplicada",
    cover: afCover,
    coverAlt: "Capa do Antifraude: da tela espalhada à decisão guiada, com o informe de risco e a etapa de conclusão",
    kicker: "Remodelação do fluxo de análise · EzPag · 2026",
    cardDesc:
      "Do discovery com o time de análise a um fluxo guiado em 5 etapas, com o risco sempre à vista.",
    summary:
      "Cada ordem da EzPag passa por uma análise de antifraude antes da aprovação, e a informação estava espalhada por várias telas. Conduzi o discovery com o time de análise, usei IA para sintetizar os workshops e transformei o resultado em um fluxo guiado: 5 etapas, um informe de risco sempre visível e uma decisão que só sai justificada.",
    meta: [
      { label: "Meu papel", value: "PO & Product Designer: discovery, facilitação, UX/UI e protótipo" },
      { label: "Tipo", value: "Produto interno · Back-office de análise de risco" },
      { label: "IA no processo", value: "Claude: síntese dos workshops, documento de ação e protótipo funcional" },
      { label: "Ano", value: "2026" },
    ],
    heroImage: afNovoDados,
    heroImageAlt:
      "Nova análise de antifraude: etapas no topo, dados iniciais do pedido e o informe de risco fixo na lateral",
    sections: [
      {
        kicker: "Contexto",
        title: "Uma decisão montada de cabeça",
        image: afAntesAnalise,
        imageAlt: "Tela antiga de análise: uma coluna longa com dezenas de blocos de informação",
        caption: "A tela antiga de análise, com dados desfocados: tudo em uma coluna longa, sem um caminho até a decisão",
        layout: "imageLeft",
        paragraphs: [
          "A EzPag financia aparelhos em parcelas, e cada ordem passa por uma análise de antifraude antes de ser aprovada. O analista precisa cruzar documentos, extratos, endereço, histórico de pagamentos e alertas do sistema.",
          "Na tela antiga, essas informações estavam soltas em uma coluna longa e em ferramentas separadas. O analista trocava de tela, reprocessava integrações e interpretava alertas sem contexto. A decisão existia, mas o caminho até ela ficava na cabeça de cada um.",
        ],
      },
      {
        kicker: "Antes",
        title: "Uma fila sem tempo nem responsável",
        image: afAntesLista,
        imageAlt: "Fila antiga de antifraude com filtros e tabela de pedidos, dados de clientes desfocados",
        caption: "A fila original. Dados de clientes desfocados.",
        layout: "imageFull",
        paragraphs: [
          "A fila mostrava status e valores, mas não há quanto tempo a ordem esperava, quem estava analisando nem o tipo de frete. Duas pessoas podiam abrir a mesma ordem, e o que era urgente não se destacava.",
        ],
      },
      {
        kicker: "Antes",
        title: "A leitura dos extratos vivia em outra tela",
        image: afAntesExtratos,
        imageAlt: "Tela antiga de leitura dos extratos bancários, com dados pessoais desfocados",
        caption: "A análise de extratos já existia, separada do restante da análise. Dados pessoais desfocados.",
        layout: "imageFull",
        paragraphs: [
          "A leitura financeira dos extratos já era feita com apoio de IA, mas ficava separada. Para chegar a uma conclusão, o analista juntava em memória o que via aqui com o que via na tela principal.",
        ],
      },
      {
        kicker: "Discovery",
        title: "Dois workshops com quem analisa todos os dias",
        image: afWsObjetivo,
        imageAlt: "Quadro do workshop com o objetivo e o resultado esperado",
        caption: "Objetivo e resultado esperado, combinados com o time antes de começar",
        layout: "imageRight",
        paragraphs: [
          "Facilitei duas sessões presenciais com o time de antifraude, produto e tecnologia, oito pessoas no total. O objetivo era entender o que funciona, o que trava, que informação precisa aparecer primeiro e quais melhorias ajudariam de verdade.",
          "Cada quadro foi preenchido individualmente e só depois discutido em grupo, para capturar a visão de cada analista sem que a opinião mais forte puxasse as outras. No fim, todos votaram nos pontos mais críticos.",
        ],
      },
      {
        kicker: "Discovery",
        title: "Dores, ideias e votos",
        image: afWsQuadro,
        imageAlt: "Quadro do FigJam com as dores do fluxo atual e a geração de ideias, com bolinhas de votação",
        caption: "Onde se perde tempo, o que gera retrabalho, que informação chega tarde e quais alertas confundem. As bolinhas são os votos.",
        layout: "imageFull",
      },
      {
        kicker: "Discovery",
        title: "Cada analista desenhou o seu fluxo ideal",
        image: afWsFluxo,
        imageAlt: "Quadro com os fluxos ideais desenhados por cada participante",
        caption: "Seis propostas de fluxo, uma por participante. Nomes ocultados.",
        layout: "imageFull",
        paragraphs: [
          "Em vez de eu propor a jornada, pedi que cada pessoa desenhasse a sua. As seis propostas tinham ordens diferentes, mas os mesmos pontos de atenção apareciam em quase todas, e foi isso que guiou o novo fluxo.",
        ],
      },
      {
        kicker: "Como a IA entrou",
        title: "Da transcrição ao documento de ação",
        image: afSlide02,
        imageAlt: "Slide de síntese executiva: organizar, integrar e automatizar",
        layout: "imageFull",
        paragraphs: [
          "Os dois workshops foram transcritos. Usei o Claude para cruzar as transcrições com os quadros e as votações e montar o documento de ação: dores principais, etapas que precisavam mudar, a ordem ideal das informações, as funcionalidades pedidas e um desenho inicial da nova jornada.",
          "A IA acelerou a leitura e a organização. A facilitação, a priorização e a validação de cada ponto com o time foram minhas, e o documento só circulou depois que conferi cada achado contra o que foi dito nas sessões.",
        ],
        bullets: [
          "Organizar: agrupar a informação por tema e trazer o essencial para o topo.",
          "Integrar: trazer para dentro da análise o que hoje exige trocar de ferramenta.",
          "Automatizar: deixar padrões claros para o sistema e apoiar o parecer com IA.",
        ],
      },
      {
        kicker: "Nova experiência",
        title: "A ordem em que a informação aparece",
        image: afSlide09,
        imageAlt: "Slide: ordem ideal de apresentação das informações e princípios de agrupamento",
        layout: "imageFull",
        paragraphs: [
          "O time foi claro: identificação, endereço e documentos precisam estar no topo, os alertas precisam vir juntos e com contexto, e o analista não deveria rolar a tela para achar o básico.",
        ],
      },
      {
        kicker: "Novo fluxo",
        title: "Seis propostas, uma jornada",
        image: afSlide12,
        imageAlt: "Slide: desenho inicial da jornada do analista, da pré-análise ao pós-decisão",
        layout: "imageFull",
        paragraphs: [
          "Consolidei os fluxos individuais em uma jornada só: fila priorizada, abertura com o essencial, alertas consolidados, análise por blocos, validações integradas, parecer assistido e pós-decisão. Clientes recorrentes reaproveitam o que já foi validado.",
        ],
      },
      {
        kicker: "Primeira versão · Figma",
        title: "O fluxo começou no Figma",
        image: afFigma,
        imageAlt: "Primeiras telas no Figma: dados iniciais, endereço e histórico do pedido, com o informe de risco na lateral",
        caption: "Dados iniciais, endereço e histórico do pedido na primeira versão. Dados pessoais e pesos do score ocultados.",
        layout: "imageFull",
        paragraphs: [
          "Com a jornada consolidada, desenhei a primeira versão no Figma. Ela já trazia as decisões principais: as etapas no topo, o informe de risco fixo na lateral e uma linha do tempo com tudo o que aconteceu no pedido.",
        ],
      },
      {
        kicker: "Primeira versão · Figma",
        title: "O que mudou do Figma para o protótipo",
        image: afFigmaDados,
        imageAlt: "Etapa de dados iniciais na primeira versão do Figma",
        caption: "Dados iniciais na versão do Figma",
        layout: "imageLeft",
        paragraphs: [
          "A versão do Figma validou a estrutura com o time. No protótipo funcional, levei o fluxo para o EzUI v2 em fundo claro, dei mais respiro aos blocos e transformei a etapa de encerramento em uma decisão guiada, com checklist e pendências entre times.",
          "O histórico do pedido continuou como etapa própria, e os alertas do sistema ganharam uma explicação de uma linha cada.",
        ],
      },
      {
        kicker: "O protótipo",
        title: "A fila que mostra o que importa",
        image: afNovoFila,
        imageAlt: "Nova fila de antifraude com analista, frete e SLA de cada ordem",
        caption: "Analista responsável, frete e SLA visíveis em cada linha",
        layout: "imageFull",
        paragraphs: [
          "A partir do Figma, construí o protótipo funcional com apoio de IA sobre o EzUI v2, o design system da EzPag. A fila passou a mostrar quem está com cada ordem, o tipo de frete e há quanto tempo ela espera, com cor de alerta conforme o prazo aperta.",
        ],
      },
      {
        kicker: "Etapa 1 · Dados iniciais",
        title: "O informe de risco nunca sai da tela",
        image: afNovoDados,
        imageAlt: "Etapa de dados iniciais com o informe de risco fixo na lateral",
        caption: "Etapas no topo e o informe de risco fixo na lateral, em todas as etapas",
        layout: "imageLeft",
        paragraphs: [
          "A análise foi dividida em etapas navegáveis: dados iniciais, documentação, endereço, faturamento, histórico e conclusão. Do lado, um painel fixo resume o risco da ordem, as pendências que o analista sinalizou e os alertas do sistema, cada um com o seu porquê.",
          "Na primeira etapa ficam os dados do cliente, da ordem e do contrato, e as outras ordens em blocos que abrem só quando o analista precisa.",
        ],
      },
      {
        kicker: "Etapa 2 · Documentação",
        title: "Documentos com histórico, não sobrescritos",
        image: afNovoDocs,
        imageAlt: "Etapa de documentação com documentos, extratos, análise facial, comparações e histórico de documentos",
        caption: "Documentos fictícios. Cada grupo pode ser sinalizado ou reenviado ao cliente.",
        layout: "imageRight",
        paragraphs: [
          "O histórico documental foi o pedido mais votado do workshop. Agora as versões anteriores ficam guardadas por ordem, em vez de o arquivo novo apagar o antigo.",
          "Cada grupo de documentos tem duas ações: sinalizar um problema ou copiar o link para o cliente reenviar. As comparações automáticas aparecem em uma lista que diz o que conferiu e o que pede atenção.",
        ],
      },
      {
        kicker: "Etapa 3 · Endereço",
        title: "Endereço, mapa e vínculos em um lugar",
        image: afNovoEndereco,
        imageAlt: "Etapa de endereço com mapa de cluster, risco por CEP, teia de grupo familiar e fingerprint",
        caption: "Tudo sobre endereço junto, como o time pediu",
        layout: "imageLeft",
        paragraphs: [
          "Antes, o mapa aparecia só no fim da tela e a validação de endereço exigia outra ferramenta. Agora a etapa reúne o endereço atual, o mapa de clusters, o risco por CEP e uma teia interativa de grupo familiar, em que o analista explora conexões e vincula ou desvincula ordens.",
        ],
      },
      {
        kicker: "Etapa 4 · Faturamento",
        title: "A leitura financeira dentro da análise",
        image: afNovoFaturamento,
        imageAlt: "Etapa de faturamento com a leitura dos extratos gerada por IA",
        caption: "A leitura dos extratos feita pela IA, agora dentro do fluxo",
        layout: "imageRight",
        paragraphs: [
          "A leitura dos extratos feita pela IA deixou de ser uma tela à parte. Receitas, despesas, fluxo de caixa semanal e saúde do saldo ficam dentro da análise, com a opção de reprocessar sem sair da ordem.",
        ],
      },
      {
        kicker: "Etapa 5 · Conclusão",
        title: "Uma decisão que só sai justificada",
        image: afNovoConclusao,
        imageAlt: "Etapa de conclusão com checklist, pendências com o time de vendas e a decisão guiada em três passos",
        caption: "Checklist, pendências entre times e a decisão guiada em três passos",
        layout: "imageFull",
        paragraphs: [
          "A conclusão virou um fluxo guiado em três passos: escolher a decisão, justificar com motivos agrupados por categoria e detalhar. O botão principal muda de texto conforme a decisão e só fica ativo quando a justificativa está completa.",
          "Quando a ordem fica pendente, o sistema cria um card que vai para o time de vendas. O analista revisa a resolução e aceita ou reabre, e a ordem só pode ser aprovada com todas as pendências concluídas.",
        ],
      },
      {
        kicker: "Decisões de design",
        title: "Os princípios por trás das telas",
        bullets: [
          "Cada tela termina em uma ação clara, e ações definitivas só ficam disponíveis quando os pré-requisitos estão cumpridos.",
          "Muita informação, com respiro: cards de título curto e blocos que abrem só quando o analista precisa.",
          "Análise, Blocklist e Chargeback seguem a mesma navegação, os mesmos padrões de tabela, filtro e card e o mesmo vocabulário de status.",
          "Fidelidade ao design system: componentes, cores, tipografia e raios do EzUI v2, sem estilos inventados.",
        ],
      },
      {
        kicker: "Desafios",
        title: "O que foi difícil",
        bullets: [
          "Consolidar seis jornadas diferentes em uma só, sem perder o que cada analista considerava indispensável.",
          "Mostrar muita informação sem voltar ao problema original de uma tela que ninguém consegue ler.",
          "Revisar cerca de 21 funcionalidades existentes e garantir que nenhuma se perdesse na nova estrutura.",
          "Tratar um tema sensível em público: nomes, documentos, endereços e critérios de decisão foram substituídos ou ocultados neste case e no protótipo.",
        ],
      },
    ],
    appCta: {
      image: afCta,
      url: "/prototipos/antifraude/",
      alt: "Teste o protótipo do Antifraude: a análise em 5 etapas, com o informe de risco sempre à vista",
      accent: "#39DDA2",
      accentText: "#0F241A",
      label: "Abrir protótipo · requer senha",
    },
    galleryTitle: "O protótipo, etapa a etapa",
    gallery: [
      { id: 1, title: "Fila de análise", description: "Analista, frete e SLA em cada ordem", imageSrc: afNovoFila },
      { id: 2, title: "Dados iniciais", description: "Cliente, ordem, contrato e o informe de risco", imageSrc: afNovoDados },
      { id: 3, title: "Documentação", description: "Documentos, extratos e histórico documental", imageSrc: afNovoDocs },
      { id: 4, title: "Endereço", description: "Mapa de cluster, risco por CEP e grupo familiar", imageSrc: afNovoEndereco },
      { id: 5, title: "Faturamento", description: "Leitura financeira gerada pela IA", imageSrc: afNovoFaturamento },
      { id: 6, title: "Conclusão", description: "Checklist, pendências e decisão guiada", imageSrc: afNovoConclusao },
      { id: 7, title: "Primeira versão no Figma", description: "Dados iniciais, endereço e histórico", imageSrc: afFigma },
      { id: 8, title: "Documento de ação", description: "O resultado do discovery", imageSrc: afSlide01 },
    ],
  },
];

export const getProject = (id?: string) =>
  projects.find((p) => p.id === id) ?? aiProjects.find((p) => p.id === id);
