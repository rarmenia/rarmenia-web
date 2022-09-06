import BoardState from './BoardState';

type NextBoardState = {
  board: BoardState;
  changed: boolean;
};

export default NextBoardState;
