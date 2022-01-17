import React from 'react';

interface Props {
  children: React.ReactNode,
  className?: string
}

function Card(props: Props): JSX.Element {

  return (
    <div className={
      'w-full min-w-full h-full min-h-full bg-white shadow-stone-700 shadow-md drop-shadow flex flex-col ' + props.className ?? ''}>
      {props.children}
    </div>
  )

}

export default Card;
