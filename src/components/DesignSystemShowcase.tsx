import { useState } from "react";
import Reveal from "./Reveal";

const pesos = [
  { w: 400, label: "Regular · Corpo", sample: "Arraste, escolha, mude sem estresse" },
  { w: 600, label: "Semibold · Rótulos · Botões", sample: "Selecione a transportadora" },
  { w: 700, label: "Bold · Títulos de seção", sample: "Resumo e Pagamento" },
  { w: 800, label: "Extrabold · Display · Hero", sample: "Simples, sem surpresas" },
];

const escala = [
  { spec: "48 / 800", name: "Display & Hero", px: 42, weight: 800 },
  { spec: "30 / 700", name: "Título de seção", px: 28, weight: 700 },
  { spec: "19 / 600", name: "Subtítulo & card", px: 19, weight: 600 },
  { spec: "15 / 400", name: "Texto de corpo", px: 15, weight: 400 },
  { spec: "11 / 600", name: "Rótulo · eyebrow · overline", px: 12, weight: 600 },
];

const marca = [
  { name: "Verde Orizon", hex: "#7FBA00", note: "Ações primárias, links, sucesso" },
  { name: "Verde Claro", hex: "#9DD629", note: "Hover, gradientes e realces" },
  { name: "Verde Escuro", hex: "#5E8A00", note: "Estados pressionados" },
];
const neutros = [
  { name: "Preto Profundo", hex: "#0D0D0D" },
  { name: "Grafite", hex: "#555555" },
  { name: "Cinza Névoa", hex: "#E8E8E8" },
  { name: "Fundo Claro", hex: "#F5F5F5" },
];
const semanticas = [
  { name: "Sucesso", hex: "#7FBA00" },
  { name: "Atenção", hex: "#D97706" },
  { name: "Erro", hex: "#DC2626" },
  { name: "Info", hex: "#0284C7" },
];

const espacos: [number, number][] = [
  [1, 4], [2, 8], [3, 12], [4, 16], [5, 20], [6, 24],
  [8, 32], [10, 40], [12, 48], [16, 64], [20, 80], [24, 96],
];
const raios: [string, number][] = [
  ["sm", 6], ["md", 8], ["lg", 10], ["xl", 14], ["2xl", 18], ["full", 999],
];
const breakpoints: [string, string, string][] = [
  ["sm", "640px", "Telefone landscape — 1 coluna vira 2"],
  ["md", "768px", "Tablet — nav completa, sidebar visível"],
  ["lg", "1024px", "Desktop — grids de 3 colunas"],
  ["xl", "1280px", "Widescreen — contêiner no máximo"],
];

function Swatch({
  name,
  hex,
  note,
  dark,
}: {
  name: string;
  hex: string;
  note?: string;
  dark?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(hex).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <button className="ds-swatch" onClick={copy} title={`Copiar ${hex}`}>
      <span className="ds-swatch-chip" style={{ background: hex }}>
        {dark && <span className="ds-swatch-dot" />}
      </span>
      <span className="ds-swatch-info">
        <strong>{name}</strong>
        {note && <span className="ds-swatch-note">{note}</span>}
        <span className="ds-swatch-hex">{copied ? "Copiado!" : hex}</span>
      </span>
    </button>
  );
}

