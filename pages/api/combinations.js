const COMBINATIONS = [
	{ homePlanId: 1, lotId: 1 },
	{ homePlanId: 1, lotId: 2 },
	{ homePlanId: 1, lotId: 3 },
	{ homePlanId: 2, lotId: 1 },
	{ homePlanId: 2, lotId: 4 },
	{ homePlanId: 2, lotId: 3 },
	{ homePlanId: 3, lotId: 3 },
	{ homePlanId: 3, lotId: 2 },
	{ homePlanId: 3, lotId: 1 },
	{ homePlanId: 4, lotId: 3 },
	{ homePlanId: 4, lotId: 2 },
	{ homePlanId: 4, lotId: 4 },
]

export default function handler(_, res) {
  res.status(200).json(COMBINATIONS)
}
