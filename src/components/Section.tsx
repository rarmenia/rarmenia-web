import React, { Dispatch, SetStateAction, useRef } from 'react';
// import useOnScreen from '../hooks/OnScreen';
import TagWrapper from './TagWrapper';

type Props = {
  id: string;
  tag: string;
  bg: string;
  children: React.ReactNode;
  isVisible?: Dispatch<SetStateAction<boolean>>;
};

const Section = (props: Props) => {
  const componentRef = useRef();
  // const isVisible = useOnScreen(componentRef, props.isVisible);

  return (
    <div id={props.id} className={`${props.bg} min-h-screen flex flex-col`}>
      <TagWrapper tag={props.tag} className="p-2">
        {props.children}
      </TagWrapper>
    </div>
  );
};

export default Section;
