import { afterEach, afterAll, beforeAll } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { setupServer } from "msw/node";
import restHandlers from "./mockNetwork/pokemonRequestHandlers";

const server = setupServer([...restHandlers]);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterAll(() => server.close());

// Run a cleanup after each test case (clears jsdom)
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
