import { afterEach, afterAll, beforeAll } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { server } from "./mockNetwork/mockServer";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

// Run a cleanup after each test case (clears jsdom)
afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());
