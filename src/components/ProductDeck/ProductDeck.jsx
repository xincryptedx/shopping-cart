import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductDeck.module.css";

const ProductDeck = () => {
  return (
    <section className={styles.ProductDeck}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
};

export default ProductDeck;
