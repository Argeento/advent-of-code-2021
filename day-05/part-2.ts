import { getCoverPoints, getLines, getNumberOfDangerousPoints } from './common'

const lines = getLines()
const coverPoints = getCoverPoints(lines)
const dangerousPoints = getNumberOfDangerousPoints(coverPoints)

console.log(dangerousPoints)
