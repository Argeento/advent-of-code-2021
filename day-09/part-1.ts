import { add, loop2d } from '../utils'
import { getHeightMap } from './common'

const map = getHeightMap()
const lows: number[] = []

loop2d(map, (y, x, currentHeight) => {
  const adjacentHeights = [
    map[y - 1]?.[x] ?? Infinity,
    map[y + 1]?.[x] ?? Infinity,
    map[y][x - 1] ?? Infinity,
    map[y][x + 1] ?? Infinity
  ]

  if (adjacentHeights.every(adjacentHeight => adjacentHeight > currentHeight)) {
    lows.push(currentHeight)
  }
})

console.log(lows.reduce(add, 0) + lows.length)
