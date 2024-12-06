import { describe, expect, test } from "bun:test";
import { part1, part2 } from "./solution";
// @ts-expect-error - typescript doesn't understand txt files
import input from "./input.txt" with { type: "text" };

describe("day 4 ", () => {
	const exampleInput = `MMMSXXMASM
												MSAMXMSMSA
												AMXSXMAAMM
												MSAMASMSMX
												XMASAMXAMM
												XXAMMXXAMA
												SMSMSASXSS
												SAXAMASAAA
												MAMMMXMMMM
												MXMXAXMASX`.replaceAll(/\t/g, "");

	test("part 1", () => {
		expect(part1(exampleInput)).toBe(18);
		expect(part1(input)).toBe(2543);
	});

	test("part 2", () => {
		expect(part2(exampleInput)).toBe(9);
		expect(part2(input)).toBe(1930);
	});
});
