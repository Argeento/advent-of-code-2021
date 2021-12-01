export function getIncreases(arr: number[]): number {
  return arr.filter((_, index) => arr[index + 1] - arr[index] > 0).length
}
