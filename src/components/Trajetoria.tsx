import Reveal from "./Reveal";

type Item = { date: string; role: string; co?: string; desc: string };

const items: Item[] = [
  {
    date: "Ago 2025 — atual",
    role: "Product Owner",
    co: "· EzPag",
    desc: "Miami, FL. Visão de produto, backlog e priorização por valor; validação de entregas e alinhamento diário com design, engenharia e agilidade.",
  },
  {
    date: "Ago 2024 — 2025",
    role: "Senior Product Designer",
    co: "· EzPag",
    desc: "Roadmap e MVP, Design System no Figma, testes de usabilidade e experimentos A/B, análise de comportamento com Hotjar e GA.",
  },
  {
    date: "Nov 2023 — Jul 2024",
    role: "UX Designer Pleno",
    co: "· EzPag",
    desc: "Pesquisa com usuários, prototipação em múltiplos níveis de fidelidade, manutenção do Design System.",
  },
  {
    date: "Abr 2022 — Dez 2023",
    role: "UX Designer Pleno",
    co: "· ilegra",
    desc: "São Paulo, SP. Discovery, fluxos e prototipação em squads ágeis multiclientes.",
  },
  {
    date: "Set 2021 — Mar 2022",
    role: "UX Designer Pleno",
    co: "· Try Consultoria",
    desc: "São Paulo, SP. Escopo, wireframes e protótipos para diferentes clientes.",
  },
  {
    date: "Mar 2021 — Set 2021",
    role: "UX Designer Pleno",
    co: "· Genyx Solar Power",
    desc: "Contagem, MG. Interfaces, UX Research e UX Writing, com suporte de frontend básico.",
  },
  {
    date: "2019 — 2021",
    role: "Marketing & Web Design",
    co: "· Dom Helder",
    desc: "Belo Horizonte, MG. Branding, inbound marketing, landing pages e wireframes — a porta de entrada para produto e design.",
  },
];

export default function Trajetoria() {
  return (
    <section id="trajetoria">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 className="section-title">Trajetória</h2>
          <span className="section-num">04</span>
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
