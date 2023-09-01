import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logoSmall from "../../assets/logoIconSmall.svg";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <button className={styles.menuBtn}>Menu</button>
      <div className={styles.navLinks}>
        <ul>
          <Link to="products" className={styles.productsBtn}>
            Prize Counter
          </Link>
        </ul>
      </div>
      <Link to="/" className={styles.homeBtn}>
        <img src={logoSmall} alt="Rocket Game Corner home button" />
      </Link>
      <button className={styles.cartBtn}>Cart</button>
    </nav>
  );
};

export default NavBar;
