import { describe, it, expect } from "vitest";

import generatePokemon from "../utilities/generatePokemon";

describe("generatePokemon utility", () => {
  it("generates a pokemon with the correct name property", () => {
    const testPokemon = generatePokemon("bidoof");
    expect(testPokemon).toBe({ name: "bidoof" });
  });
});
