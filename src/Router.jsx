import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Products from "./routes/products";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      // Error Element
    },
    {
      path: "/products",
      element: <Products />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
