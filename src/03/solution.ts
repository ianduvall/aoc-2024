const mul = (str: string): number => {
	const [a, b] = str.split("(")[1].split(")")[0].split(",");

	return Number.parseInt(a) * Number.parseInt(b);
};

export const part1 = (input: string): number => {
	const mulRegex = /mul\(\d{1,3},\d{1,3}\)/g;
	const sum = input.matchAll(mulRegex).reduce((acc, [match]) => {
		const product = mul(match);
		return acc + product;
	}, 0);

	return sum;
};

export const part2 = (input: string): number => {
	let enabled = true;
	const conditionalMulRegex = /do\(\)|don't\(\)|mul\(\d{1,3},\d{1,3}\)/g;
	const sum = input.matchAll(conditionalMulRegex).reduce((acc, [match]) => {
		if (match === "do()") {
			enabled = true;
			return acc;
		}
		if (match === "don't()") {
			enabled = false;
			return acc;
		}
		if (!enabled) {
			return acc;
		}

		const product = mul(match);
		return acc + product;
	}, 0);

	return sum;
};
