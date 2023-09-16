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

  it("sets id to proper value", async () => {
    const testPokemon = await generatePokemon(dummyInputArray);
    expect(testPokemon[0].id).toBe(1);
  });

  it("sets image to a string", async () => {
    const testPokemon = await generatePokemon(dummyInputArray);
    expect(testPokemon[0].image).toBeTypeOf("string");
  });

  it("sets level to int within 1-100 inclusive", async () => {
    const testPokemon = await generatePokemon(dummyInputArray);
    const { level } = testPokemon[0];
    expect(Number.isInteger(level)).toBeTruthy();
    expect(level).toBeGreaterThanOrEqual(1);
    expect(level).toBeLessThanOrEqual(100);
  });

  it("sets level to min of 25 when pokemon is evolved", async () => {
    const testPokemon = await generatePokemon(dummyInputArray);
    expect(testPokemon[1].level).toBeGreaterThanOrEqual(25);
  });

  it("sets gender to male or female if gender_rate >= 1", async () => {
    const testPokemon = await generatePokemon(dummyInputArray);
    expect(testPokemon[0].gender).toMatch(/^(male|female)$/);
  });

  it("sets gender to none if gender_rate is -1", async () => {
    const testPokemon = await generatePokemon(dummyInputArray);
    expect(testPokemon[2].gender).toBe("none");
  });

  it("sets price to a positive integer", async () => {
    const testPokemon = await generatePokemon(dummyInputArray);
    expect(Number.isInteger(testPokemon[0].price)).toBeTruthy();
    expect(testPokemon[0].price).toBeGreaterThan(0);
  });
});
