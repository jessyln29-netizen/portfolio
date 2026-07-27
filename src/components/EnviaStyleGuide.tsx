import { useState } from "react";
import Reveal from "./Reveal";

const pesos = [
  { w: 400, label: "Regular · Corpo", sample: "Envie dinheiro em poucos minutos" },
  { w: 500, label: "Medium · Apoio", sample: "Taxa de câmbio atualizada agora" },
  { w: 700, label: "Bold · Títulos", sample: "Calculadora de transferência" },
  { w: 800, label: "Extrabold · Display", sample: "Envie mais, pague menos", big: true },
];

const escala = [
  { spec: "44 / 800", name: "Display & Hero", px: 38, weight: 800 },
  { spec: "30 / 700", name: "Título de seção", px: 28, weight: 700 },
  { spec: "20 / 600", name: "Subtítulo & card", px: 20, weight: 600 },
  { spec: "16 / 400", name: "Texto de corpo", px: 16, weight: 400 },
  { spec: "12 / 600", name: "Rótulo · eyebrow", px: 12, weight: 600 },
];

const marca = [
  { name: "Roxo 700", hex: "#5B0CD8", note: "Ações primárias e marca" },
  { name: "Roxo Light", hex: "#7B3DFF", note: "Hover e realces" },
  { name: "Roxo Dark", hex: "#3D0099", note: "Pressionado e gradiente" },
  { name: "Coral 500", hex: "#FB6048", note: "Acento e destaque" },
];
const neutros = [
  { name: "Neutro 950", hex: "#111118" },
  { name: "Dark 2", hex: "#1C1C27" },
  { name: "Cinza", hex: "#6B7280" },
  { name: "Fundo", hex: "#F6F6FB", light: true },
];
const semanticas = [
  { name: "Concluída", hex: "#17803D" },
  { name: "Em espera", hex: "#B7791F" },
  { name: "Erro", hex: "#C0362C" },
  { name: "Info", hex: "#2563EB" },
];

const espacos: [number, number][] = [
  [1, 4], [2, 8], [3, 12], [4, 16], [6, 24], [8, 32], [10, 40], [12, 48], [16, 64], [20, 80], [24, 96],
];
const raios: [string, number][] = [
  ["sm", 10], ["md", 14], ["lg", 20], ["xl", 24], ["pill", 100], ["full", 999],
];
const breakpoints: [string, string, string][] = [
  ["sm", "640px", "Layout do app cabe no telefone"],
  ["md", "768px", "Landing, nav completa"],
  ["lg", "1024px", "Grids em 3 colunas"],
  ["xl", "1280px", "Widescreen da landing"],
];

function Swatch({ name, hex, note, light }: { name: string; hex: string; note?: string; light?: boolean }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(hex).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <button className="en-swatch" onClick={copy} title={`Copiar ${hex}`}>
      <span className="en-swatch-chip" style={{ background: hex, border: light ? "1px solid #E4E4EC" : "none" }} />
      <span className="en-swatch-info">
        <strong>{name}</strong>
        {note && <span className="en-swatch-note">{note}</span>}
        <span className="en-swatch-hex">{copied ? "Copiado!" : hex}</span>
      </span>
    </button>
  );
}

