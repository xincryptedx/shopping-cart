import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// Run a cleanup after each test case (clears jsdom)
afterEach(() => {
  cleanup();
});
