import { describe, it, expect } from "vitest";

import generatePokemon from "../utilities/generatePokemon";

describe("generatePokemon utility", () => {
  it("has the correct name property", () => {
    const testPokemon = generatePokemon("bidoof");
    expect(testPokemon).toStrictEqual({ name: "bidoof" });
  });

  it("has a level int between 1-100 inclusive", () => {
    const testPokemon = generatePokemon("bidoof");
    expect(Number.isInteger(testPokemon.level)).toBe(true);
    expect(testPokemon.level).toBeGreaterThanOrEqual(1);
    expect(testPokemon.level).toBeLessThanOrEqual(100);
  });
});
