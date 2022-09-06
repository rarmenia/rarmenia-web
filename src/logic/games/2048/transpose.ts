import BoardState from '../../../types/games/2048/BoardState';

export function transpose(board: BoardState): BoardState {
  return board[0].map((_, i) => board.map((row) => row[i]));
}
