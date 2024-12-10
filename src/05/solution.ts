export const part1 = (input: string): number => {
	const [ruleSet, pageSet] = input.split("\n\n");

	const rules = ruleSet
		.split("\n")
		.map((rule) => rule.split("|").map((n) => Number.parseInt(n, 10)));
	const updates = pageSet
		.split("\n")
		.map((page) => page.split(",").map((n) => Number.parseInt(n, 10)));

	const ruleMap = new Map<number, number[]>();
	for (const [a, b] of rules) {
		const aRules = ruleMap.get(a) ?? [];
		aRules.push(b);
		ruleMap.set(a, aRules);
	}

	const validUpdates = updates.filter((update) => {
		const seen = new Set<number>();
		for (const page of update) {
			const rule = ruleMap.get(page);
			if (rule?.some((mustBeBefore) => seen.has(mustBeBefore))) {
				return false;
			}

			seen.add(page);
		}

		return true;
	});

	let sum = 0;
	for (const update of validUpdates) {
		const middleNumber = update[Math.floor(update.length / 2)];
		sum += middleNumber;
	}

	return sum;
};

export const part2 = (input: string): number => {
	const [ruleSet, pageSet] = input.split("\n\n");

	const rules = ruleSet
		.split("\n")
		.map((rule) => rule.split("|").map((n) => Number.parseInt(n, 10)));
	const updates = pageSet
		.split("\n")
		.map((page) => page.split(",").map((n) => Number.parseInt(n, 10)));

	const ruleMap = new Map<number, number[]>();
	for (const [a, b] of rules) {
		const aRules = ruleMap.get(a) ?? [];
		aRules.push(b);
		ruleMap.set(a, aRules);
	}

	const invalidUpdates = updates.filter((update) => {
		const seen = new Set<number>();
		for (const page of update) {
			const rule = ruleMap.get(page);
			if (rule?.some((mustBeBefore) => seen.has(mustBeBefore))) {
				return true;
			}

			seen.add(page);
		}

		return false;
	});

	for (const invalidUpdate of invalidUpdates) {
		invalidUpdate.sort((a, b) => {
			const aMustComeBefore = ruleMap.get(a);
			const bMustComeBefore = ruleMap.get(b);

			return aMustComeBefore?.includes(b)
				? 1
				: bMustComeBefore?.includes(a)
					? -1
					: 0;
		});
	}

	console.log(invalidUpdates);

	let sum = 0;
	for (const update of invalidUpdates) {
		const middleNumber = update[Math.floor(update.length / 2)];
		sum += middleNumber;
	}

	return sum;
};
