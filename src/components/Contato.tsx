import Reveal from "./Reveal";

export default function Contato() {
  return (
    <section id="contato" className="contact">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 className="section-title">Vamos conversar</h2>
          <span className="section-num">07</span>
        </Reveal>
        <Reveal>
          <p className="contact-lead">
            Busco oportunidades e projetos na interseção entre Product Design, Design Engineering e
            Inteligência Artificial.
          </p>
          <p>
            Se você está construindo produtos em que design e tecnologia trabalham juntos de verdade,
            me manda uma mensagem.
          </p>
        </Reveal>
        <Reveal className="contact-links" delay={0.1}>
          <a
            className="contact-primary"
            href="mailto:jessyln29@gmail.com?subject=Oportunidade%20-%20Product%20Design%20%2B%20IA"
          >
            Enviar e-mail
          </a>
          <a
            href="https://www.linkedin.com/in/j%C3%A9ssica-nascimento-954b43120/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://wa.me/5531984215541" target="_blank" rel="noopener noreferrer">
            WhatsApp · (31) 9.8421-5541
          </a>
        </Reveal>
      </div>
    </section>
  );
}
