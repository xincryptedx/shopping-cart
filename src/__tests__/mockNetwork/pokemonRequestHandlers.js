import { rest } from "msw";
import responses from "./mockPokemonResponses";

const restHandlers = [
  // Bulbasaur species info
  rest.get("https://pokeapi.co/api/v2/pokemon-species/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(responses.bulbasaurSpeciesInfo));
  }),

  // Bulbasaur basic info
  rest.get("https://pokeapi.co/api/v2/pokemon/bulbasaur", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(responses.bulbasaurBasicInfo));
  }),

  // Ivysaur species info
  rest.get("https://pokeapi.co/api/v2/pokemon-species/2", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(responses.ivysaurSpeciesInfo));
  }),

  // Ivysaur basic info
  rest.get("https://pokeapi.co/api/v2/pokemon/ivysaur", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(responses.ivysaurBasicInfo));
  }),

  //Mewtwo species info
  rest.get("https://pokeapi.co/api/v2/pokemon-species/150", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(responses.mewtwoSpeciesInfo));
  }),

  // Mewtwo basic info
  rest.get("https://pokeapi.co/api/v2/pokemon/mewtwo", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(responses.mewtwoBasicInfo));
  }),

  //Mew species info
  rest.get("https://pokeapi.co/api/v2/pokemon-species/151", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(responses.mewSpeciesInfo));
  }),

  // Mew basic info
  rest.get("https://pokeapi.co/api/v2/pokemon/mew", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(responses.mewBasicInfo));
  }),
];

export { restHandlers };
