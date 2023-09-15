import { rest } from "msw";
import { setupServer } from "msw/node";
import { restHandlers } from "./pokemonRequestHandlers";

const server = setupServer(...restHandlers);
export { server, rest };
