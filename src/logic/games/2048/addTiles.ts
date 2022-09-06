import BoardState from '../../../types/games/2048/BoardState';
import NextBoardState from '../../../types/games/2048/NextBoardState';
import { getTilePositions } from './getTilePositions';

export function addTiles(board: BoardState, count: number): NextBoardState {
  board = JSON.parse(JSON.stringify(board));

  let changed = false;

  for (let i = 0; i < count; i++) {
    const tilePositions = getTilePositions(board, 0);
    if (!tilePositions || tilePositions.length < 1) return { board, changed };
    const tilePostition =
      tilePositions[Math.floor(Math.random() * tilePositions.length)];
    board[tilePostition.row][tilePostition.col] = Math.random() <= 0.9 ? 1 : 2;
    changed = true;
  }

  return { board, changed };
}
