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
        // Destructure from species response
        const {
          capture_rate: captureRate,
          gender_rate: genderRate,
          is_legendary: isLegendary,
          is_mythical: isMythical,
        } = speciesInfo;
        // Is it evolved
        const evolved = speciesInfo.evolves_from_species ? true : false;
        // Level
        const minLevel = evolved ? 25 : 1;
        const level =
          Math.floor(Math.random() * (100 - minLevel + 1)) + minLevel;
        // Gender
        const randomGender = (genderRate) => {
          const chance = genderRate / 8;
          const roll = Math.random();
          return roll > chance ? "female" : "male";
        };
        const gender = genderRate >= 1 ? randomGender(genderRate) : "none";
        // Shiny
        const shinyRoll = Math.random();
        const shinyChance = isLegendary || isMythical ? 0.012 : 0.002;
        const isShiny = shinyRoll < shinyChance ? true : false;
        // Price
        const genderMod = gender === "female" ? (8 - genderRate) * 0.1 + 1 : 1;
        const shinyMod = isShiny ? 5 : 1;
        const uniqueMod = isLegendary || isMythical ? 5 : 1;
        const evolvedMod = evolved ? 1.5 : 1;
        const captureRateMod = 255 - captureRate;
        const price = Math.floor(
          (level + captureRateMod + 100) *
            genderMod *
            shinyMod *
            uniqueMod *
            evolvedMod
        );
        // Image
        const determineImage = (isShiny, gender, basicInfo) => {
          var shiny = basicInfo.sprites.front_shiny;
          var shinyFemale = basicInfo.sprites.front_shiny_female;
          var female = basicInfo.sprites.front_female;
          var defaultImage = basicInfo.sprites.front_default;

          // If is shiny, female, and shinyFemale sprite exists
          if (isShiny && gender === "female" && shinyFemale) {
            return shinyFemale;
          }
          // If is shiny and shiny sprite exists
          if (isShiny && shiny) {
            return shiny;
          }
          // If is female and female sprite exists
          if (gender === "female" && female) {
            return female;
          }
          // Otherwise return the default sprite
          return defaultImage;
        };

        const newPokemon = {
          name: entry.pokemon_species.name,
          id: speciesInfo.id,
          image: determineImage(isShiny, gender, basicInfo),
          level,
          gender,
          price,
          isShiny,
        };
        return newPokemon;
      }
    );
  });

  return Promise.all(promises);
};

export default generatePokemon;
