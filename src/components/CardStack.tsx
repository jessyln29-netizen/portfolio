import * as React from "react";
import { motion, AnimatePresence, useReducedMotion, type PanInfo } from "framer-motion";

export type CardStackItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc: string;
};

type CardStackProps = {
  items: CardStackItem[];
  initialIndex?: number;
  maxVisible?: number;
  overlap?: number;
  spreadDeg?: number;
  perspectivePx?: number;
  depthPx?: number;
  tiltXDeg?: number;
  activeLiftPx?: number;
  activeScale?: number;
  inactiveScale?: number;
  springStiffness?: number;
  springDamping?: number;
  autoAdvance?: boolean;
  intervalMs?: number;
};

const wrap = (n: number, len: number) => (len <= 0 ? 0 : ((n % len) + len) % len);

function signedOffset(i: number, active: number, len: number) {
  const raw = i - active;
  if (len <= 1) return raw;
  const alt = raw > 0 ? raw - len : raw + len;
  return Math.abs(alt) < Math.abs(raw) ? alt : raw;
}

export default function CardStack({
  items,
  initialIndex = 0,
  maxVisible = 5,
  overlap = 0.42,
  spreadDeg = 40,
  perspectivePx = 1100,
  depthPx = 130,
  tiltXDeg = 10,
  activeLiftPx = 20,
  activeScale = 1.02,
  inactiveScale = 0.92,
  springStiffness = 280,
  springDamping = 30,
  autoAdvance = true,
  intervalMs = 3600,
}: CardStackProps) {
  const reduceMotion = useReducedMotion();
  const len = items.length;
  const [active, setActive] = React.useState(() => wrap(initialIndex, len));
  const [hovering, setHovering] = React.useState(false);
  const [measured, setMeasured] = React.useState({ w: 520, h: 340 });
  const stageRef = React.useRef<HTMLDivElement>(null);

  // largura responsiva do card
  React.useEffect(() => {
    const update = () => {
      const stageW = stageRef.current?.clientWidth ?? 900;
      const w = Math.min(560, Math.max(240, Math.round(stageW * 0.62)));
      setMeasured({ w, h: Math.round(w * 0.62) });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxOffset = Math.max(0, Math.floor(maxVisible / 2));
  const cardSpacing = Math.max(10, Math.round(measured.w * (1 - overlap)));
  const stepDeg = maxOffset > 0 ? spreadDeg / maxOffset : 0;

  const prev = React.useCallback(() => setActive((a) => wrap(a - 1, len)), [len]);
  const next = React.useCallback(() => setActive((a) => wrap(a + 1, len)), [len]);

  React.useEffect(() => {
    if (!autoAdvance || reduceMotion || hovering || len <= 1) return;
    const id = window.setInterval(next, Math.max(1200, intervalMs));
    return () => window.clearInterval(id);
  }, [autoAdvance, reduceMotion, hovering, len, intervalMs, next]);

  if (!len) return null;

  return (
    <div
      className="cardstack"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        ref={stageRef}
        className="cardstack-stage"
        style={{ height: measured.h + 90, perspective: `${perspectivePx}px` }}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") prev();
          if (e.key === "ArrowRight") next();
        }}
        aria-roledescription="carrossel"
      >
        <span className="cardstack-wash" aria-hidden="true" />
        <div className="cardstack-track">
          <AnimatePresence initial={false}>
            {items.map((item, i) => {
              const off = signedOffset(i, active, len);
              const abs = Math.abs(off);
              if (abs > maxOffset) return null;
              const isActive = off === 0;
              const x = off * cardSpacing;
              const y = abs * 8 + (isActive ? -activeLiftPx : 0);
              const z = -abs * depthPx;
              const rotateZ = off * stepDeg;
              const rotateX = isActive ? 0 : tiltXDeg;
              const scale = isActive ? activeScale : inactiveScale;

              const dragProps = isActive
                ? {
                    drag: "x" as const,
                    dragConstraints: { left: 0, right: 0 },
                    dragElastic: 0.18,
                    onDragEnd: (_e: unknown, info: PanInfo) => {
                      if (reduceMotion) return;
                      const t = info.offset.x;
                      const v = info.velocity.x;
                      const threshold = Math.min(150, measured.w * 0.22);
                      if (t > threshold || v > 600) prev();
                      else if (t < -threshold || v < -600) next();
                    },
                  }
                : {};

              return (
                <motion.div
                  key={item.id}
                  className={`cardstack-card${isActive ? " is-active" : ""}`}
                  style={{
                    width: measured.w,
                    height: measured.h,
                    zIndex: 100 - abs,
                    transformStyle: "preserve-3d",
                  }}
                  initial={reduceMotion ? false : { opacity: 0, x, y: y + 40, rotateZ, rotateX, scale }}
                  animate={{ opacity: 1, x, y, rotateZ, rotateX, scale }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: springStiffness, damping: springDamping }}
                  onClick={() => (isActive ? null : setActive(i))}
                  {...dragProps}
                >
                  <div className="cardstack-inner" style={{ transform: `translateZ(${z}px)` }}>
                    <img src={item.imageSrc} alt={item.title} draggable={false} loading="lazy" />
                    <div className="cardstack-overlay" />
                    <div className="cardstack-caption">
                      <strong>{item.title}</strong>
                      {item.description && <span>{item.description}</span>}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="cardstack-nav">
        <button className="cardstack-arrow" onClick={prev} aria-label="Anterior">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <div className="cardstack-dots">
          {items.map((it, idx) => (
            <button
              key={it.id}
              className={idx === active ? "on" : ""}
              onClick={() => setActive(idx)}
              aria-label={`Ir para ${it.title}`}
            />
          ))}
        </div>
        <button className="cardstack-arrow" onClick={next} aria-label="Próxima">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>
    </div>
  );
}
