const generatePokemon = (pokemon) => {
  const generatedPoekmon = [];

  pokemon.forEach((entry) => {
    const newPokemon = {
      name: entry.name,
    };
    generatedPoekmon.push(newPokemon);
  });

  return generatedPoekmon;
};

export default generatePokemon;
