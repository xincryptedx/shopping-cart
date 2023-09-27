import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Menu from "../components/Menu/Menu";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import useTotalCartPrice from "../hooks/useTotalCartPrice";
import useSaveCartLocally from "../hooks/useSaveCartLocally";

const MainLayout = () => {
  const [navLinksOpen, setNavLinksOpen] = useState(false);
  const [shoppingCartOpen, setShoppingCartOpen] = useState(false);

  const [region, setRegion] = useState("kanto");
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const totalCartPrice = useTotalCartPrice(cart);

  useSaveCartLocally(cart);

  return (
    <div className={styles.MainLayout}>
      <NavBar
        navLinksOpen={navLinksOpen}
        setNavLinksOpen={setNavLinksOpen}
        setShoppingCartOpen={setShoppingCartOpen}
        cart={cart}
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
        cart={cart}
        setCart={setCart}
        totalCartPrice={totalCartPrice}
        shoppingCartOpen={shoppingCartOpen}
        setShoppingCartOpen={setShoppingCartOpen}
      />

      <main className={styles.routeContainer}>
        <Outlet context={[region, setRegion, cart, setCart]} />
      </main>
    </div>
  );
};

export default MainLayout;
