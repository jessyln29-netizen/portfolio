import { useState } from "react";
import Reveal from "./Reveal";

const pesos = [
  { w: 400, label: "Regular · Corpo", sample: "Cada passo vira progresso visível" },
  { w: 600, label: "Semibold · Rótulos · Botões", sample: "Iniciar atividade aqui" },
  { w: 700, label: "Bold · Títulos de seção", sample: "Suas moedas viram prêmios" },
  { w: 800, label: "Extrabold Italic · Display", sample: "CORRA. EXPLORE. CONQUISTE.", italic: true },
];

const escala = [
  { spec: "48 / 800 italic", name: "Display & Hero", px: 38, weight: 800, italic: true },
  { spec: "30 / 700", name: "Título de seção", px: 28, weight: 700 },
  { spec: "19 / 600", name: "Subtítulo & card", px: 19, weight: 600 },
  { spec: "15 / 400", name: "Texto de corpo", px: 15, weight: 400 },
  { spec: "11 / 700", name: "Rótulo · eyebrow", px: 12, weight: 700 },
];

const marca = [
  { name: "Verde-Limão", hex: "#B8F135", note: "Ações, metas e sucesso" },
  { name: "Lima Escuro", hex: "#8DBE1E", note: "Estados pressionados" },
  { name: "Ouro Moeda", hex: "#F4B400", note: "Moedas, valor e destaque" },
];
const raridades = [
  { name: "Ouro", hex: "#F0B429" },
  { name: "Prata", hex: "#C4CBD4" },
  { name: "Bronze", hex: "#C6893F" },
  { name: "Lendária", hex: "#7C5CFF" },
];
const neutros = [
  { name: "Preto Arena", hex: "#0B0B0D" },
  { name: "Grafite", hex: "#17181C" },
  { name: "Linha", hex: "#2A2C31" },
  { name: "Branco", hex: "#FFFFFF" },
];
const semanticas = [
  { name: "Sucesso", hex: "#B8F135" },
  { name: "Atenção", hex: "#F59E0B" },
  { name: "Erro", hex: "#EF4444" },
  { name: "Info", hex: "#38BDF8" },
];

const espacos: [number, number][] = [
  [1, 4], [2, 8], [3, 12], [4, 16], [6, 24], [8, 32], [10, 40], [12, 48], [16, 64], [20, 80], [24, 96],
];
const raios: [string, number][] = [
  ["sm", 8], ["md", 12], ["lg", 16], ["xl", 20], ["2xl", 26], ["full", 999],
];
const breakpoints: [string, string, string][] = [
  ["sm", "640px", "Layout do app cabe no telefone"],
  ["md", "768px", "Landing, nav completa"],
  ["lg", "1024px", "Grids de recompensas em 3 colunas"],
  ["xl", "1280px", "Widescreen da landing"],
];

