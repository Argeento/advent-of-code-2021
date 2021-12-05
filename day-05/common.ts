import { asc, getLinesFromFile, Point } from '../utils'

export type Line = { start: Point; end: Point }
export type PointsMap = Record<`${number},${number}`, number>

export function getLines(): Line[] {
  const data = getLinesFromFile('day-05/input.txt')
  return data
    .map(line =>
      line
        .split(' -> ')
        .map(position => position.split(',').map(Number))
        .map(position => ({ x: position[0], y: position[1] }))
    )
    .map(area => ({
      start: area[0],
      end: area[1]
    }))
}

export function getPointsFromLine(line: Line): Point[] {
  const points: Point[] = []
  const isVertical = line.start.y === line.end.y
  const isHorizontal = line.start.x === line.end.x

  if (isVertical) {
    const [minX, maxX] = [line.start.x, line.end.x].sort(asc)
    const y = line.start.y
    for (let x = minX; x <= maxX; x++) {
      points.push({ x, y })
    }
  } else if (isHorizontal) {
    const [minY, maxY] = [line.start.y, line.end.y].sort(asc)
    const x = line.start.x
    for (let y = minY; y <= maxY; y++) {
      points.push({ x, y })
    }
  } else {
    const [leftPoint, rightPoint] =
      line.start.x < line.end.x
        ? [line.start, line.end]
        : [line.end, line.start]

    const slope = (rightPoint.y - leftPoint.y) / (rightPoint.x - leftPoint.x)
    for (let i = 0; i <= rightPoint.x - leftPoint.x; i++) {
      points.push({ x: leftPoint.x + i, y: leftPoint.y + i * slope })
    }
  }

  return points
}

export function stringifyPoint(point: Point): keyof PointsMap {
  return `${point.x},${point.y}`
}

export function getCoverPoints(lines: Line[]): PointsMap {
  const coverPoints: PointsMap = {}

  lines
    .map(getPointsFromLine)
    .flatMap(points => points)
    .forEach(point => {
      const uniqKey = stringifyPoint(point)
      coverPoints[uniqKey] ??= 0
      coverPoints[uniqKey] += 1
    })

  return coverPoints
}

export function getNumberOfDangerousPoints(pointsMap: PointsMap): number {
  return Object.values(pointsMap).filter(value => value > 1).length
}

export function isNotDiagonalLine(line: Line): boolean {
  return line.start.x === line.end.x || line.start.y === line.end.y
}
