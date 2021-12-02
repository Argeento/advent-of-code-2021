import { getLinesFromFile, match, Position } from '../utils'

type Dir = 'forward' | 'up' | 'down'

const lines = getLinesFromFile('day-02/input.txt')

const position: Position = {
  x: 0,
  y: 0
}

lines.forEach(line => {
  const data = line.split(' ')
  const dir = data[0] as Dir
  const nr = parseInt(data[1])

  match(dir, {
    down: () => (position.y += nr),
    up: () => (position.y -= nr),
    forward: () => (position.x += nr)
  })
})

console.log(position.x * position.y)
