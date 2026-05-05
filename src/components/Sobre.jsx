import { useState } from "react";
import "../styles/components/sobre.css";

export default function Sobre() {
  const [open, setOpen] = useState(false);

  return (
    <section className={`about ${open ? "open" : ""}`} id="sobre">
      {/* HEADER SEMPRE VISÍVEL */}
      <div className="about__header" onClick={() => setOpen(!open)}>
        <h3>Quem somos</h3>
        <span className="about__icon">{open ? "−" : "+"}</span>
      </div>

      {/* CONTEÚDO EXPANDE */}
      <div className="about__content">
        <div className="about__grid">
          {/* TEXTO */}
          <div className="about__text">
            <h1 className="about__title">
              Somos uma
              <br />
              resposta de
              <br />
              <span className="about__highlight">
                <em>oração</em>
              </span>
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada.
            </p>
          </div>

          {/* IMAGEM */}
          <div className="about__image">
            <img
              src="public/images/atelier.png"
              alt="Ateliê"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
