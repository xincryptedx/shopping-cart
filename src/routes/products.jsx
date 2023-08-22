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
      <p>Pokemon have been loaded!</p>
      {pokemon.map((mon) => (
        <p key={mon.id}>{mon.name}</p>
      ))}
    </div>
  );
};

export default Products;
