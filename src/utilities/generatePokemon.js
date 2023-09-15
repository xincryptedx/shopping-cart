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
        const newPokemon = {
          name: entry.pokemon_species.name,
          image: basicInfo.sprites.front_default,
          captureRate: speciesInfo.capture_rate,
          growthRate: speciesInfo.growth_rate,
        };
        return newPokemon;
      }
    );
  });

  return Promise.all(promises);
};

export default generatePokemon;
