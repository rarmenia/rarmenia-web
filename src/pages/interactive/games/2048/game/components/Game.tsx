import React, { useEffect, useRef, useState } from 'react';
import {
  addTiles,
  getScore,
  isBoardPlayable,
  move,
} from '../../../../../../logic/games/2048';
import { resolveKeyPressToDirection } from '../../../../../../types/games/2048';
import BoardState from '../../../../../../types/games/2048/BoardState';
import Board from './Board';

type Props = {
  shape: number | [number, number];
};

const MenuButton = (props: {
  isActive: boolean;
  text: string;
  action?: () => void;
}) => {
  const render = () => (
    <button
      className={`text-white font-bold py-2 px-6 rounded-md ${
        props.isActive
          ? 'bg-tfe hover:bg-tfe-dark'
          : 'bg-tfe-light cursor-not-allowed'
      } `}
      onClick={() => (props.action ? props.action() : {})}
    >
      {props.text}
    </button>
  );
  return render();
};

const Score = (props: {
  score: number | undefined;
  type: 'current' | 'best';
}) => {
  const render = () => (
    <div className="flex flex-row items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center py-2 px-8 text-white font-bold rounded-md bg-tfe">
        <div>{props.type === 'current' ? 'Score' : 'Best'}</div>
        <div>{props.score === undefined ? '?' : props.score}</div>
      </div>
    </div>
  );

  return render();
};

const Game = (props: Props) => {
  const [rows, cols] = Array.isArray(props.shape)
    ? props.shape
    : [props.shape, props.shape];

  const getEmptyBoard = (): BoardState => {
    return Array(rows).fill(Array(cols).fill(0));
  };

  const [board, setBoard] = useState<BoardState>(getEmptyBoard());
  const [boardPlayable, setBoardPlayable] = useState<boolean>(true);
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number | undefined>(undefined);
  const [history, setHistory] = useState<BoardState[]>([]);

  const boardRef = useRef(board);
  const bestScoreRef = useRef(bestScore);

  const doUpdate = (
    nextBoard: BoardState,
    clearHistory?: boolean,
    nextHistory?: BoardState[]
  ) => {
    if (clearHistory) {
      setHistory([]);
    } else {
      setHistory((h) => [...h, boardRef.current]);
    }

    if (nextHistory) {
      setHistory(nextHistory);
    }

    setBoard(nextBoard);
    setBoardPlayable(isBoardPlayable(nextBoard));

    const currentScore = getScore(nextBoard);
    setScore(currentScore);

    let bestScore = Math.max(
      currentScore,
      bestScoreRef.current === undefined
        ? getBestScoreLocal()
        : bestScoreRef.current
    );
    localStorage.setItem('2048.best', bestScore.toString());
    setBestScore(bestScore);
  };

  const initializeBoard = () => {
    const emptyBoard = getEmptyBoard();
    const initialAdd = addTiles(emptyBoard, 2);
    if (initialAdd.changed) {
      doUpdate(initialAdd.board, true);
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (!boardPlayable) return;

    const direction = resolveKeyPressToDirection(event);
    if (direction === undefined) {
      if (event.code === 'KeyZ' && event.ctrlKey) {
        setTimeout(() => handleUndo(), 1);
      }
      return;
    }

    const moveBoard = move(direction, boardRef.current);
    if (moveBoard.changed) {
      doUpdate(moveBoard.board);
    }
  };

  const handleReset = () => {
    initializeBoard();
  };

  const handleUndo = () => {
    if (history.length < 1) return;
    const lastState = history[history.length - 1];
    const updHistory = history.slice(0, history.length - 1);
    doUpdate(lastState, true, updHistory);
  };

  const getBestScoreLocal = () => {
    const bestScoreQuery = localStorage.getItem('2048.best');
    if (bestScoreQuery) {
      const bestScoreProcessed = Number(bestScoreQuery);
      return bestScoreProcessed;
    }
    return 0;
  };

  const updateBestScore = () => {
    const bestScoreTemp = getBestScoreLocal();
    setBestScore(bestScoreTemp);
  };

  useEffect(() => {
    boardRef.current = board;
  }, [board]);

  useEffect(() => {
    bestScoreRef.current = bestScore;
  }, [bestScore]);

  useEffect(() => {
    updateBestScore();
    initializeBoard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const render = () => (
    <div className="w-full flex flex-col items-center mt-8">
      <div className="w-3/4 flex flex-row">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="text-6xl">R2048</div>
            <div className="mt-[-.5rem]">(A recreation of 2048)</div>
          </div>
          <div className="flex flex-col">
            <div>
              Join the tiles, get to <b>2048!</b>
            </div>
            <div>Read my write-up on developing this!</div>
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-row items-center justify-center gap-4">
            <Score score={score} type="current" />
            <Score score={bestScore} type="best" />
          </div>
          <div className="flex flex-row items-center justify-center gap-6">
            <MenuButton
              isActive={history.length > 0}
              action={handleUndo}
              text="Undo"
            />
            <MenuButton isActive={true} action={handleReset} text="New Game" />
          </div>
        </div>
      </div>
      <Board state={board} />
    </div>
  );

  return render();
};

export default Game;
