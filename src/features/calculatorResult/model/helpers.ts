export const isInRange = (value: number, target: number, range = 25) =>
  value < target + range && value > target - range
