import styles from "./ShoppingCart.module.css";
import cancelIcon from "../../assets/cancel.svg";
import PropTypes from "prop-types";

const ShoppingCart = ({ setNavLinksOpen }) => {
  return (
    <aside>
      <img
        src={cancelIcon}
        alt="cancel button"
        className={styles.cancelBtn}
        onClick={() => setNavLinksOpen(false)}
      />
      <div>This is a shopping cart div!</div>
    </aside>
  );
};

ShoppingCart.propTypes = {
  setNavLinksOpen: PropTypes.func.isRequired,
};

export default ShoppingCart;
