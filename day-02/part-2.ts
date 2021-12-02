import { getLinesFromFile, match, Position } from '../utils'

type Dir = 'forward' | 'up' | 'down'

const lines = getLinesFromFile('day-02/input.txt')

const position = {
  x: 0,
  y: 0,
  aim: 0
}

lines.forEach(line => {
  const data = line.split(' ')
  const dir = data[0] as Dir
  const nr = parseInt(data[1])

  match(dir, {
    down: () => {
      position.aim += nr
    },
    up: () => {
      position.aim -= nr
    },
    forward: () => {
      position.x += nr
      position.y += position.aim * nr
    }
  })
})

console.log(position.x * position.y)
