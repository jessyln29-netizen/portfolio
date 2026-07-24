import Reveal from "./Reveal";

const tags = [
  "Discovery",
  "UX Research",
  "Figma / Design System",
  "Prototipação",
  "Testes de usabilidade",
  "Hotjar / GA / A-B",
];

export default function Sobre() {
  return (
    <section id="sobre">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 className="section-title">Sobre</h2>
          <span className="section-num">01</span>
        </Reveal>

        <div className="sobre-grid">
          <Reveal className="sobre-text">
            <p className="bio">
              Com experiência em produtos digitais e atuação <strong>design-led</strong> para criar
              experiências claras, escaláveis e orientadas a resultados.
            </p>
            <p className="bio">
              Atuo em squads multidisciplinares conduzindo o ciclo completo de produto do ponto de
              vista de Design: descoberta e definição do problema, pesquisa, mapeamento de jornadas,
              ideação, prototipação, testes de usabilidade e handoff para desenvolvimento,
              garantindo consistência e qualidade na entrega.
            </p>
            <p className="bio">
              Tenho forte atuação em <strong>UX/UI e Design Systems</strong>, promovendo padrões,
              acessibilidade e evolução contínua da experiência. Trabalho com visão de produto,
              equilibrando necessidades do negócio, restrições técnicas e expectativas do usuário —
              sempre com foco em impacto real.
            </p>
            <p className="bio">
              Sou orientada a <strong>dados e experimentação</strong>, utilizando ferramentas como
              Hotjar, Google Analytics e testes A/B para gerar insights acionáveis, validar
              hipóteses e apoiar decisões de design com evidências.
            </p>
            <p className="bio">
              Formada em Gestão de Produtos, com pós-graduação em UX Research, e trajetória
              consolidada em ambientes ágeis e times de produto.
            </p>
            <div className="tag-cloud">
              {tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="sobre-aside" delay={0.1}>
            <div className="hero-meta">
              <div>
                <strong>Contagem, MG</strong>atuando remoto para times no Brasil e nos EUA
              </div>
              <div>
                <strong>6+ anos</strong>transitando entre design, pesquisa e produto
              </div>
              <div>
                <strong>Setor atual</strong>fintech de crédito e rent-to-own
              </div>
              <div>
                <strong>Hoje</strong>Product Owner na EzPag
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
