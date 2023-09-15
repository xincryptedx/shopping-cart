import { afterEach, afterAll, beforeAll } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { setupServer } from "msw/node";
import { rest } from "msw";

import {
  ivysaurBasicInfo,
  ivysaurSpeciesInfo,
} from "./responses/mockPokemonResponses";

export const restHandlers = [
  // Bulbasaur species info
  rest.get(
    "https://pokeapi.co/api/v2/pokemon-species/bulbasaur",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(ivysaurSpeciesInfo));
    }
  ),

  // Bulbasaur basic info
  rest.get("https://pokeapi.co/api/v2/pokemon/bulbasaur", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(ivysaurBasicInfo));
  }),
];

const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterAll(() => server.close());

// Run a cleanup after each test case (clears jsdom)
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
