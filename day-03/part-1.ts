import { getLinesFromFile } from '../utils'

const data = getLinesFromFile('day-03/input.txt')
const columns: number[] = new Array(data[0].length).fill(0)

for (const binary of data) {
  for (let i = 0; i < binary.length; i++) {
    const bit = binary[i]
    columns[i] += parseInt(bit)
  }
}

const gammaRateBool = columns.map(sum => sum >= data.length / 2)
const epsilonRateBool = gammaRateBool.map(bit => !bit)

const gammaRate = parseInt(gammaRateBool.map(Number).join(''), 2)
const epsilonRate = parseInt(epsilonRateBool.map(Number).join(''), 2)

console.log(gammaRate * epsilonRate)
