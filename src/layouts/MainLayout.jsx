import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Menu from "../components/Menu/Menu";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import useTotalCartPrice from "../hooks/useTotalCartPrice";
import useSaveCartLocally from "../hooks/useSaveCartLocally";
import useDetermineStockRefresh from "../hooks/useDetermineStockRefresh";

const MainLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shoppingCartOpen, setShoppingCartOpen] = useState(false);

  const [region, setRegion] = useState("kanto");
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const totalCartPrice = useTotalCartPrice(cart);

  // Check if stock data needs refreshed and when next update is
  const [stockRefreshTrigger, setStockRefreshTrigger, nextUpdate] =
    useDetermineStockRefresh();

  useSaveCartLocally(cart);

  return (
    <div className={styles.MainLayout}>
      <NavBar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        shoppingCartOpen={shoppingCartOpen}
        setShoppingCartOpen={setShoppingCartOpen}
        cart={cart}
      />
      <Menu
        className={menuOpen ? styles.MenuOpen + " " + styles.Menu : styles.Menu}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        region={region}
        setRegion={setRegion}
        setStockRefreshTrigger={setStockRefreshTrigger}
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
        <Outlet
          context={[
            region,
            setRegion,
            cart,
            setCart,
            shoppingCartOpen,
            menuOpen,
            stockRefreshTrigger,
            nextUpdate,
          ]}
        />
      </main>
    </div>
  );
};

export default MainLayout;
