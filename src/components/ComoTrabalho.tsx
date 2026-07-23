import Reveal from "./Reveal";

const steps = [
  {
    num: "01 — Descoberta & Priorização",
    title: "Entender antes de desenhar",
    desc: "Discovery com o time de negócio, hipóteses, e priorização de backlog por valor — antes de abrir o Figma.",
  },
  {
    num: "02 — Design & Validação",
    title: "Prototipar e testar cedo",
    desc: "Wireframes, protótipos navegáveis e testes de usabilidade, com o Design System como guia de consistência.",
  },
  {
    num: "03 — Entrega & Acompanhamento",
    title: "Especificar e acompanhar",
    desc: "Handoff documentado, critérios de aceite claros, e acompanhamento de métricas pós-entrega (Hotjar, GA).",
  },
];

export default function ComoTrabalho() {
  return (
    <section className="method">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 className="section-title">Como eu trabalho</h2>
          <span className="section-num">03</span>
        </Reveal>
        <Reveal>
          <p className="section-sub">O mesmo ciclo por trás do pill lá em cima — só que por extenso.</p>
        </Reveal>
        <Reveal className="method-grid" delay={0.1}>
          {steps.map((s) => (
            <div className="method-item" key={s.num}>
              <div className="method-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
