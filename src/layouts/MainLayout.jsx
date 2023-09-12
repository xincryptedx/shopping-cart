import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Menu from "../components/Menu/Menu";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

const MainLayout = () => {
  const [navLinksOpen, setNavLinksOpen] = useState(false);
  const [shoppingCartOpen, setShoppingCartOpen] = useState(false);

  return (
    <div className={styles.MainLayout}>
      <NavBar
        navLinksOpen={navLinksOpen}
        setNavLinksOpen={setNavLinksOpen}
        setShoppingCartOpen={setShoppingCartOpen}
      />
      <Menu
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
        shoppingCartOpen={shoppingCartOpen}
        setShoppingCartOpen={setShoppingCartOpen}
      />

      <main className={styles.routeContainer}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
