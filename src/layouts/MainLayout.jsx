import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.MainLayout}>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
