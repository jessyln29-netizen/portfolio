import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { label: "Sobre", id: "sobre" },
  { label: "Projetos", id: "trabalho" },
  { label: "Trajetória", id: "trajetoria" },
  { label: "Formação", id: "formacoes" },
  { label: "Contato", id: "contato" },
];

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const home = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== "/") navigate("/");
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="site-nav">
      <div className="nav-pill">
        <a className="nav-mark" href="/" onClick={home}>
          Jéssica <span>Nascimento</span>
        </a>

        <nav className="links">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={go(l.id)}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="nav-burger"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? "open" : ""} />
          <span className={open ? "open" : ""} />
          <span className={open ? "open" : ""} />
        </button>
      </div>

      {open && (
        <motion.nav
          className="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={go(l.id)}>
              {l.label}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
