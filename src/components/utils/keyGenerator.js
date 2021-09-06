export function likeKey({ homePlanId, lotId }) {
  if (homePlanId) {
    return `home-${homePlanId}`
  } else if (lotId) {
    return `lot-${lotId}`
  }
}