import { getLinesFromFile } from '../utils'
import {
  Board,
  checkWin,
  generateBoards,
  getSumOfUnmarkedNumbers,
  markNumberInBoards
} from './common'

const data = getLinesFromFile('day-04/input.txt')
const marks = data[0].split(',').map(Number)
const boards = generateBoards(data)

let winBoard: Board
const lastNumber = marks.find(mark => {
  markNumberInBoards(boards, mark)
  winBoard = boards.find(board => checkWin(board))
  if (winBoard) return true
})

console.log(lastNumber * getSumOfUnmarkedNumbers(winBoard))
