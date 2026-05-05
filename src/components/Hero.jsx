import "../styles/components/hero.css";

const WHATSAPP = "5511991517114";

const wppLink = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export default function Hero() {
  return (
    <section className="hero">
      {/* ORBS */}
      <div className="hero__orb hero__orb--lg" />
      <div className="hero__orb hero__orb--sm" />

      {/* TEXTO */}
      <span className="hero__eyebrow">Moda Feminina · Brasil</span>

      <h1 className="hero__title">
        Ateliê <br />
        <em>Ester</em>
      </h1>

      <p className="hero__subtitle">
        Elegância e propósito em cada peça. Feita para a mulher que quer se
        sentir bem todos os dias.
      </p>

      {/* BOTÕES */}
      <div className="hero__actions">
        <a href="#colecao" className="hero__btn hero__btn--primary">
          Ver coleção
        </a>

        <a
          href={wppLink(
            "Olá! Vim pelo site e gostaria de conhecer as peças 🌸",
          )}
          target="_blank"
          rel="noreferrer"
          className="hero__btn hero__btn--outline"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      document.documentElement.style.setProperty("--scroll", y * 0.2 + "px");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
