import { add, last } from '../utils'
import { bracketMap, getCorruptedChars, getLines, isOpen } from './common'

const pointsMap = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137
} as const

const lines = getLines()
const corruptedChars = getCorruptedChars(lines)
const points = corruptedChars.map(char => pointsMap[char] ?? 0).reduce(add, 0)

console.log(points)
