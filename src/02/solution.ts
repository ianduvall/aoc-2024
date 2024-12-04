const isGradual = (left: number, right: number) => {
	const diff = Math.abs(left - right);
	return diff > 0 && diff < 4;
};
const ascending = (left: number, right: number) => left < right;
const descending = (left: number, right: number) => left > right;

export const part1 = (input: string): number => {
	let numSafeReports = 0;

	const lines = input.split("\n");
	const reports = lines.map((line) =>
		line.split(" ").map((x) => Number.parseInt(x, 10)),
	);

	for (const report of reports) {
		if (report[0] === report[1]) {
			continue;
		}
		const isConsistentDir = report[0] < report[1] ? ascending : descending;
		let safe = true;

		for (let prev = 0; prev < report.length - 1; prev++) {
			const next = prev + 1;
			if (
				isGradual(report[prev], report[next]) &&
				isConsistentDir(report[prev], report[next])
			) {
				continue;
			}

			safe = false;
			break;
		}

		if (safe) {
			numSafeReports++;
		}
	}

	return numSafeReports;
};

export const part2 = (input: string): number => {
	let numSafeReports = 0;

	const lines = input.split("\n");
	const reports = lines.map((line) =>
		line.split(" ").map((x) => Number.parseInt(x, 10)),
	);

	for (const fullReport of reports) {
		for (let remove = 0; remove < reports.length; remove++) {
			const report = fullReport.filter((_, i) => i !== remove);
			if (report[0] === report[1]) {
				continue;
			}
			const isConsistentDir = report[0] < report[1] ? ascending : descending;
			let safe = true;

			for (let prev = 0; prev < report.length - 1; prev++) {
				const next = prev + 1;
				if (
					isGradual(report[prev], report[next]) &&
					isConsistentDir(report[prev], report[next])
				) {
					continue;
				}

				safe = false;
				break;
			}

			if (safe) {
				numSafeReports++;
				break;
			}
		}
	}

	return numSafeReports;
};
