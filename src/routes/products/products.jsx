import PropTypes from "prop-types";
import styles from "./products.module.css";

const Products = () => {
  return (
    <div className={styles.productsRoute}>
      <p>This is the products route!</p>
    </div>
  );
};

Products.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.instanceOf(Error),
  loading: PropTypes.bool.isRequired,
};

export default Products;
