import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./ErrorPage";
import Products from "./routes/products";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/products",
      element: <Products />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
