import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getProject, projects, type CaseSection } from "../data/projects";
import Reveal from "../components/Reveal";
import DesignSystemShowcase from "../components/DesignSystemShowcase";

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

function CaseSectionBlock({ s }: { s: CaseSection }) {
  const hasImg = !!s.image;
  const layout = s.layout ?? (hasImg ? "imageRight" : "text");
  return (
    <Reveal className={`cs-section cs-${layout}`}>
      <div className="cs-copy">
        {s.kicker && <span className="cs-kicker">{s.kicker}</span>}
        <h2 className="cs-h2">{s.title}</h2>
        {s.paragraphs?.map((p, i) => (
          <p key={i} className="cs-p">
            {p}
          </p>
        ))}
        {s.bullets && (
          <ul className="cs-list">
            {s.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>
      {hasImg && (
        <figure className="cs-figure">
          <img src={s.image} alt={s.imageAlt ?? ""} loading="lazy" />
          {s.caption && <figcaption>{s.caption}</figcaption>}
        </figure>
      )}
    </Reveal>
  );
}

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
  const rich = !!project.sections;

  return (
    <motion.main
      className="wrap pd"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
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
        <h1 className="pd-title">{project.name}</h1>
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

      {rich ? (
        <>
          {project.heroImage && (
            <Reveal className="cs-hero">
              <img src={project.heroImage} alt={project.heroImageAlt ?? project.name} />
            </Reveal>
          )}
          {project.sections!.map((s, i) => (
            <CaseSectionBlock s={s} key={i} />
          ))}
          {project.designSystem && <DesignSystemShowcase />}
        </>
      ) : (
        <>
          <div className="screens-strip">
            <div className="screen-frame">
              <img src={project.cover} alt={project.coverAlt} />
              {project.screenCaption && (
                <div className="screen-caption">{project.screenCaption}</div>
              )}
            </div>
          </div>
          {project.blocks?.map((block, i) => (
            <div className="pd-block" key={i}>
              <p className="pd-label">{block.label}</p>
              {"paragraphs" in block && block.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
              {"items" in block && (
                <ul>
                  {block.items.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </>
      )}

      <div className="pd-nav-next">
        <button className="back-btn" onClick={() => navigate(`/projeto/${next.id}`)}>
          Ver {next.name} <ArrowRight />
        </button>
      </div>
    </motion.main>
  );
}
