import { describe, expect, test } from "bun:test";
import { part1, part2 } from "./solution";
// @ts-expect-error - typescript doesn't understand txt files
import input from "./input.txt" with { type: "text" };

describe("day 1", () => {
	test("part 1", () => {
		expect(part1(input)).toBe(2000468);
	});

	test("part 2", () => {
		expect(part2(input)).toBe(18567089);
	});
});
