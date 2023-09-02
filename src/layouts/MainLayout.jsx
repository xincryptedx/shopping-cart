import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import NavLinks from "../components/NavLinks/NavLinks";
import styles from "./MainLayout.module.css";
import { useState } from "react";

const MainLayout = () => {
  const [navLinksOpen, setNavLinksOpen] = useState(false);

  return (
    <div className={styles.MainLayout}>
      <NavBar navLinksOpen={navLinksOpen} setNavLinksOpen={setNavLinksOpen} />
      <NavLinks
        className={
          navLinksOpen
            ? styles.NavLinksOpen + " " + styles.NavLinks
            : styles.NavLinks
        }
        setNavLinksOpen={setNavLinksOpen}
      />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
