import { describe, expect, test } from "bun:test";
// @ts-expect-error - typescript doesn't understand txt files
import input from "./input.txt" with { type: "text" };
import { part1, part2 } from "./solution";

describe("day 3", () => {
	const exampleInput =
		"xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

	test("part 1", () => {
		expect(part1(exampleInput)).toBe(161);
		expect(part1(input)).toBe(184511516);
	});

	test("part 2", () => {
		expect(part2(exampleInput)).toBe(48);
		expect(part2(input)).toBe(90044227);
	});
});
