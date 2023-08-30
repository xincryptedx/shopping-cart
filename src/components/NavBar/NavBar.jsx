import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <Link to="/" className={styles.homeBtn + " " + styles.navBtn}>
        Home
      </Link>
      <Link to="products" className={styles.productsBtn + " " + styles.navBtn}>
        Shop
      </Link>
      <button className={styles.cartBtn + " " + styles.navBtn}>Cart</button>
    </nav>
  );
};

export default NavBar;
