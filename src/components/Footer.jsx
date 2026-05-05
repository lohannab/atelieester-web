import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "../styles/components/footer.css";

const WHATSAPP = "5511991517114";

const wppLink = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export default function Footer() {
  return (
    <footer className="footer-line">

      <div className="footer-line__content">

        {/* MARCA */}
        <span className="footer-line__text">
          Ateliê Ester - Moda feminina com propósito
        </span>

        <span className="footer-line__divider">|</span>

        {/* INSTAGRAM */}
        <a
          href="https://instagram.com/atelie_.ester"
          target="_blank"
          rel="noreferrer"
          className="footer-line__link"
        >
          <FaInstagram /> Instagram
        </a>

        <span className="footer-line__divider">|</span>

        {/* WHATSAPP */}
        <a
          href={wppLink("Oie 🌸 Vim pelo site")}
          target="_blank"
          rel="noreferrer"
          className="footer-line__link"
        >
          <FaWhatsapp /> WhatsApp
        </a>

        <span className="footer-line__divider">|</span>

        {/* CRÉDITO */}
        <a
          href="https://lohannab.github.io/portfolio/"
          target="_blank"
          rel="noreferrer"
          className="footer-line__credit"
        >
          Desenvolvido por Lohanna B.
        </a>

      </div>

    </footer>
  );
}