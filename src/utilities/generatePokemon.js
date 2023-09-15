const generatePokemon = (pokemon) => {
  const generatedPoekmon = [];

  pokemon.forEach((entry) => {
    const newPokemon = {
      name: entry.pokemon_species.name,
    };
    generatedPoekmon.push(newPokemon);
  });

  return generatedPoekmon;
};

export default generatePokemon;
