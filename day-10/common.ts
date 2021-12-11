import { getLinesFromFile, last } from '../utils'

export type OpenChar = '(' | '<' | '{' | '['
export type CloseChar = ')' | '>' | '}' | ']'
export type Char = OpenChar | CloseChar
export type Line = Char[]

export function getLines(): Line[] {
  return getLinesFromFile('day-10/input.txt').map(
    line => line.split('') as Char[]
  )
}

export function isOpen(char: Char): boolean {
  return '([{<'.includes(char)
}

export const bracketMap: Record<OpenChar, CloseChar> = {
  '{': '}',
  '[': ']',
  '<': '>',
  '(': ')'
} as const

export function getCorruptedChars(lines: Line[]): Array<CloseChar | undefined> {
  return lines.map(line => {
    const opens: OpenChar[] = []
    const corruptedChar = line.find(char => {
      if (isOpen(char)) {
        opens.push(char as OpenChar)
        return false
      } else {
        if (char === bracketMap[last(opens)]) {
          opens.pop()
          return false
        } else {
          return true
        }
      }
    })

    if (corruptedChar) {
      return corruptedChar as CloseChar
    }
  })
}
