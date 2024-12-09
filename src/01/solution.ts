export const part1 = (input: string): number => {
	const firstList = [];
	const secondList = [];
	const lines = input.split("\n");
	for (const line of lines) {
		const [first, second] = line.split("   ");
		firstList.push(Number.parseInt(first, 10));
		secondList.push(Number.parseInt(second, 10));
	}
	const ascending = (a: number, b: number) => a - b;
	firstList.sort(ascending);
	secondList.sort(ascending);

	let sum = 0;
	for (let i = 0; i < firstList.length; i++) {
		sum += Math.abs(firstList[i] - secondList[i]);
	}

	return sum;
};

export const part2 = (input: string): number => {
	const firstList = [];
	const secondList = new Map<number, number>();
	const lines = input.split("\n");
	for (const line of lines) {
		const [first, second] = line.split("   ");
		firstList.push(Number.parseInt(first, 10));
		const secondNumber = Number.parseInt(second, 10);
		secondList.set(secondNumber, (secondList.get(secondNumber) ?? 0) + 1);
	}

	let similarityScore = 0;
	for (let i = 0; i < firstList.length; i++) {
		const firstNumber = firstList[i];
		const count = secondList.get(firstNumber) ?? 0;
		similarityScore += firstNumber * count;
	}

	return similarityScore;
};
