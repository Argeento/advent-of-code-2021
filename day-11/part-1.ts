import { getArray2dFromFile } from '../utils'
import { increaseEveryOctopusEnergy, simulateFlashes } from './common'

const map = getArray2dFromFile('day-11/input.txt')

let totalFlashes = 0

for (let step = 0; step < 100; step++) {
  increaseEveryOctopusEnergy(map)
  simulateFlashes(map, function onFlash() {
    totalFlashes += 1
  })
}

console.log(totalFlashes)
