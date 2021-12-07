import { add } from '../utils'
import { getHorizontalPositions } from './common'

const positions = getHorizontalPositions()
const MAX = Math.max(...positions)
const MIN = Math.min(...positions)

const fuelCosts = new Array(MAX - MIN).fill(0)

for (let i = MIN; i <= MAX; i++) {
  fuelCosts[i] = positions
    .map(position => {
      const distance = Math.abs(position - i)
      return ((distance + 1) / 2) * distance
    })
    .reduce(add, 0)
}

console.log(Math.min(...fuelCosts))
