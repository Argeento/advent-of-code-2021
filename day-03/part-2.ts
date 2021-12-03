import { add, getLinesFromFile, log } from '../utils'

type Bit = 0 | 1
type Binary = string

function filterBinaries(
  binaries: Binary[],
  bitCriteria: (bits: Bit[]) => Bit,
  position = 0
): number {
  const firstBits = getBitsFromPosition(binaries, position)
  const expectedBit = bitCriteria(firstBits)
  const binariesLeft = binaries.filter(
    binary => toBit(binary[position]) === expectedBit
  )

  return binariesLeft.length > 1
    ? filterBinaries(binariesLeft, bitCriteria, position + 1)
    : parseInt(binariesLeft[0], 2)
}

function getMostCommonBit(bits: Bit[]): Bit {
  return bits.reduce(add, 0) >= bits.length / 2 ? 1 : 0
}

function getLeastCommonBit(bits: Bit[]): Bit {
  return getMostCommonBit(bits) === 0 ? 1 : 0
}

function getBitsFromPosition(binaries: Binary[], position: number): Bit[] {
  return binaries.map(binary => toBit(binary[position]))
}

function toBit(str: string): Bit {
  return parseInt(str) as Bit
}

const data = getLinesFromFile('day-03/input.txt')
const oxygenRating = filterBinaries(data, getMostCommonBit)
const co2Rating = filterBinaries(data, getLeastCommonBit)

log(oxygenRating * co2Rating)
