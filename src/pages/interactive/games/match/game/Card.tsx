import Image from 'next/image';
import React from 'react'
import { ICard } from '../../../../../types/games/match/card';

type Props = {
  card: ICard;
  status: 'flipped' | 'matched' | 'unmatched';
  onClick: (card: ICard) => void;
}

const Card = (props: Props) => {


  const handleClick = () => {
    props.onClick(props.card);
  };

  const buildClasses = () => {

    const classes = ['match-card', 'bg-white', 'rounded-md', 'shadow-md', 'flex', 'flex-col', 'items-center', 'justify-center', 'cursor-pointer', 'transform', 'transition-transform', 'duration-500', 'ease-in-out', 'p-8'];

    if (props.status === 'matched') {
      classes.push('matched');
    }

    if (props.status === 'unmatched') {
      classes.push('unmatched');
      classes.push('cursor-pointer');
    };

    return classes.join(' ');
  }

  const render = () => (
    <div className={buildClasses()} onClick={() => { handleClick() }}>
      {props.status === "flipped" || props.status === "matched" ? (<div className='card-front'>
        front {props.card.value} {props.card.suit}
      </div>) : (<div className='card-back'>
        back
      </div>)}
    </div>
  );

  return render();
}

export default Card