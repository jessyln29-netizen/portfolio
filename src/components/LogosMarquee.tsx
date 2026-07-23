const tools = [
  "Figma",
  "Design System",
  "Discovery",
  "UX Research",
  "Prototipação",
  "Testes de usabilidade",
  "Hotjar",
  "Google Analytics",
  "Testes A/B",
  "Mapeamento de jornadas",
];

export default function LogosMarquee() {
  return (
    <section className="hx-logos">
      <div className="wrap">
        <h2 className="hx-logos-title">
          Ferramentas &amp; métodos que <span>domino</span>
        </h2>
        <div className="hx-marquee">
          <div className="hx-track">
            {[...tools, ...tools].map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
