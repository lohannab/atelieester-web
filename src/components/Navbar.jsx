import { useEffect, useState } from "react";
import "../styles/components/navbar.css";

const WHATSAPP = "5511991517114";

const wppLink = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  /**
   * Detecta scroll da página
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      
      {/* LOGO */}
      <span className="navbar__logo">Ateliê Ester</span>

      {/* LINKS */}
      <div className="navbar__links">
        <a href="#colecao" className="navbar__link">
          Coleção
        </a>

       <a href="#sobre" className="navbar__link">Sobre</a>

        {/* BOTÃO WHATSAPP */}
        <a
          href={wppLink("Olá! Vim pelo site do Ateliê Ester 🌸")}
          target="_blank"
          rel="noreferrer"
          className="navbar__btn"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
}