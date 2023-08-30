import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <Link to="/" className={styles.homeBtn}>
        Home
      </Link>
      <Link to="products" className={styles.productsBtn}>
        Shop
      </Link>
      <button className={styles.cartBtn}>Cart</button>
    </nav>
  );
};

export default NavBar;
