import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import stage1 from "../assets/en-stage1.webp";
import stage2 from "../assets/en-stage2.webp";
import stage3 from "../assets/en-stage3.webp";
import stage4 from "../assets/en-stage4.webp";
import stage5 from "../assets/en-stage5.webp";

const STAGES = [
  { id: "inspiracoes", label: "Inspirações", image: stage1, caption: "Pesquisa visual: clareza de fintech, proximidade brasileira e tecnologia sem fricção." },
  { id: "simbolo", label: "Construção do símbolo", image: stage2, caption: "Identidade: avanço, soma e conexão em três gestos simples." },
  { id: "logo", label: "Construção da logo", image: stage3, caption: "Sistema de marca: símbolo e nome numa assinatura simples e memorável." },
  { id: "storytelling", label: "Storytelling", image: stage4, caption: "Narrativa: encurtar a distância entre quem envia e quem recebe." },
  { id: "wireframe", label: "Wireframe", image: stage5, caption: "Processo de UX: estrutura, hierarquia e fluxo antes da interface visual." },
];

const AUTO_PLAY = 4200;
const ITEM_HEIGHT = 66;

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

export default function CreationStages() {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const len = STAGES.length;
  const current = ((step % len) + len) % len;

  const next = useCallback(() => setStep((s) => s + 1), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, AUTO_PLAY);
    return () => clearInterval(t);
  }, [next, paused]);

  const goTo = (i: number) => {
    const diff = (i - current + len) % len;
    if (diff > 0) setStep((s) => s + diff);
    else if (diff === 0) return;
  };

  const status = (i: number) => {
    let d = i - current;
    if (d > len / 2) d -= len;
    if (d < -len / 2) d += len;
    if (d === 0) return "active";
    if (d === -1) return "prev";
    if (d === 1) return "next";
    return "hidden";
  };

  return (
    <section className="cstages">
      <div className="cstages-head">
        <span className="cstages-eyebrow">Bastidores</span>
        <h2 className="cstages-title">Etapas de criação</h2>
        <p className="cstages-lead">
          Da pesquisa visual ao wireframe: como a marca e o produto do Envia+ foram construídos,
          passo a passo.
        </p>
      </div>

      <div
        className="cstages-box"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Lista de etapas (roda vertical) */}
        <div className="cstages-left">
          <span className="cstages-fade cstages-fade-top" aria-hidden="true" />
          <span className="cstages-fade cstages-fade-bottom" aria-hidden="true" />
          <div className="cstages-wheel">
            {STAGES.map((s, i) => {
              const dist = wrap(-(len / 2), len / 2, i - current);
              const active = i === current;
              return (
                <motion.div
                  key={s.id}
                  className="cstages-chip-wrap"
                  animate={{ y: dist * ITEM_HEIGHT, opacity: 1 - Math.abs(dist) * 0.28 }}
                  transition={{ type: "spring", stiffness: 90, damping: 22 }}
                >
                  <button
                    className={`cstages-chip${active ? " active" : ""}`}
                    onClick={() => goTo(i)}
                  >
                    <span className="cstages-chip-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="cstages-chip-label">{s.label}</span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Imagem da etapa ativa */}
        <div className="cstages-right">
          <div className="cstages-stage">
            {STAGES.map((s, i) => {
              const st = status(i);
              const active = st === "active";
              const prev = st === "prev";
              const nx = st === "next";
              return (
                <motion.div
                  key={s.id}
                  className="cstages-card"
                  initial={false}
                  animate={{
                    x: active ? 0 : prev ? -90 : nx ? 90 : 0,
                    scale: active ? 1 : prev || nx ? 0.86 : 0.7,
                    opacity: active ? 1 : prev || nx ? 0.35 : 0,
                    rotate: prev ? -2.5 : nx ? 2.5 : 0,
                    zIndex: active ? 20 : prev || nx ? 10 : 0,
                    pointerEvents: active ? "auto" : "none",
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 25, mass: 0.8 }}
                >
                  <img src={s.image} alt={s.label} loading="lazy" />
                </motion.div>
              );
            })}
          </div>
          <p className="cstages-caption">{STAGES[current].caption}</p>
        </div>
      </div>
    </section>
  );
}
