import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="products">
        <button>Shop</button>
      </Link>
      <button>Cart</button>
    </nav>
  );
};

export default NavBar;
