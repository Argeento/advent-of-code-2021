import { getNumbersFromFile } from '../utils'
import { getIncreases } from './common'

const data = getNumbersFromFile('day-01/input.txt')
const increases = getIncreases(
  data.map((_, i) => data[i] + data[i + 1] + data[i + 2])
)

console.log(increases)
