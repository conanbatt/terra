export function findCompatibleLots({ combinations, home, lots }) {
  return combinations
    .filter(({ homePlanId }) => homePlanId === home.homePlanId)
    .map(({ lotId }) => lots.filter(({ lotId: resultId }) => lotId === resultId ))
    .flat()
}

export function findCompatibleHomes({ combinations, lot, homes }) {
  return combinations
    .filter(({ lotId }) => lotId === lot.lotId)
    .map(({ homePlanId }) => homes.filter(({ homePlanId: resultId }) => homePlanId === resultId ))
    .flat()
}
