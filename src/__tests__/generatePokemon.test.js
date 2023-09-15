import { describe, it, expect } from "vitest";
import generatePokemon from "../utilities/generatePokemon";

const dummyInputArray = [
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
    entry_number: 150,
    pokemon_species: {
      name: "mewtwo",
      url: "https://pokeapi.co/api/v2/pokemon-species/150/",
    },
  },
  {
    entry_number: 151,
    pokemon_species: {
      name: "mew",
      url: "https://pokeapi.co/api/v2/pokemon-species/151/",
    },
  },
];

describe("generatePokemon utility", () => {
  it("sets proper names", async () => {
    const testPokemon = await generatePokemon(dummyInputArray);
    expect(testPokemon[0].name).toBe("bulbasaur");
  });

  it("sets image to a string", async () => {
    const testPokemon = await generatePokemon(dummyInputArray);
    expect(testPokemon[0].image).toBeTypeOf("string");
  });
});
