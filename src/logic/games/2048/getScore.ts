import BoardState from '../../../types/games/2048/BoardState';

export function getScore(board: BoardState): number {
  return board.reduce(
    (acc, cur) => acc + cur.reduce((p, c) => p + (c ? Math.pow(2, c) : c), 0),
    0
  );
}
