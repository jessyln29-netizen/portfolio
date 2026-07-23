import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { projects } from "../data/projects";

export default function Projetos() {
  const navigate = useNavigate();

  return (
    <section id="trabalho">
      <div className="wrap">
        <Reveal className="section-head projects-head">
          <div>
            <h2 className="section-title big">Projetos</h2>
            <span className="section-num">02 — Trabalho selecionado</span>
          </div>
          <p className="projects-intro">
            Três produtos reais, em estágios diferentes.
            <br />
            Do backlog ao pixel final.
            <br />
            Clique em cada um pra ver telas e processo.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.button
              key={p.id}
              className="project-card"
              onClick={() => navigate(`/projeto/${p.id}`)}
              aria-label={`Abrir projeto: ${p.name}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="shot">
                <img src={p.cover} alt={p.coverAlt} />
                <span className="shot-arrow" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>
              <div className="card-caption">
                <span className="tag">{p.tag}</span>
                <h3 className="proj-name">{p.name}</h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
