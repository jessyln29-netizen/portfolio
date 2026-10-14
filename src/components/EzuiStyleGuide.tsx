import { useState } from "react";
import Reveal from "./Reveal";

const escala = [
  { spec: "heading-1 · 56 / 700", name: "Título de página", px: 40, weight: 700 },
  { spec: "heading-4 · 32 / 700", name: "Título de tela", px: 30, weight: 700 },
  { spec: "heading-6 · 20 / 700", name: "Título de card", px: 20, weight: 700 },
  { spec: "body-16 · 16 / 400", name: "Texto de corpo", px: 16, weight: 400 },
  { spec: "body-14 · 14 / 500", name: "Tabelas e rótulos", px: 14, weight: 500 },
  { spec: "overline-10 · 10 / 600", name: "OVERLINE", px: 11, weight: 600 },
];

const azul = [
  { name: "blue-100", hex: "#ECF1FF", light: true },
  { name: "blue-200", hex: "#D9E3FF", light: true },
  { name: "blue-400", hex: "#8CACFF" },
  { name: "blue-500", hex: "#6691FF", note: "brand-primary-base" },
  { name: "blue-600", hex: "#4075FF", note: "hover" },
  { name: "blue-700", hex: "#245AE5", note: "pressionado" },
];
const neutros = [
  { name: "neutral-50", hex: "#FFFFFF", note: "Card", light: true },
  { name: "Canvas", hex: "#EBEBEB", note: "Fundo do app", light: true },
  { name: "neutral-300", hex: "#7C7C83", note: "Texto secundário" },
  { name: "neutral-500", hex: "#4B4B53", note: "text-strong" },
  { name: "neutral-700", hex: "#19191C", note: "Fundo no dark" },
];
const feedback = [
  { name: "Success", hex: "#39DDA2", note: "Venda fechada, resolvida" },
  { name: "Information", hex: "#6691FF", note: "Em negociação" },
  { name: "Warning", hex: "#FFD361", note: "Retornar, aguardando" },
  { name: "Error", hex: "#FF607D", note: "Perdida, trava" },
];

const espacos: [string, number][] = [
  ["1", 4], ["2", 8], ["3", 12], ["4", 16], ["6", 24], ["10", 40], ["12", 48],
];
const raios: [string, number][] = [
  ["botão", 6], ["input", 8], ["card", 12], ["modal", 16], ["pill", 999],
];

const lacunas = [
  "O fundo cinza do app (#EBEBEB) estava escrito direto no código, sem token.",
  "A fonte dos títulos (Vinila) não era carregada, e os headings caíam no fallback.",
  "Texto de 12px era usado no produto, mas não existia na escala de tipografia.",
  "Componentes usavam classes sem token definido (text-dark, bg-soft, bg-strong).",
  "Status de pedido usavam cores fora da paleta. Propus remapear tudo para Brand, Feedback e Neutral.",
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
      <span className="en-swatch-chip" style={{ background: hex, border: light ? "1px solid #DFDFE0" : "none" }} />
      <span className="en-swatch-info">
        <strong>{name}</strong>
        {note && <span className="en-swatch-note">{note}</span>}
        <span className="en-swatch-hex">{copied ? "Copiado!" : hex}</span>
      </span>
    </button>
  );
}

