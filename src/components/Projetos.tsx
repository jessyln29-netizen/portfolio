import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { projects, aiProjects, type Project } from "../data/projects";

type Props = {
  id: string;
  title: string;
  num: string;
  list: Project[];
  emptyText?: string;
};

function ProjectsSection({ id, title, num, list, emptyText }: Props) {
  const navigate = useNavigate();

  return (
    <section id={id}>
      <div className="wrap">
        <Reveal className="section-head projects-head">
          <div>
            <h2 className="section-title big">{title}</h2>
            <span className="section-num">{num}</span>
          </div>
        </Reveal>

        {list.length === 0 && emptyText && <p className="projects-empty">{emptyText}</p>}

        <div className="projects-grid">
          {list.map((p, i) => (
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

export function ProjetosIA() {
  return (
    <ProjectsSection
      id="projetos-ia"
      title="Projetos criados com apoio da IA"
      num="02 · Design + IA"
      list={aiProjects}
      emptyText="Novos projetos entram aqui em breve."
    />
  );
}

export default function Projetos() {
  return <ProjectsSection id="trabalho" title="Projetos pessoais" num="03 · Trabalho selecionado" list={projects} />;
}
