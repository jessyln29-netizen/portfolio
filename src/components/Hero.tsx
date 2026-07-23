import { motion } from "framer-motion";

const scrollTo = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const up = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section className="hero-x">
      <div className="hx-borders" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="hx-inner">
        <motion.a className="hx-badge" href="#trabalho" onClick={scrollTo("trabalho")} {...up(0.05)}>
          <svg
            className="hx-rocket"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
          <span>Aberta a novos projetos</span>
          <span className="hx-div" />
          <ArrowRight className="hx-arrow" />
        </motion.a>

        <motion.h1 className="hx-title" {...up(0.15)}>
          Desenho produtos que
          <br />
          <em>escalam e lideram.</em>
        </motion.h1>

        <motion.p className="hx-sub" {...up(0.25)}>
          Conectando negócio e experiência
          <br />
          para escalar, inovar e liderar.
        </motion.p>

        <motion.div className="hx-cta" {...up(0.35)}>
          <a className="hx-btn hx-btn-secondary" href="#contato" onClick={scrollTo("contato")}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Fale comigo
          </a>
          <a className="hx-btn hx-btn-primary" href="#trabalho" onClick={scrollTo("trabalho")}>
            Ver projetos
            <ArrowRight className="hx-arrow" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
