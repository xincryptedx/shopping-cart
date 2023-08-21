import useFetchPokemon from "../hooks/useFetchPokemon";

const Products = () => {
  const { pokemon, error, loading } = useFetchPokemon();

  console.log(pokemon);

  if (error)
    return (
      <div>
        <p>Loading error!</p>
      </div>
    );

  if (loading)
    return (
      <div>
        <p>Loading info...</p>
      </div>
    );

  return (
    <div>
      <p>This is the products route!</p>
      <p>Here is some data on {pokemon[0].name}</p>
      <p>{JSON.stringify(pokemon[0])}</p>
    </div>
  );
};

export default Products;
