import React from 'react';
import { rgbToHsl } from 'tsparticles-engine';
import Tile from './Tile';

type Props = {
  state: number[][];
};

const Rows = (state: number[][]) => {
  const render = () => (
    <>
      {state.map((tileRow, rowIndex) => (
        <div key={rowIndex} className="flex flex-row gap-4">
          {RowTiles(tileRow, rowIndex)}
        </div>
      ))}
    </>
  );

  return render();
};

const RowTiles = (tileRow: number[], rowIndex: number) => {
  const render = () => (
    <>
      {tileRow.map((tile, tileIndex) => (
        <Tile key={`(${tileIndex}, ${rowIndex})`} power={tile} />
      ))}
    </>
  );

  return render();
};

const Board = (props: Props) => {
  const render = () => (
    <div className={`board-container grid place-items-center my-6`}>
      <div
        className={`board p-4 flex flex-col gap-4 rounded-md`}
        style={{
          backgroundColor: 'rgb(161, 147, 131)',
        }}
      >
        {Rows(props.state)}
      </div>
    </div>
  );

  return render();
};

export default Board;
