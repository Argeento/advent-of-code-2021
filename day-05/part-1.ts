import {
  getCoverPoints,
  getLines,
  getNumberOfDangerousPoints,
  isNotDiagonalLine
} from './common'

const lines = getLines().filter(isNotDiagonalLine)
const coverPoints = getCoverPoints(lines)
const dangerousPoints = getNumberOfDangerousPoints(coverPoints)

console.log(dangerousPoints)
