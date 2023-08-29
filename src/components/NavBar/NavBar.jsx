import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <Link to="/">
        <button className={styles.homeBtn}>Home</button>
      </Link>
      <Link to="products">
        <button className={styles.productsBtn}>Shop</button>
      </Link>
      <button className={styles.cartBtn}>Cart</button>
    </nav>
  );
};

export default NavBar;
