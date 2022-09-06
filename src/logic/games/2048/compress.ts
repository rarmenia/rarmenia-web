import BoardState from '../../../types/games/2048/BoardState';
import Direction from '../../../types/games/2048/Direction';
import NextBoardState from '../../../types/games/2048/NextBoardState';
import { flip } from './flip';
import { transpose } from './transpose';

export function compress(
  direction: Direction,
  board: BoardState
): NextBoardState {
  let changed = false;
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

  board = board.map((row) => {
    const removed = row.filter((val) => val !== 0);
    let result = row;
    if (row.length !== removed.length) {
      const diff = row.length - removed.length;
      result = [...Array(diff).fill(0), ...removed];
      changed = true;
    }
    // changed  changed || !this.checkArraySame(row, result);
    return result;
  });

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
