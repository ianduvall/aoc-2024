import { describe, expect, test } from "bun:test";
// @ts-expect-error - typescript doesn't understand txt files
import input from "./input.txt" with { type: "text" };
import { part1, part2 } from "./solution";

describe("day 5", () => {
	const exampleInput = `
		47|53
		97|13
		97|61
		97|47
		75|29
		61|13
		75|53
		29|13
		97|29
		53|29
		61|53
		97|53
		61|29
		47|13
		75|47
		97|75
		47|61
		75|61
		47|29
		75|13
		53|13

		75,47,61,53,29
		97,61,53,29,13
		75,29,13
		75,97,47,61,53
		61,13,29
		97,13,75,29,47
`
		.trim()
		.replaceAll(/\t/g, "");

	test("part 1", () => {
		expect(part1(exampleInput)).toBe(143);
		expect(part1(input)).toBe(5955);
	});

	test("part 2", () => {
		expect(part2(exampleInput)).toBe(123);
		expect(part2(input)).toBe(1930);
	});
});
