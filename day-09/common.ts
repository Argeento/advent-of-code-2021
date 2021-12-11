import { getLinesFromFile } from '../utils'

export function getHeightMap(): number[][] {
  return getLinesFromFile('day-09/input.txt').map(line =>
    line.split('').map(Number)
  )
}
