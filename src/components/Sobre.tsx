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
            <p className="bio bio-lead">Design, product and technology working together.</p>
            <p className="bio">
              Sou <strong>Senior Product Designer</strong> expandindo minha atuação para{" "}
              <strong>Design Engineering</strong>, com uma trajetória construída na criação e
              evolução de produtos digitais.
            </p>
            <p className="bio">
              Minha base está em UX e Product Design: discovery, pesquisa, arquitetura da
              informação, definição de jornadas e fluxos, prototipação, UI, testes de usabilidade e
              Design Systems.
            </p>
            <p className="bio">
              Nos últimos anos, comecei a aproximar ainda mais Design e Engenharia, incorporando{" "}
              <strong>Inteligência Artificial</strong> ao meu processo de trabalho.
            </p>
            <p className="bio">
              Hoje utilizo ferramentas como Claude e ChatGPT não apenas para apoiar pesquisa ou
              ideação, mas também para transformar decisões de design em protótipos e produtos
              funcionais, permitindo testar, iterar e evoluir experiências com muito mais
              velocidade.
            </p>
            <p className="bio">
              Meu objetivo é reduzir a distância entre o que é pensado no design e o que realmente
              chega às mãos do usuário.
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
                <strong>Residente em Contagem, MG</strong>Atuação remota para times do Brasil e EUA
              </div>
              <div>
                <strong>6+ anos</strong>Transitando entre design, pesquisa e produto
              </div>
              <div>
                <strong>Setor Atual</strong>Fintech de crédito e rent-to-own
              </div>
              <div>
                <strong>Hoje</strong>Product Designer Sênior na EzPag
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
