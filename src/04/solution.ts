export const part1 = (input: string): number => {
	const countXmasFromPoint = (
		grid: string[][],
		x: number,
		y: number,
	): number => {
		if (grid[y][x] !== "X") {
			return 0;
		}

		const directions = [
			{ x: -1, y: -1 },
			{ x: -1, y: 0 },
			{ x: -1, y: 1 },
			{ x: 0, y: -1 },
			{ x: 0, y: 1 },
			{ x: 1, y: -1 },
			{ x: 1, y: 0 },
			{ x: 1, y: 1 },
		] as const;
		const chars = ["X", "M", "A", "S"];

		let count = 0;
		for (const direction of directions) {
			const { x: dx, y: dy } = direction;

			let valid = true;
			for (let charIndex = 1; charIndex < chars.length; charIndex++) {
				const char = chars[charIndex];
				if (grid[y + dy * charIndex]?.[x + dx * charIndex] !== char) {
					valid = false;
					break;
				}
			}
			if (valid) {
				count++;
			}
		}

		return count;
	};
	const inputGrid = input.split("\n").map((line) => line.split(""));

	const sum = inputGrid.reduce((acc, line, y) => {
		let lineCount = 0;
		for (let x = 0; x < line.length; x++) {
			const count = countXmasFromPoint(inputGrid, x, y);
			lineCount += count;
		}
		return acc + lineCount;
	}, 0);

	return sum;
};

export const part2 = (input: string): number => {
	const matchMasCrossFromCenterPoint = (
		grid: string[][],
		x: number,
		y: number,
	): boolean => {
		if (grid[y][x] !== "A") {
			return false;
		}

		const directions = [
			// top left
			{ x: -1, y: -1 },
			// top right
			{ x: 1, y: -1 },
			// bottom right
			{ x: 1, y: 1 },
			// bottom left
			{ x: -1, y: 1 },
		] as const;

		const cross = directions
			.map(({ x: dx, y: dy }) => {
				return grid[y + dy]?.[x + dx];
			})
			.join("");

		if (["MMSS", "SMMS", "SSMM", "MSSM"].includes(cross)) {
			return true;
		}

		return false;
	};
	const inputGrid = input.split("\n").map((line) => line.split(""));

	const sum = inputGrid.reduce((acc, line, y) => {
		let lineCount = 0;
		for (let x = 1; x < line.length - 1; x++) {
			const match = matchMasCrossFromCenterPoint(inputGrid, x, y);
			lineCount += match ? 1 : 0;
		}
		return acc + lineCount;
	}, 0);

	return sum;
};
