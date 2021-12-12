import { getArray2dFromFile } from '../utils'
import { increaseEveryOctopusEnergy, simulateFlashes } from './common'

const map = getArray2dFromFile('day-11/input.txt')

let steps = 0

while (!everyOctopusFlashed(map)) {
  increaseEveryOctopusEnergy(map)
  simulateFlashes(map)
  steps += 1
}

console.log(steps)

function everyOctopusFlashed(map: number[][]): boolean {
  return map.flatMap(energy => energy).every(energy => energy === 0)
}
