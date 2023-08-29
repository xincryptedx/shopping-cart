import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <p>Im a layout!</p>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
