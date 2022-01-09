import React from 'react';

interface Props {
  children: React.ReactNode,
}

function Card(props: Props): JSX.Element {

  return (
    <div className={'w-full min-w-full h-full min-h-full bg-stone-100 shadow-stone-700 shadow-md drop-shadow flex flex-col'}>
      {props.children}
    </div>
  )

}

export default Card;