export default function EzuiStyleGuide() {
  return (
    <div className="en-ds ez-ds">
      <Reveal className="en-head">
        <span className="en-eyebrow">Design System · EZUI v2</span>
        <h2 className="en-title">O sistema por trás do Ezcall</h2>
        <p className="en-lead">
          O protótipo foi construído sobre o EZUI v2, o design system da EzPag: azul como marca,
          cores de feedback para o desfecho de cada ligação e Inter no corpo. Recriei aqui em código
          os tokens que o Ezcall usa. Cada peça abaixo é HTML/CSS real.
        </p>
      </Reveal>

      <Reveal className="en-block">
        <div className="en-block-head">
          <h3>Tipografia</h3>
          <span>Vinila Bold nos títulos e Inter no corpo. Aqui, Inter aparece nos dois.</span>
        </div>
        <div className="en-type-specimen">
          <span className="en-type-big">Inter.</span>
          <div className="en-type-glyphs">
            <span>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</span>
            <span>a b c d e f g h i j k l m n o p q r s t u v w x y z</span>
            <span>0 1 2 3 4 5 6 7 8 9 &nbsp; US$ 1.298 · 4min32 · 25%</span>
          </div>
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

      <Reveal className="en-block">
        <div className="en-block-head">
          <h3>Paleta de cores</h3>
          <span>Azul é a marca; o feedback dá cor ao desfecho. Clique para copiar o HEX.</span>
        </div>
        <p className="en-group-label">Brand primary</p>
        <div className="en-swatches">{azul.map((c) => <Swatch key={c.name} {...c} />)}</div>
        <p className="en-group-label">Neutros e superfícies</p>
        <div className="en-swatches">{neutros.map((c) => <Swatch key={c.name} {...c} />)}</div>
        <p className="en-group-label">Feedback</p>
        <div className="en-swatches">{feedback.map((c) => <Swatch key={c.name} {...c} />)}</div>
      </Reveal>

      <Reveal className="en-block">
        <div className="en-block-head">
          <h3>Componentes</h3>
          <span>Os mesmos estados do EZUI, aplicados às telas do Ezcall.</span>
        </div>

        <p className="en-group-label">Botões · radius 6px</p>
        <div className="en-row">
          <button className="ezb ezb-primary">Exportar</button>
          <button className="ezb ezb-secondary">Copiar transcrição</button>
          <button className="ezb ezb-tertiary">Limpar filtro</button>
          <button className="ezb ezb-success">Confirmar</button>
          <button className="ezb ezb-danger">Encerrar</button>
        </div>

        <p className="en-group-label">Badges de desfecho</p>
        <div className="en-row">
          <span className="ezbadge ezbadge-success">Venda fechada</span>
          <span className="ezbadge ezbadge-info">Em negociação</span>
          <span className="ezbadge ezbadge-warning">Retornar</span>
          <span className="ezbadge ezbadge-error">Perdida</span>
          <span className="ezbadge ezbadge-neutral">Sem resposta</span>
        </div>

        <p className="en-group-label">Campos · default, foco e inválido</p>
        <div className="ez-fields">
          <label className="ezfield">
            <span>Buscar</span>
            <input type="text" defaultValue="Buscar em transcrições" readOnly />
          </label>
          <label className="ezfield ezfield-focus">
            <span>Atendente</span>
            <input type="text" defaultValue="Diego" readOnly />
          </label>
          <label className="ezfield ezfield-error">
            <span>Data</span>
            <input type="text" defaultValue="31/02/2026" readOnly />
            <em>Data inválida</em>
          </label>
        </div>

        <p className="en-group-label">Indicadores</p>
        <div className="ez-meters">
          <div className="ez-meter"><span>Tempo de fala · atendente</span><i><b style={{ width: "71%" }} /></i><strong>71%</strong></div>
          <div className="ez-meter ez-meter-success"><span>Taxa de quebra da objeção</span><i><b style={{ width: "50%" }} /></i><strong>50%</strong></div>
          <div className="ez-switches">
            <span className="ez-switch on" aria-label="Ligado" />
            <span className="ez-switch" aria-label="Desligado" />
          </div>
        </div>
      </Reveal>

      <Reveal className="en-block">
        <div className="en-block-head">
          <h3>Layout</h3>
          <span>Escala de 4px, controles de 40 a 56px e cantos por hierarquia.</span>
        </div>
        <div className="en-two">
          <div>
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
          </div>
          <div>
            <p className="en-group-label">Raio de borda</p>
            <div className="en-radii">
              {raios.map(([name, px]) => (
                <div className="en-radius" key={name}>
                  <span className="en-radius-box" style={{ borderRadius: px }} />
                  <b>{name}</b>
                  <span>{px > 100 ? "999px" : px + "px"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="en-block">
        <div className="en-block-head">
          <h3>O que levantei no sistema</h3>
          <span>Ao montar as telas, documentei para o time de design o que ainda vivia fora dos tokens.</span>
        </div>
        <ul className="ez-gaps">
          {lacunas.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
