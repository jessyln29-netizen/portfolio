import Reveal from "./Reveal";

type Item = { date: string; role: string; co?: string; desc: string };

const items: Item[] = [
  {
    date: "fev 2025 — jul 2026",
    role: "Tecnólogo, Gestão de Produtos",
    co: "· Anhanguera Educacional",
    desc: "Formação em gestão de produtos digitais — visão de negócio por trás das decisões de design.",
  },
  {
    date: "jan 2022 — ago 2023",
    role: "Pós-graduação Lato Sensu (MBA), UX Research",
    co: "· Faculdade de Tecnologia de Curitiba",
    desc: "Operação de pesquisa e liderança em design — método por trás das decisões orientadas a evidência.",
  },
  {
    date: "2018 — 2019",
    role: "Graduação, Marketing & Marketing Management",
    co: "· Centro Universitário UNA",
    desc: "Comunicação, posicionamento e comportamento do consumidor.",
  },
  {
    date: "2016 — 2017",
    role: "Design Gráfico",
    co: "· Centro Universitário UNA",
    desc: "Base visual: tipografia, composição e sistemas de identidade.",
  },
];

export default function Formacao() {
  return (
    <section id="formacoes">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 className="section-title">Formação</h2>
          <span className="section-num">05</span>
        </Reveal>
        <div className="timeline">
          {items.map((it, i) => (
            <Reveal className="t-item" key={i} delay={Math.min(i * 0.05, 0.3)}>
              <div className="t-date">{it.date}</div>
              <div>
                <p className="t-role">
                  {it.role} {it.co && <span className="t-co">{it.co}</span>}
                </p>
                <p className="t-desc">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
