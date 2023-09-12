import { describe, it, expect } from "vitest";

describe("something truthy and falsy", () => {
  it("is true when true", () => {
    expect(true).toBe(true);
  });

  it("is false when false", () => {
    expect(false).toBe(false);
  });
});
