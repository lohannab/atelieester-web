import FadeIn from "./FadeIn";

/**
 * SEÇÃO EMOCIONAL
 * Frase de impacto + micro-benefícios
 */
export default function Emotional() {
  return (
    <section className="emotional">
      {/* FRASE */}
      <FadeIn>
        <p className="emotional__quote">
          “Vista-se de propósito: vista-se de Ateliê Ester! ”
        </p>
      </FadeIn>

      {/* PILLS */}
      <FadeIn delay={0.2}>
        <div className="emotional__pills">
          <span className="emotional__pill emotional__pill--bordered">
            ✦ Você não se veste por acaso
          </span>

          <span className="emotional__pill emotional__pill--bordered">
            ✦ Existe propósito sobre quem você é
          </span>

          <span className="emotional__pill">
            ✦ Viva sua essência maior (MT 22)
          </span>
        </div>
      </FadeIn>
    </section>
  );
}