export default function DesignSystemShowcase() {
  return (
    <div className="oz-ds">
      <Reveal className="ds-head">
        <span className="ds-eyebrow">Design System · tokens.ts</span>
        <h2 className="ds-title">Style guide, ao vivo</h2>
        <p className="ds-lead">
          Não é print: cada peça abaixo é HTML/CSS real, feita a partir da mesma fonte de tokens
          que roda no produto. É assim que garanto que landing, dashboard e checkout falam a
          mesma língua.
        </p>
      </Reveal>

      {/* TIPOGRAFIA */}
      <Reveal className="ds-block">
        <div className="ds-block-head">
          <h3>Tipografia</h3>
          <span>Poppins — do display de peso 800 ao corpo em 400.</span>
        </div>
        <div className="ds-type-specimen">
          <span className="ds-type-big">Poppins.</span>
          <div className="ds-type-glyphs">
            <span>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</span>
            <span>a b c d e f g h i j k l m n o p q r s t u v w x y z</span>
            <span>0 1 2 3 4 5 6 7 8 9 &nbsp; &amp; @ # % $ ( ) ? ! → ç ã õ á é</span>
          </div>
        </div>
        <div className="ds-type-weights">
          {pesos.map((p) => (
            <div className="ds-type-weight" key={p.w}>
              <span className="ds-type-weight-label">{p.label}</span>
              <span className="ds-type-weight-sample" style={{ fontWeight: p.w }}>
                {p.sample}
              </span>
              <span className="ds-type-weight-num">{p.w}</span>
            </div>
          ))}
        </div>
        <div className="ds-type-scale">
          {escala.map((s) => (
            <div className="ds-type-scale-row" key={s.spec}>
              <span className="ds-type-scale-spec">{s.spec}</span>
              <span
                className="ds-type-scale-name"
                style={{ fontSize: s.px, fontWeight: s.weight }}
              >
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* PALETA */}
      <Reveal className="ds-block">
        <div className="ds-block-head">
          <h3>Paleta de cores</h3>
          <span>Verde só onde há ação ou sucesso. Clique num tom pra copiar o HEX.</span>
        </div>
        <p className="ds-group-label">Marca</p>
        <div className="ds-swatches">
          {marca.map((c) => (
            <Swatch key={c.hex + c.name} {...c} />
          ))}
        </div>
        <p className="ds-group-label">Neutros</p>
        <div className="ds-swatches">
          {neutros.map((c) => (
            <Swatch key={c.name} {...c} dark={c.hex === "#F5F5F5" || c.hex === "#E8E8E8"} />
          ))}
        </div>
        <p className="ds-group-label">Semânticas</p>
        <div className="ds-swatches">
          {semanticas.map((c) => (
            <Swatch key={c.name} {...c} />
          ))}
        </div>
      </Reveal>

      {/* COMPONENTES */}
      <Reveal className="ds-block">
        <div className="ds-block-head">
          <h3>Componentes</h3>
          <span>Botões, selos, campos e overlays — verde só na ação principal.</span>
        </div>

        <p className="ds-group-label">Botões</p>
        <div className="ds-row">
          <button className="dsb dsb-primary">Confirmar</button>
          <button className="dsb dsb-outline">Cancelar</button>
          <button className="dsb dsb-secondary">Secundário</button>
          <button className="dsb dsb-ghost">Ghost</button>
          <button className="dsb dsb-danger">Cancelar plano</button>
          <button className="dsb dsb-dark">Ver detalhes</button>
        </div>

        <p className="ds-group-label">Selos de plano &amp; status</p>
        <div className="ds-row">
          <span className="dsbadge dsbadge-free">Grátis</span>
          <span className="dsbadge dsbadge-trial">Trial</span>
          <span className="dsbadge dsbadge-pro">PRO</span>
          <span className="ds-sep" />
          <span className="dsstatus"><i className="s-draft" />Rascunho</span>
          <span className="dsstatus"><i className="s-quote" />Cotando</span>
          <span className="dsstatus"><i className="s-ok" />Confirmada</span>
          <span className="dsstatus"><i className="s-done" />Concluída</span>
        </div>

        <p className="ds-group-label">Campos de formulário</p>
        <div className="ds-fields">
          <label className="dsfield">
            <span>Email</span>
            <input type="text" defaultValue="jessica@orizon.com" readOnly />
          </label>
          <label className="dsfield dsfield-focus">
            <span>Senha</span>
            <input type="password" defaultValue="secreta123" readOnly />
            <em className="dsfield-hint ok">Foco com anel verde (ring / primary)</em>
          </label>
          <label className="dsfield dsfield-error">
            <span>Endereço de origem</span>
            <input type="text" defaultValue="Rua" readOnly />
            <em className="dsfield-hint err">Informe um endereço com ao menos 5 caracteres.</em>
          </label>
        </div>

        <p className="ds-group-label">Seletor de pagamento</p>
        <div className="ds-pay">
          <span className="dspay dspay-on">Cartão</span>
          <span className="dspay">Pix</span>
          <span className="dspay">Boleto</span>
        </div>
      </Reveal>

      {/* LAYOUT */}
      <Reveal className="ds-block">
        <div className="ds-block-head">
          <h3>Layout</h3>
          <span>Escala 4px, raios derivados de um único --radius, e breakpoints mobile-first.</span>
        </div>

        <p className="ds-group-label">Espaçamento — base 4px</p>
        <div className="ds-space">
          {espacos.map(([n, px]) => (
            <div className="ds-space-row" key={n}>
              <span className="ds-space-n">{n}</span>
              <span className="ds-space-px">{px}px</span>
              <span className="ds-space-bar" style={{ width: px }} />
            </div>
          ))}
        </div>

        <div className="ds-two">
          <div>
            <p className="ds-group-label">Raio de borda</p>
            <div className="ds-radii">
              {raios.map(([name, px]) => (
                <div className="ds-radius" key={name}>
                  <span
                    className="ds-radius-box"
                    style={{ borderRadius: px > 100 ? 999 : px }}
                  />
                  <b>{name}</b>
                  <span>{px > 100 ? "999px" : px + "px"}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="ds-group-label">Elevação</p>
            <div className="ds-elev">
              <div className="ds-elev-card e1">Sombra sm<span>Cards em repouso, inputs</span></div>
              <div className="ds-elev-card e2">Sombra md<span>Cards em hover, painéis</span></div>
              <div className="ds-elev-card e3">Sombra lg<span>Modais, dropdowns, popovers</span></div>
            </div>
          </div>
        </div>

        <p className="ds-group-label">Breakpoints</p>
        <div className="ds-breaks">
          {breakpoints.map(([k, v, d]) => (
            <div className="ds-break" key={k}>
              <b>{k}</b>
              <span className="ds-break-px">{v}</span>
              <span className="ds-break-desc">{d}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
