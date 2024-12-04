import { test, expect } from "vitest";
import { prepareGifts } from "../index.ts";

test(" [3, 1, 2, 3, 4, 2, 5] -> [1, 2, 3, 4, 5]", () => {
  const input = [3, 1, 2, 3, 4, 2, 5];
  const expected = [1, 2, 3, 4, 5];
  const output = prepareGifts(input);
  expect(output).toStrictEqual(expected);
});

test(" [6, 5, 5, 5, 5] -> [5, 6]", () => {
  const input = [6, 5, 5, 5, 5];
  const expected = [5, 6];
  const output = prepareGifts(input);
  expect(output).toStrictEqual(expected);
});

test(" [0, 5, 5, 5, 5] -> [0, 5]", () => {
  const input = [0, 5, 5, 5, 5];
  const expected = [0, 5];
  const output = prepareGifts(input);
  expect(output).toStrictEqual(expected);
});

test(" [-1, -2, -3, -4, 4] -> [-4,-3,-2,-1,4]", () => {
  const input = [-1, -2, -3, -4, 4];
  const expected = [-4, -3, -2, -1, 4];
  const output = prepareGifts(input);
  expect(output).toStrictEqual(expected);
});

test(" [] -> []", () => {
  const input: number[] = [];
  const expected: number[] = [];
  const output = prepareGifts(input);
  expect(output).toStrictEqual(expected);
});
