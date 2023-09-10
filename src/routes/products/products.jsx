import ProductDeck from "../../components/ProductDeck/ProductDeck";
import SortAndFilter from "../../components/SortAndFilter/SortAndFilter";
import styles from "./products.module.css";

const Products = () => {
  return (
    <div className={styles.productsRoute}>
      <SortAndFilter />
      <ProductDeck />
    </div>
  );
};

export default Products;
