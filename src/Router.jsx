import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      // Error Element
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
