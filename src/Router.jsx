import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useFetchPokemon from "./hooks/useFetchPokemon";
import Root from "./routes/root";
import ErrorPage from "./routes/ErrorPage";
import Products from "./routes/products";

const Router = () => {
  const { pokemon, error, loading } = useFetchPokemon();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/products",
      element: <Products pokemon={pokemon} error={error} loading={loading} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
