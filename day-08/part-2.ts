import { getLinesFromFile } from '../utils'

const lines = getLinesFromFile('day-08/input.txt')

const totalSumOfOutputs = lines.reduce((sum, line) => {
  const [signals, outputs] = line
    .split(' | ')
    .map(x => x.split(' ').map(x => x.split('').sort()))

  const digit: string[][] = new Array(10)

  digit[1] = signals.find(byLength(2))
  digit[4] = signals.find(byLength(4))
  digit[7] = signals.find(byLength(3))
  digit[8] = signals.find(byLength(7))

  const sixSegmentsSignals = signals.filter(byLength(6))
  digit[6] = sixSegmentsSignals.find(
    signal => !digit[1].every(segment => signal.includes(segment))
  )
  digit[9] = sixSegmentsSignals.find(signal =>
    digit[4].every(segment => signal.includes(segment))
  )
  digit[0] = sixSegmentsSignals.find(
    signal => signal !== digit[6] && signal !== digit[9]
  )

  const fiveSegmentsSignals = signals.filter(byLength(5))
  digit[5] = fiveSegmentsSignals.find(segment =>
    segment.every(signal => digit[6].includes(signal))
  )
  digit[3] = fiveSegmentsSignals.find(
    signal => difference(signal, digit[5]).length === 1
  )
  digit[2] = fiveSegmentsSignals.find(
    signal => signal !== digit[3] && signal !== digit[5]
  )

  const outputDigits = +outputs
    .map(output => digit.findIndex(digit => digit.join('') === output.join('')))
    .join('')

  return sum + outputDigits
}, 0)

console.log(totalSumOfOutputs)

function byLength(length: number): (signal: string[]) => boolean {
  return signal => signal.length === length
}

function difference(array1: string[], array2: string[]): string[] {
  return array1.filter(x => !array2.includes(x))
}
