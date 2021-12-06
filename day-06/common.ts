import { add, getLinesFromFile } from '../utils'

export function getInitialStates(): number[] {
  return getLinesFromFile('day-06/input.txt')[0].split(',').map(Number)
}

export function calcFishNumber(initialStates: number[], days: number) {
  const school = new Array(9).fill(0)

  initialStates.forEach(initialState => {
    school[initialState] += 1
  })

  for (let day = 0; day < days; day++) {
    const newFish = school.shift()
    school[8] = newFish
    school[6] += newFish
  }

  return school.reduce(add, 0)
}
