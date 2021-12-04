import { getLinesFromFile, negateFunction } from '../utils'
import {
  Board,
  checkWin,
  generateBoards,
  getSumOfUnmarkedNumbers,
  markNumberInBoards
} from './common'

const data = getLinesFromFile('day-04/input.txt')
const marks = data[0].split(',').map(Number)
let boards = generateBoards(data)

let lastWinBoard: Board
const lastNumber = marks.find(mark => {
  markNumberInBoards(boards, mark)

  const winBoards = boards.filter(board => checkWin(board))
  if (winBoards.length > 0) {
    lastWinBoard = winBoards[winBoards.length - 1]
    boards = boards.filter(board => !winBoards.includes(board))
  }

  return boards.length === 0
})

console.log(lastNumber * getSumOfUnmarkedNumbers(lastWinBoard))
