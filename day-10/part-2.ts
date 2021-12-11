import { asc } from '../utils'
import {
  bracketMap,
  getCorruptedChars,
  getLines,
  isOpen,
  OpenChar
} from './common'

const lines = getLines()
const corruptedLines = getCorruptedChars(lines)
const incompleteLines = lines.filter((_line, index) => !corruptedLines[index])

const completions = incompleteLines.map(line => {
  const opens: OpenChar[] = []
  line.forEach(char => {
    if (isOpen(char)) {
      opens.push(char as OpenChar)
    } else {
      opens.pop()
    }
  })

  return opens.map(open => bracketMap[open]).reverse()
})

const pointsMap = {
  ')': 1,
  ']': 2,
  '}': 3,
  '>': 4
} as const

const linesPoints = completions.map(completion => {
  let points = 0
  completion.forEach(char => {
    points *= 5
    points += pointsMap[char]
  })

  return points
})

console.log(linesPoints.sort(asc)[(linesPoints.length / 2) >> 0])
