import Reveal from "./Reveal";
import cta from "../assets/en-cta.webp";

const APP_URL = "https://jessyln29-netizen.github.io/envia-plus/app/";

export default function EnviaAppCta() {
  return (
    <Reveal className="en-cta">
      <a className="en-cta-banner" href={APP_URL} target="_blank" rel="noopener noreferrer">
        <img
          src={cta}
          alt="Conheça o app Envia+: transferências internacionais simples, seguras e transparentes"
        />
      </a>
      <a className="en-cta-btn" href={APP_URL} target="_blank" rel="noopener noreferrer">
        Testar o app
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7M9 7h8v8" />
        </svg>
      </a>
    </Reveal>
  );
}
