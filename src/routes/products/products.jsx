import SortAndFilter from "../../components/SortAndFilter/SortAndFilter";
import styles from "./products.module.css";

const Products = () => {
  return (
    <div className={styles.productsRoute}>
      <SortAndFilter />
      <p>This is the products route!</p>
    </div>
  );
};

export default Products;
