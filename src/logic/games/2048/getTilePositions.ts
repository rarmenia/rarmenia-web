import BoardState from '../../../types/games/2048/BoardState';

export function getTilePositions(
  board: BoardState,
  match: number
): { row: number; col: number; val: number }[] {
  return board
    .map((_1, row) =>
      _1.map((val, col) => ({ val, row, col })).filter((_) => _.val === match)
    )
    .reduce((a, c) => [...a, ...c], []);
}
