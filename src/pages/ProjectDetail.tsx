import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getProject, projects } from "../data/projects";

const ArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
);
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProject(id);

  if (!project) {
    return (
      <main className="wrap pd" style={{ paddingTop: 140, minHeight: "70vh" }}>
        <p className="card-kicker">Projeto não encontrado</p>
        <h2 style={{ fontFamily: "'Poppins', sans-serif" }}>Ops, esse projeto não existe.</h2>
        <div className="pd-nav-next">
          <Link className="back-btn" to="/">
            <ArrowLeft /> Voltar para a home
          </Link>
        </div>
      </main>
    );
  }

  const index = projects.findIndex((p) => p.id === project.id);
  const next = projects[(index + 1) % projects.length];

  return (
    <motion.main
      className="wrap pd"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ paddingBottom: 40 }}
    >
      <div className="back-bar">
        <button className="back-btn" onClick={() => navigate("/#trabalho")}>
          <ArrowLeft /> Voltar para projetos
        </button>
      </div>

      <div className="pd-head">
        <p className="card-kicker">{project.kicker}</p>
        <h2>{project.name}</h2>
        <p className="pd-summary">{project.summary}</p>
        <div className="pd-meta-row">
          {project.meta.map((m) => (
            <div key={m.label}>
              <strong>{m.label}</strong>
              {m.value}
            </div>
          ))}
        </div>
      </div>

      <div className="screens-strip">
        <div className="screen-frame">
          <img src={project.cover} alt={project.coverAlt} />
          <div className="screen-caption">{project.screenCaption}</div>
        </div>
      </div>

      {project.blocks.map((block, i) => (
        <div className="pd-block" key={i}>
          <p className="pd-label">{block.label}</p>
          {"paragraphs" in block &&
            block.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
          {"items" in block && (
            <ul>
              {block.items.map((li, j) => (
                <li key={j}>{li}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="pd-nav-next">
        <button className="back-btn" onClick={() => navigate(`/projeto/${next.id}`)}>
          Ver {next.name} <ArrowRight />
        </button>
      </div>
    </motion.main>
  );
}
