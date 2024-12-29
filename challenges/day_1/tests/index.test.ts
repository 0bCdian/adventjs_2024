import { describe, it, expect } from "vitest";
import { createFrame } from "../index.ts"; // Adjust the path as needed

describe("createFrame", () => {
  it("should create a frame for a single name", () => {
    const result = createFrame(["midu"]);
    const expected = `
********
* midu *
********
`.trim();
    expect(result).toBe(expected);
  });

  it("should create a frame for multiple names", () => {
    const result = createFrame(["midu", "madeval", "educalvolpz"]);
    const expected = `
***************
* midu        *
* madeval     *
* educalvolpz *
***************
`.trim();
    expect(result).toBe(expected);
  });

  it("should handle names of varying lengths", () => {
    const result = createFrame(["a", "bb", "ccc", "dddd"]);
    const expected = `
********
* a    *
* bb   *
* ccc  *
* dddd *
********
`.trim();
    expect(result).toBe(expected);
  });

  it("should handle an empty array", () => {
    expect(() => createFrame([])).toThrowError();
  });

  it("should handle a single character name", () => {
    const result = createFrame(["a"]);
    const expected = `
*****
* a *
*****
`.trim();
    expect(result).toBe(expected);
  });

  it("should handle all names being the same length", () => {
    const result = createFrame(["aaa", "bbb", "ccc"]);
    const expected = `
*******
* aaa *
* bbb *
* ccc *
*******
`.trim();
    expect(result).toBe(expected);
  });

  it("should handle very long names", () => {
    const result = createFrame(["a".repeat(20), "short"]);
    const expected = `
************************
* aaaaaaaaaaaaaaaaaaaa *
* short                *
************************
`.trim();
    expect(result).toBe(expected);
  });
});
