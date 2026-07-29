import Reveal from "./Reveal";

export type AppCtaProps = {
  image: string;
  url: string;
  alt: string;
  accent?: string;
  accentText?: string;
  label?: string;
};

export default function AppCta({
  image,
  url,
  alt,
  accent = "#5B0CD8",
  accentText = "#ffffff",
  label = "Testar o app",
}: AppCtaProps) {
  return (
    <Reveal className="app-cta">
      <a className="app-cta-banner" href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={alt} />
      </a>
      <a
        className="app-cta-btn"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ background: accent, color: accentText }}
      >
        {label}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7M9 7h8v8" />
        </svg>
      </a>
    </Reveal>
  );
}
