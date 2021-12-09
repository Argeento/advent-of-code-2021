import { getLinesFromFile } from '../utils'

console.log(
  getLinesFromFile('day-08/input.txt')
    .map(line => line.split(' | ')[1].split(' '))
    .flatMap(x => x)
    .filter(x => [2, 3, 4, 7].includes(x.length)).length
)
