import React from 'react'
import { hslToRgb, rgbToHsl } from 'tsparticles-engine';

type Props = {
  power: number;
}

const Tile = (props: Props) => {

  const colorMap: { [key: number]: number[] } = {
    0: [188, 176, 162],
    1: [238, 228, 218],
    2: [237, 224, 200],
    3: [242, 177, 121],
    4: [245, 149, 99],
    5: [246, 124, 95],
    6: [246, 94, 59],
    7: [237, 207, 114],
    8: [237, 204, 97],
    9: [237, 200, 80],
    10: [237, 197, 63],
    11: [237, 194, 46],
  }

  const getTileColor = () => {

    const r = colorMap[props.power] ?? undefined;
    if (r) return r;

    const lastKnown = colorMap[11];
    const hsl = rgbToHsl({ r: lastKnown[0], g: lastKnown[1], b: lastKnown[2] });

    const dif = props.power - 11;
    const deg = hsl.h + (dif * 4.5);
    const dispayDeg = Math.min(290, deg);
    const l = deg > dispayDeg ? Math.max(0, hsl.l - (dif * .3)) : hsl.l

    const rgb = hslToRgb({
      h: dispayDeg,
      s: hsl.s,
      l
    });

    return [rgb.r, rgb.g, rgb.b];
  };


  const [bgR, bgG, bgB] = getTileColor();
  const textColor = props.power <= 2 ? 'text-slate-700' : 'text-slate-50';

  return (
    <div className={`tile w-32 h-32 grid place-items-center rounded-sm ${textColor} text-lg font-bold`} style={
      {
        backgroundColor: `rgb(${bgR ?? 0}, ${bgG ?? 0}, ${bgB ?? 0})`
      }
    }>
      {
        !props.power ? '' :
          props.power < 32 ? Math.pow(2, props.power) : `2^${props.power}`
      }
    </div>
  )
}

export default Tile