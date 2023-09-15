import { describe, it, expect } from "vitest";

import generatePokemon from "../utilities/generatePokemon";

describe("generatePokemon utility", () => {
  const dummyPokemonData = [
    {
      entry_number: 1,
      pokemon_species: {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon-species/1/",
      },
    },
    {
      entry_number: 2,
      pokemon_species: {
        name: "ivysaur",
        url: "https://pokeapi.co/api/v2/pokemon-species/2/",
      },
    },
    {
      entry_number: 3,
      pokemon_species: {
        name: "venusaur",
        url: "https://pokeapi.co/api/v2/pokemon-species/3/",
      },
    },
  ];

  it("has the correct name property", () => {
    const testPokemon = generatePokemon(dummyPokemonData);
    expect(testPokemon[0].name).toBe("bulbasaur");
  });

  it("has a level int between 1-100 inclusive", () => {
    const testPokemon = generatePokemon("bidoof");
    expect(Number.isInteger(testPokemon.level)).toBe(true);
    expect(testPokemon.level).toBeGreaterThanOrEqual(1);
    expect(testPokemon.level).toBeLessThanOrEqual(100);
  });
});
