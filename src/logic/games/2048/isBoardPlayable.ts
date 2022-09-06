import BoardState from '../../../types/games/2048/BoardState';
import { getNextStates } from './getNextStates';

export function isBoardPlayable(board: BoardState): boolean {
  const nextStates = getNextStates(board);
  return Object.values(nextStates).reduce(
    (acc, cur) => acc || cur.changed,
    false
  );
}
