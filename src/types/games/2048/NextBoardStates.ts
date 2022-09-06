import Direction from './Direction';
import NextBoardState from './NextBoardState';

type NextBoardStates = {
  [key in Direction]: NextBoardState;
};

export default NextBoardStates;
