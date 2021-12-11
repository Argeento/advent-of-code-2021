import { add, desc, loop2d, multiply, Point } from '../utils'
import { getHeightMap } from './common'

const map = getHeightMap()

const checkedPoints: Point[] = []

function isChecked(point: Point) {
  return checkedPoints.some(
    checkedPoint => point.x === checkedPoint.x && point.y === checkedPoint.y
  )
}

const basins: number[] = []

loop2d(map, (y, x) => {
  if (isChecked({ x, y })) return
  let basinArea = 0
  fill(x, y)

  function fill(x: number, y: number) {
    const height = map[y]?.[x] ?? 9
    if (height === 9 || isChecked({ x, y })) return

    basinArea += 1
    checkedPoints.push({ x, y })

    fill(x, y - 1)
    fill(x, y + 1)
    fill(x - 1, y)
    fill(x + 1, y)
  }

  basins.push(basinArea)
})

console.log(basins.sort(desc).slice(0, 3).reduce(multiply, 1))
