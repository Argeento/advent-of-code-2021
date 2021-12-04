import { getColumn, add, negateFunction } from '../utils'

export type Field = { nr: number; marked: boolean }
export type Board = Field[][]

export function checkWin(board: Board): boolean {
  for (const line of board) {
    if (line.every(isMarked)) return true
  }

  const row = board[0]
  for (let i = 0; i < row.length; i++) {
    if (getColumn(board, i).every(isMarked)) return true
  }

  return false
}

export function isMarked(field: Field): boolean {
  return field.marked
}

export const isUnmarked = negateFunction(isMarked)

export function getAllFieldsFromBoard(board: Board): Field[] {
  return board.flatMap(row => row)
}

export function getSumOfUnmarkedNumbers(board: Board): number {
  return getAllFieldsFromBoard(board)
    .filter(isUnmarked)
    .map(field => field.nr)
    .reduce(add, 0)
}

export function markNumberInBoards(boards: Board[], number: number): void {
  boards.forEach(board => {
    board.forEach(row => {
      const field = row.find(field => field.nr === number)
      if (field) {
        field.marked = true
      }
    })
  })
}

export function generateBoards(data: string[]): Board[] {
  const boards: Board[] = []
  const lines = data.slice(1).filter(line => line.trim().length > 0)

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const numbers = line
      .match(/\d+/g)
      .map(Number)
      .map(nr => ({ nr, marked: false }))

    const boardNumber = (i / 5) >> 0
    boards[boardNumber] ??= []
    boards[boardNumber].push(numbers)
  }

  return boards
}
