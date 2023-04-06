import { useState, useEffect } from "react";

interface Props {
  children: (position: number) => JSX.Element
}

const ScrollPosition = (props: Props) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (<>{props.children(scrollPosition)}</>)
}

export default ScrollPosition;
