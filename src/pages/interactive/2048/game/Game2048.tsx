import _ from 'lodash';
import React, { Component } from 'react'
import Board from './Board';

type Props = {
  shape: number | [number, number];
}

type State = {
  board: number[][];
}

class Game2048 extends Component<Props, State> {

  shape: { rows: number, cols: number };



  constructor(p: Props) {
    super(p);
    const [rows, cols] = Array.isArray(p.shape) ? p.shape : [p.shape, p.shape];
    this.shape = { rows, cols };
    this.state = {
      board: Array(rows).fill(Array(cols).fill(0)),
    };

    this.handlePressEvent = this.handlePressEvent.bind(this);
  }

  componentDidMount() {
    this.addTile(2);
    document.addEventListener('keydown', this.handlePressEvent)
  }

  render() {
    return (
      <div className={`game-container`}>
        <Board state={this.state.board} />
      </div>
    )
  }

  private handlePressEvent(event: KeyboardEvent) {
    const allowedKeys = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];
    if (!allowedKeys.includes(event.key)) return;
    const compress = (board?: number[][]) => {
      switch (event.key) {
        case 'ArrowUp':
          return this.handleVerticleCompress(true, board);
        case 'ArrowRight':
          return this.handleHorizontalCompress(false, board);
        case 'ArrowDown':
          return this.handleVerticleCompress(false, board);
        case 'ArrowLeft':
          return this.handleHorizontalCompress(true, board);
      }
      return [undefined, undefined]
    }

    const merge = (board?: number[][]) => {
      switch (event.key) {
        case 'ArrowUp':
          return this.handleVerticleMerge(true, board);
        case 'ArrowRight':
          return this.handleHorizontalMerge(false, board);
        case 'ArrowDown':
          return this.handleVerticleMerge(false, board);
        case 'ArrowLeft':
          return this.handleHorizontalMerge(true, board);
      }
      return [undefined, undefined]
    }

    const [c1Board, c1Changed] = compress();
    if (c1Changed && c1Board) {
      this.setState({ board: c1Board })
      // const [m1Board, m1Changed] = merge();
      // console.log({ m1Board, m1Changed })
      // Do Merge
      // If Merged doSecondary Compress
    }
  }

  private checkArraySame(arrLeft: number[], arrRight: number[]): boolean {
    if (arrLeft.length === arrRight.length) {
      return arrLeft.every((element, index) => element === arrRight[index]);
    }
    return false;
  }

  private handleCompress(board: number[][]): [number[][], boolean] {
    let changed = false;
    board = JSON.parse(JSON.stringify(board));

    board = board.map(row => {
      const removed = row.filter(val => val !== 0);
      let result = row;
      if (row.length !== removed.length) {
        const diff = row.length - removed.length;
        result = [...Array(diff).fill(0), ...removed];
      }
      changed = changed || !this.checkArraySame(row, result);
      return result;
    })

    return [board, changed];
  }

  private handleMerge(board: number[][]): [number[][], boolean] {
    let changed = false;
    board = JSON.parse(JSON.stringify(board));


    return [board, changed];
  }

  private flip(board: number[][]): number[][] {
    return board.map(row => row.reverse());
  }
  private transpose(board: number[][]) {
    return board[0].map((_, colIndex) => board.map(row => row[colIndex]));
  }

  private handleHorizontalCompress(isLeft: boolean, board?: number[][]): [number[][], boolean] {

    board = board ? board : this.getSafeBoard();
    board = isLeft ? this.flip(board) : board;
    const [shift, changed] = this.handleCompress(board);
    return [isLeft ? this.flip(shift) : shift, changed]
  }

  private handleHorizontalMerge(needsReversal: boolean, board?: number[][]): [number[][], boolean] {
    board = board ? board : this.getSafeBoard();
    let changed = false;
    let final = board.map(_ => {
      const row = needsReversal ? _.reverse() : _;
      for (let i = row.length - 1; i >= 0; i--) {
        const curr = row[i];
        const prev = row[i - 1];
        if (prev && prev === curr) {
          row[i - 1] = 0;
          row[i] = curr + 1;
        }
      }
      return row;
    });

    if (needsReversal) {
      final = final.map(_ => _.reverse());
    }

    return [final, changed];
  }

  private handleVerticleCompress(isUp: boolean, board?: number[][]): [number[][], boolean] {
    board = board ? board : this.getSafeBoard();
    board = this.transpose(board);
    board = isUp ? this.flip(board) : board;
    let [shift, changed] = this.handleCompress(board);

    shift = isUp ? this.flip(shift) : shift;
    shift = this.transpose(shift);

    return [shift, changed]
  }

  private handleVerticleMerge(isUp: boolean, board?: number[][]): [number[][], boolean] {
    board = board ? board : this.getSafeBoard();
    return [board, false];
  }

  private getSafeBoard(): number[][] { return JSON.parse(JSON.stringify(this.state.board)) }

  private getEmptyTiles(board?: number[][]) {
    return (board ?? this.getSafeBoard()).map((_1, row) => _1.map((val, col) => ({ val, row, col })).filter(_ => _.val === 0)).reduce((a, c) => [...a, ...c], []);
  }

  private addTile(count: number = 1): boolean {

    const board: number[][] = this.getSafeBoard();

    let iter = 0;
    while (iter < count) {
      const emptyTiles = this.getEmptyTiles(board);
      if (!emptyTiles || emptyTiles.length === 0) return false;
      const chosen = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
      board[chosen.row][chosen.col] = Math.random() <= .9 ? 1 : 2;
      iter++;
    }


    this.setState({ board });
    return true;
  }


}

export default Game2048