export default function EnviaStyleGuide() {
  return (
    <div className="en-ds">
      <Reveal className="en-head">
        <span className="en-eyebrow">Design System · Envia+</span>
        <h2 className="en-title">Style guide, ao vivo</h2>
        <p className="en-lead">
          Recriado aqui em código a partir dos tokens do produto: roxo como marca, coral como acento
          e Inter em toda a hierarquia. Cada peça abaixo é HTML/CSS real.
        </p>
      </Reveal>

      {/* TIPOGRAFIA */}
      <Reveal className="en-block">
        <div className="en-block-head">
          <h3>Tipografia</h3>
          <span>Inter, do display 800 ao corpo em 400.</span>
        </div>
        <div className="en-type-specimen">
          <span className="en-type-big">Inter.</span>
          <div className="en-type-glyphs">
            <span>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</span>
            <span>a b c d e f g h i j k l m n o p q r s t u v w x y z</span>
            <span>0 1 2 3 4 5 6 7 8 9 &nbsp; &amp; @ # % $ ( ) ? ! → ç ã õ á é</span>
          </div>
        </div>
        <div className="en-type-weights">
          {pesos.map((p) => (
            <div className="en-type-weight" key={p.w}>
              <span className="en-type-weight-label">{p.label}</span>
              <span className="en-type-weight-sample" style={{ fontWeight: p.w }}>
                {p.sample}
              </span>
              <span className="en-type-weight-num">{p.w}</span>
            </div>
          ))}
        </div>
        <div className="en-type-scale">
          {escala.map((s) => (
            <div className="en-type-scale-row" key={s.spec}>
              <span className="en-type-scale-spec">{s.spec}</span>
              <span className="en-type-scale-name" style={{ fontSize: s.px, fontWeight: s.weight }}>
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* PALETA */}
      <Reveal className="en-block">
        <div className="en-block-head">
          <h3>Paleta de cores</h3>
          <span>Roxo é a marca; coral é o acento. Clique pra copiar o HEX.</span>
        </div>
        <p className="en-group-label">Marca</p>
        <div className="en-swatches">{marca.map((c) => <Swatch key={c.name} {...c} />)}</div>
        <p className="en-group-label">Neutros</p>
        <div className="en-swatches">{neutros.map((c) => <Swatch key={c.name} {...c} />)}</div>
        <p className="en-group-label">Status de transferência</p>
        <div className="en-swatches">{semanticas.map((c) => <Swatch key={c.name} {...c} />)}</div>
      </Reveal>

      {/* COMPONENTES */}
      <Reveal className="en-block">
        <div className="en-block-head">
          <h3>Componentes</h3>
          <span>Roxo na ação principal; coral só para destaque pontual.</span>
        </div>

        <p className="en-group-label">Botões</p>
        <div className="en-row">
          <button className="enb enb-primary">Iniciar envio</button>
          <button className="enb enb-coral">Convidar amigos</button>
          <button className="enb enb-dark">Acessar conta</button>
          <button className="enb enb-outline">Ver todas</button>
          <button className="enb enb-ghost">Cancelar</button>
        </div>

        <p className="en-group-label">Conversor de câmbio</p>
        <div className="en-fx">
          <span className="en-fx-flag" aria-hidden="true">🇺🇸</span>
          <div className="en-fx-rate">
            <span>Taxa de câmbio</span>
            <strong>1 USD = 5,4981 BRL</strong>
          </div>
          <span className="en-fx-swap" aria-hidden="true">⇄</span>
          <span className="en-fx-flag" aria-hidden="true">🇧🇷</span>
        </div>

        <p className="en-group-label">Status de transferência</p>
        <div className="en-row">
          <span className="ent ent-wait">Em espera</span>
          <span className="ent ent-done">Concluída</span>
          <span className="ent ent-err">Erro</span>
          <span className="en-sep" />
          <span className="en-amount">
            <strong>$31,20</strong>
            <em>R$ 100,00</em>
          </span>
        </div>

        <p className="en-group-label">Campos de formulário</p>
        <div className="en-fields">
          <label className="enfield">
            <span>Email</span>
            <input type="text" defaultValue="felipe.lopez@gmail.com" readOnly />
          </label>
          <label className="enfield enfield-focus">
            <span>Valor a enviar (USD)</span>
            <input type="text" defaultValue="$ 31,20" readOnly />
            <em className="enfield-hint">Foco com anel roxo (ring / primary)</em>
          </label>
        </div>
      </Reveal>

      {/* LAYOUT */}
      <Reveal className="en-block">
        <div className="en-block-head">
          <h3>Layout</h3>
          <span>Escala 4px, cantos generosos e breakpoints mobile-first.</span>
        </div>

        <p className="en-group-label">Espaçamento, base 4px</p>
        <div className="en-space">
          {espacos.map(([n, px]) => (
            <div className="en-space-row" key={n}>
              <span className="en-space-n">{n}</span>
              <span className="en-space-px">{px}px</span>
              <span className="en-space-bar" style={{ width: px }} />
            </div>
          ))}
        </div>

        <div className="en-two">
          <div>
            <p className="en-group-label">Raio de borda</p>
            <div className="en-radii">
              {raios.map(([name, px]) => (
                <div className="en-radius" key={name}>
                  <span className="en-radius-box" style={{ borderRadius: px > 100 ? 999 : px }} />
                  <b>{name}</b>
                  <span>{px > 100 ? "999px" : px + "px"}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="en-group-label">Breakpoints</p>
            <div className="en-breaks">
              {breakpoints.map(([k, v, d]) => (
                <div className="en-break" key={k}>
                  <b>{k}</b>
                  <span className="en-break-px">{v}</span>
                  <span className="en-break-desc">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