function Swatch({ name, hex, note }: { name: string; hex: string; note?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(hex).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  const lightChip = hex === "#FFFFFF" || hex === "#C4CBD4";
  return (
    <button className="ro-swatch" onClick={copy} title={`Copiar ${hex}`}>
      <span className="ro-swatch-chip" style={{ background: hex, border: lightChip ? "1px solid #2A2C31" : "none" }} />
      <span className="ro-swatch-info">
        <strong>{name}</strong>
        {note && <span className="ro-swatch-note">{note}</span>}
        <span className="ro-swatch-hex">{copied ? "Copiado!" : hex}</span>
      </span>
    </button>
  );
}

export default function RaceOnStyleGuide() {
  return (
    <div className="ro-ds">
      <Reveal className="ro-head">
        <span className="ro-eyebrow">Design System · Race On</span>
        <h2 className="ro-title">Style guide, ao vivo</h2>
        <p className="ro-lead">
          Recriado aqui em código a partir do design do produto: fundo preto de arena, verde-limão
          para ação, ouro para as moedas. Cada peça abaixo é HTML/CSS real.
        </p>
      </Reveal>

      {/* TIPOGRAFIA */}
      <Reveal className="ro-block">
        <div className="ro-block-head">
          <h3>Tipografia</h3>
          <span>Display esportivo em itálico + sans limpa no corpo.</span>
        </div>
        <div className="ro-type-specimen">
          <span className="ro-type-big">Race On.</span>
          <div className="ro-type-glyphs">
            <span>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</span>
            <span>a b c d e f g h i j k l m n o p q r s t u v w x y z</span>
            <span>0 1 2 3 4 5 6 7 8 9 &nbsp; &amp; @ # % $ ( ) ? ! → ç ã õ á é</span>
          </div>
        </div>
        <div className="ro-type-weights">
          {pesos.map((p) => (
            <div className="ro-type-weight" key={p.w}>
              <span className="ro-type-weight-label">{p.label}</span>
              <span
                className="ro-type-weight-sample"
                style={{ fontWeight: p.w, fontStyle: p.italic ? "italic" : "normal", fontFamily: p.italic ? "'Saira', sans-serif" : undefined }}
              >
                {p.sample}
              </span>
              <span className="ro-type-weight-num">{p.w}</span>
            </div>
          ))}
        </div>
        <div className="ro-type-scale">
          {escala.map((s) => (
            <div className="ro-type-scale-row" key={s.spec}>
              <span className="ro-type-scale-spec">{s.spec}</span>
              <span
                className="ro-type-scale-name"
                style={{ fontSize: s.px, fontWeight: s.weight, fontStyle: s.italic ? "italic" : "normal", fontFamily: s.italic ? "'Saira', sans-serif" : undefined }}
              >
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* PALETA */}
      <Reveal className="ro-block">
        <div className="ro-block-head">
          <h3>Paleta de cores</h3>
          <span>Verde-limão para ação, ouro para valor. Clique pra copiar o HEX.</span>
        </div>
        <p className="ro-group-label">Marca</p>
        <div className="ro-swatches">{marca.map((c) => <Swatch key={c.name} {...c} />)}</div>
        <p className="ro-group-label">Raridades</p>
        <div className="ro-swatches">{raridades.map((c) => <Swatch key={c.name} {...c} />)}</div>
        <p className="ro-group-label">Neutros</p>
        <div className="ro-swatches">{neutros.map((c) => <Swatch key={c.name} {...c} />)}</div>
        <p className="ro-group-label">Semânticas</p>
        <div className="ro-swatches">{semanticas.map((c) => <Swatch key={c.name} {...c} />)}</div>
      </Reveal>

      {/* COMPONENTES */}
      <Reveal className="ro-block">
        <div className="ro-block-head">
          <h3>Componentes</h3>
          <span>Verde-limão só na ação principal; ouro reservado às moedas.</span>
        </div>

        <p className="ro-group-label">Botões</p>
        <div className="ro-row">
          <button className="rob rob-primary">Iniciar atividade</button>
          <button className="rob rob-dark">Começar</button>
          <button className="rob rob-outline">Ver a demo</button>
          <button className="rob rob-ghost">Pular</button>
        </div>

        <p className="ro-group-label">Moedas &amp; raridade</p>
        <div className="ro-row">
          <span className="ro-coin"><i /> 1.240 moedas</span>
          <span className="ro-rar ro-rar-leg">★ Lendária</span>
          <span className="ro-rar ro-rar-ouro">Ouro</span>
          <span className="ro-rar ro-rar-prata">Prata</span>
          <span className="ro-rar ro-rar-bronze">Bronze</span>
        </div>

        <p className="ro-group-label">Dificuldade &amp; status</p>
        <div className="ro-row">
          <span className="ro-tagp ro-tagp-on">Iniciante</span>
          <span className="ro-tagp">Intermediário</span>
          <span className="ro-tagp">Experiente</span>
          <span className="ro-sep" />
          <span className="ro-switch on" aria-hidden="true"><i /></span>
          <span className="ro-switch-lbl">Perfil público</span>
          <span className="ro-switch" aria-hidden="true"><i /></span>
          <span className="ro-switch-lbl">Ocultar percurso</span>
        </div>

        <p className="ro-group-label">Meta do dia</p>
        <div className="ro-goal">
          <div className="ro-goal-head"><strong>8,5k passos</strong><span>de 10.000</span></div>
          <div className="ro-goal-bar"><span style={{ width: "85%" }} /></div>
          <div className="ro-goal-foot">Faltam 500 passos para a meta de hoje</div>
        </div>
      </Reveal>

      {/* LAYOUT */}
      <Reveal className="ro-block">
        <div className="ro-block-head">
          <h3>Layout</h3>
          <span>Escala 4px, raios generosos e breakpoints mobile-first.</span>
        </div>

        <p className="ro-group-label">Espaçamento · base 4px</p>
        <div className="ro-space">
          {espacos.map(([n, px]) => (
            <div className="ro-space-row" key={n}>
              <span className="ro-space-n">{n}</span>
              <span className="ro-space-px">{px}px</span>
              <span className="ro-space-bar" style={{ width: px }} />
            </div>
          ))}
        </div>

        <div className="ro-two">
          <div>
            <p className="ro-group-label">Raio de borda</p>
            <div className="ro-radii">
              {raios.map(([name, px]) => (
                <div className="ro-radius" key={name}>
                  <span className="ro-radius-box" style={{ borderRadius: px > 100 ? 999 : px }} />
                  <b>{name}</b>
                  <span>{px > 100 ? "999px" : px + "px"}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="ro-group-label">Breakpoints</p>
            <div className="ro-breaks">
              {breakpoints.map(([k, v, d]) => (
                <div className="ro-break" key={k}>
                  <b>{k}</b>
                  <span className="ro-break-px">{v}</span>
                  <span className="ro-break-desc">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
