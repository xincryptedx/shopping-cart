import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <Link to="/" className={styles.homeBtn}>
        <button>Home</button>
      </Link>
      <Link to="products" className={styles.productsBtn}>
        <button>Shop</button>
      </Link>
      <button className={styles.cartBtn}>Cart</button>
    </nav>
  );
};

export default NavBar;
