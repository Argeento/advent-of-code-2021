import { loop2d } from '../utils'

function riseEnergy(map: number[][], y: number, x: number): void {
  if (map[y]?.[x] && map[y][x] !== 0) {
    map[y][x] += 1
  }
}

function anyOctopusCanFlash(map: number[][]): boolean {
  return map.flatMap(energy => energy).some(energy => energy > 9)
}

export function increaseEveryOctopusEnergy(map: number[][]): void {
  loop2d(map, (y, x) => {
    map[y][x] += 1
  })
}

export function simulateFlashes(map: number[][], onFlash?: () => void) {
  while (anyOctopusCanFlash(map)) {
    loop2d(map, (y, x) => {
      if (map[y][x] > 9) {
        onFlash && onFlash()
        map[y][x] = 0
        riseEnergy(map, y, x + 1)
        riseEnergy(map, y, x - 1)
        riseEnergy(map, y + 1, x)
        riseEnergy(map, y - 1, x)
        riseEnergy(map, y + 1, x + 1)
        riseEnergy(map, y + 1, x - 1)
        riseEnergy(map, y - 1, x + 1)
        riseEnergy(map, y - 1, x - 1)
      }
    })
  }
}
