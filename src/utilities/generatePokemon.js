const generatePokemon = (pokemon) => {
  const generatedPokemon = [];

  pokemon.forEach((entry) => {
    const newPokemon = {
      name: entry.pokemon_species.name,
    };
    generatedPokemon.push(newPokemon);
  });

  return generatedPokemon;
};

export default generatePokemon;
