import { rest } from "msw";
import {
  bulbasaurBasicInfo,
  bulbasaurSpeciesInfo,
  ivysaurBasicInfo,
  ivysaurSpeciesInfo,
  mewBasicInfo,
  mewSpeciesInfo,
  mewtwoBasicInfo,
  mewtwoSpeciesInfo,
} from "./mockNetwork/mockPokemonResponses";

const restHandlers = [
  // Bulbasaur species info
  rest.get("https://pokeapi.co/api/v2/pokemon-species/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(bulbasaurSpeciesInfo));
  }),

  // Bulbasaur basic info
  rest.get("https://pokeapi.co/api/v2/pokemon/bulbasaur", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(bulbasaurBasicInfo));
  }),

  // Ivysaur species info
  rest.get("https://pokeapi.co/api/v2/pokemon-species/2", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(ivysaurSpeciesInfo));
  }),

  // Ivysaur basic info
  rest.get("https://pokeapi.co/api/v2/pokemon/ivysaur", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(ivysaurBasicInfo));
  }),

  //Mewtwo species info
  rest.get("https://pokeapi.co/api/v2/pokemon-species/150", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mewtwoSpeciesInfo));
  }),

  // Mewtwo basic info
  rest.get("https://pokeapi.co/api/v2/pokemon/mewtwo", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mewtwoBasicInfo));
  }),

  //Mew species info
  rest.get("https://pokeapi.co/api/v2/pokemon-species/151", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mewSpeciesInfo));
  }),

  // Mew basic info
  rest.get("https://pokeapi.co/api/v2/pokemon/mew", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mewBasicInfo));
  }),
];

export default restHandlers;
