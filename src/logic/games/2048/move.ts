import BoardState from '../../../types/games/2048/BoardState';
import Direction from '../../../types/games/2048/Direction';
import NextBoardState from '../../../types/games/2048/NextBoardState';
import { addTiles } from './addTiles';
import { compress } from './compress';
import { merge } from './merge';

export function move(direction: Direction, board: BoardState): NextBoardState {
  board = JSON.parse(JSON.stringify(board));

  const compress1 = compress(direction, board);
  const merge1 = merge(direction, compress1.board);
  const compress2 = compress(direction, merge1.board);
  const cmcChanged = compress1.changed || merge1.changed || compress2.changed;

  if (cmcChanged) {
    const add1 = addTiles(compress2.board, 1);
    return { board: add1.board, changed: cmcChanged || add1.changed };
  }

  return { board: compress2.board, changed: cmcChanged };
}
