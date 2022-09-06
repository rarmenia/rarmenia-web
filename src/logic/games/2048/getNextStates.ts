import BoardState from '../../../types/games/2048/BoardState';
import Direction from '../../../types/games/2048/Direction';
import NextBoardStates from '../../../types/games/2048/NextBoardStates';
import { move } from './move';

export function getNextStates(board: BoardState): NextBoardStates {
  return {
    [Direction.UP]: move(Direction.UP, board),
    [Direction.RIGHT]: move(Direction.RIGHT, board),
    [Direction.DOWN]: move(Direction.DOWN, board),
    [Direction.LEFT]: move(Direction.LEFT, board),
  };
}
