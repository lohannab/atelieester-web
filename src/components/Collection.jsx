import FadeIn from "./FadeIn";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import "../styles/components/collection.css";

/**
 *  SEÇÃO DE COLEÇÃO
 */
export default function Collection() {
  return (
    <section id="colecao" className="collection">

      {/* HEADER */}
      <FadeIn>
        <div className="collection__header">
          <span className="collection__eyebrow">Nosso catálogo</span>

          <h2 className="collection__title">Elegância e versatilidade com propósito</h2>

          <div className="collection__line" />
        </div>
      </FadeIn>

      {/* GRID */}
      <div className="collection__grid">
        {products.map((product, index) => (
          <FadeIn key={product.id} delay={index * 0.1}>
            <ProductCard product={product} />
          </FadeIn>
        ))}
      </div>

      {/* CTA */}
      <FadeIn delay={0.3}>
        <div className="collection__cta">
          <a
  href="https://wa.me/5511991517114?text=Olá!%20Quero%20ver%20o%20catálogo%20do%20Ateliê%20Ester%20🌸"
  target="_blank"
  rel="noreferrer"
  className="collection__button"
>
  Ver mais peças
</a>
        </div>
      </FadeIn>

    </section>
  );
}