import { getNumbersFromFile } from '../utils'
import { getIncreases } from './common'

const data = getNumbersFromFile('day-01/input.txt')

console.log(getIncreases(data))
