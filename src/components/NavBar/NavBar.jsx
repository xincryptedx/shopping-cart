import styles from "./NavBar.module.css";
import LinkButton from "../LinkButton/LinkButton";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <LinkButton to="/" className={styles.homeBtn}>
        Home
      </LinkButton>
      <LinkButton to="products" className={styles.productsBtn}>
        Shop
      </LinkButton>
      <button className={styles.cartBtn}>Cart</button>
    </nav>
  );
};

export default NavBar;
