import "../styles/components/product-card.css";

const WHATSAPP = "5511991517114";

const wppLink = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export default function ProductCard({ product }) {
  return (
    <div className="card">

      {/* IMAGE */}
      <div className="card__image">
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="card__photo"
          />
        )}

        {product.tag && (
          <span className="card__tag">
            {product.tag}
          </span>
        )}
      </div>

      {/* BODY */}
      <div className="card__body">

        {/* NOME */}
        <h3 className="card__name">
          {product.name}
        </h3>

        {/* SUBTÍTULO (EX: 2 peças) */}
        {product.subtitle && (
          <span className="card__subtitle">
            {product.subtitle}
          </span>
        )}

        {/* DESCRIÇÃO */}
        {product.desc && (
          <p className="card__desc">
            {product.desc}
          </p>
        )}

        {/* PREÇO */}
        <div className="card__footer">
          <span className="card__price">
            {product.price}
          </span>

          <a
            href={wppLink(
              `Olá! Tenho interesse no ${product.name} (${product.price})`
            )}
            target="_blank"
            rel="noreferrer"
            className="card__btn"
          >
            Comprar
          </a>
        </div>

      </div>
    </div>
  );
}