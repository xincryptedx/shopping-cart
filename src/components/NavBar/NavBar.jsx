import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logoSmall from "../../assets/logoIconSmall.svg";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <Link to="products" className={styles.productsBtn + " " + styles.navBtn}>
        Shop
      </Link>
      <Link to="/" className={styles.homeBtn}>
        <img src={logoSmall} alt="" />
      </Link>
      <button className={styles.cartBtn + " " + styles.navBtn}>Cart</button>
    </nav>
  );
};

export default NavBar;
