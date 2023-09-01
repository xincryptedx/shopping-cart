import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <Link to="products" className={styles.productsBtn + " " + styles.navBtn}>
        Shop
      </Link>
      <Link to="/" className={styles.homeBtn + " " + styles.navBtn}>
        Home
      </Link>
      <button className={styles.cartBtn + " " + styles.navBtn}>Cart</button>
    </nav>
  );
};

export default NavBar;
