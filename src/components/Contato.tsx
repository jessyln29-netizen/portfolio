import Reveal from "./Reveal";

export default function Contato() {
  return (
    <section id="contato" className="contact">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 className="section-title">Vamos conversar</h2>
          <span className="section-num">06</span>
        </Reveal>
        <Reveal>
          <p>
            Aberta a oportunidades de Product Owner ou Product Design em times que valorizam tanto a
            visão de negócio quanto a experiência de quem usa o produto.
          </p>
        </Reveal>
        <Reveal className="contact-links" delay={0.1}>
          <a href="mailto:jessyln29@gmail.com">jessyln29@gmail.com</a>
          <a href="https://wa.me/5531984215541" target="_blank" rel="noopener noreferrer">
            WhatsApp · (31) 9.8421-5541
          </a>
          <a
            href="https://www.linkedin.com/in/j%C3%A9ssica-nascimento-954b43120/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </Reveal>
      </div>
    </section>
  );
}
