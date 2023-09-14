const getPokemonDetails = async (pokedexData) => {
  // Select random stock amount
  const minStock = 10;
  const maxStock = 30;
  const stockNum =
    Math.floor(Math.random() * (maxStock - minStock + 1)) + minStock;

  // Create randomized array of pokemon
  const shuffledPokedexData = shuffleArray(pokedexData.pokemon_entries);
  const chosenPokemon = [];

  // For inStock amount of times pop a pokemon and add to chosen array
  for (let i = 0; i < stockNum; i += 1) {
    chosenPokemon.push(shuffledPokedexData.pop());
  }

  // Async fetch details for all chosenPokemon
  const promises = chosenPokemon.map(async (entry) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${entry.pokemon_species.name}`,
        {
          mode: "cors",
        }
      );
      if (response.status >= 400) {
        throw new Error("pokemon fetch error");
      }
      return response.json();
    } catch (error) {
      setError(error);
      return null;
    }
  });

  const pokemonDetailsData = await Promise.all(promises);

  const filteredPokemonData = pokemonDetailsData.filter(
    (data) => data !== null
  );

  setPokemon(filteredPokemonData);
  setLoading(false);
};
