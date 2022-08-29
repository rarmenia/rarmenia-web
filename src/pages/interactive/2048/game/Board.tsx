import React from 'react'
import { rgbToHsl } from 'tsparticles-engine';
import Tile from './Tile';

type Props = {
  state: number[][];
}

const Board = (props: Props) => {
  return (
    <div className={`board-container grid place-items-center my-6`} >
      <div className={`board p-4 flex flex-col gap-4 rounded-md`} style={{
        backgroundColor: 'rgb(161, 147, 131)'
      }}>
        {
          props.state.map((row, y) => (
            <div key={y} className={'flex flex-row gap-4'}>
              {row.map((col, x) => (<Tile key={`(${x}, ${y})`} power={col} />))}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Board