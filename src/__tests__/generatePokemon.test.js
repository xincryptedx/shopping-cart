import { describe, it, expect, vi } from "vitest";
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
  it("returns objects with the proper names", () => {});
});
