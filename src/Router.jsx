import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useFetchPokemon from "./hooks/useFetchPokemon";
import MainLayout from "./layouts/MainLayout";
import Root from "./routes/root/root";
import ErrorPage from "./routes/ErrorPage";
import Products from "./routes/products";

const Router = () => {
  const { pokemon, error, loading } = useFetchPokemon();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Root />,
        },
        {
          path: "/products",
          element: (
            <Products pokemon={pokemon} error={error} loading={loading} />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
