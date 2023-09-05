import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import NavLinks from "../components/NavLinks/NavLinks";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

const MainLayout = () => {
  const [navLinksOpen, setNavLinksOpen] = useState(false);
  const [shoppingCartOpen, setShoppingCartOpen] = useState(false);

  return (
    <div className={styles.MainLayout}>
      <NavBar navLinksOpen={navLinksOpen} setNavLinksOpen={setNavLinksOpen} />
      <NavLinks
        className={
          navLinksOpen
            ? styles.NavLinksOpen + " " + styles.NavLinks
            : styles.NavLinks
        }
        navLinksOpen={navLinksOpen}
        setNavLinksOpen={setNavLinksOpen}
      />
      <ShoppingCart
        className={
          shoppingCartOpen
            ? styles.ShoppingCartOpen + " " + styles.ShoppingCart
            : styles.ShoppingCart
        }
        setNavLinksOpen={setShoppingCartOpen}
      />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
