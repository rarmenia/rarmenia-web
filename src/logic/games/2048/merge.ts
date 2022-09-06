import BoardState from '../../../types/games/2048/BoardState';
import Direction from '../../../types/games/2048/Direction';
import NextBoardState from '../../../types/games/2048/NextBoardState';
import { flip } from './flip';
import { transpose } from './transpose';

export function merge(direction: Direction, board: BoardState): NextBoardState {
  board = JSON.parse(JSON.stringify(board));

  switch (direction) {
    case Direction.LEFT:
      board = flip(board);
      break;
    case Direction.UP:
      board = transpose(board);
      board = flip(board);
      break;
    case Direction.DOWN:
      board = transpose(board);
      break;
  }

  let changed = false;
  for (let row = 0; row < board.length; row++) {
    for (let col = board[row].length - 1; col >= 0; col--) {
      const current = board[row][col];
      if (current && col > 0) {
        const previous = board[row][col - 1];
        if (previous && current === previous) {
          board[row][col] += 1;
          board[row][col - 1] = 0;
          changed = true;
        }
      }
    }
  }

  switch (direction) {
    case Direction.LEFT:
      board = flip(board);
      break;
    case Direction.UP:
      board = flip(board);
    case Direction.DOWN:
      board = transpose(board);
      break;
  }

  return { board, changed };
}
