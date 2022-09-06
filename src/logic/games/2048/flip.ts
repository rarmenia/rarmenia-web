import BoardState from '../../../types/games/2048/BoardState';

export function flip(board: BoardState): BoardState {
  return board.map((row) => row.reverse());
}
