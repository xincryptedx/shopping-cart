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
        const {
          capture_rate: captureRate,
          gender_rate: genderRate,
          is_legendary: isLegendary,
          is_mythical: isMythical,
        } = speciesInfo;

        const evolves = speciesInfo.evolves_from_species ? true : false;

        const minLevel = evolves ? 25 : 1;
        const level =
          Math.floor(Math.random() * (100 - minLevel + 1)) + minLevel;

        const randomGender = (genderRate) => {
          const chance = genderRate / 8;
          const roll = Math.random();
          return roll > chance ? "female" : "male";
        };
        const gender = genderRate >= 1 ? randomGender(genderRate) : "none";

        const genderPriceMod =
          gender === "female" ? (8 - genderRate) * 0.1 + 1 : 1;

        const newPokemon = {
          name: entry.pokemon_species.name,
          id: speciesInfo.id,
          image: basicInfo.sprites.front_default,
          level,
          gender,
        };
        return newPokemon;
      }
    );
  });

  return Promise.all(promises);
};

export default generatePokemon;
