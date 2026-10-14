import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Understand",
    desc: "Compreendo usuários, negócio, contexto e o problema que realmente precisa ser resolvido.",
  },
  {
    num: "02",
    title: "Explore",
    desc: "Pesquisa, benchmark, jornadas, hipóteses, fluxos e exploração de diferentes caminhos para a solução.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Arquitetura, interface, interação, Design System e prototipação da experiência.",
  },
  {
    num: "04",
    title: "Build with AI",
    desc: "Utilizo ferramentas de IA para transformar conceitos e interfaces em experiências funcionais e explorar rapidamente alternativas de implementação.",
  },
  {
    num: "05",
    title: "Test & Iterate",
    desc: "Avalio o comportamento da solução, identifico problemas e refino a experiência a partir dos aprendizados.",
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
