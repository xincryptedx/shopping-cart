const generatePokemon = (pokemon) => {
  const promises = pokemon.map((entry) => {
    const basicInfoUrl = `https://pokeapi.co/api/v2/pokemon/${entry.pokemon_species.name}`;
    const speciesInfoUrl = entry.pokemon_species.url;

    const basicInfoPromise = fetch(basicInfoUrl).then((response) =>
      response.json()
    );
    const speciesInfoPromise = fetch(speciesInfoUrl).then((response) =>
      response.json()
    );

    return Promise.all([basicInfoPromise, speciesInfoPromise]).then(
      ([basicInfo, speciesInfo]) => {
        const minLevel = speciesInfo.evolves_from_species ? 25 : 1;

        const newPokemon = {
          name: entry.pokemon_species.name,
          image: basicInfo.sprites.front_default,
          level: Math.floor(Math.random() * (100 - minLevel + 1)) + minLevel,
        };
        return newPokemon;
      }
    );
  });

  return Promise.all(promises);
};

export default generatePokemon;
