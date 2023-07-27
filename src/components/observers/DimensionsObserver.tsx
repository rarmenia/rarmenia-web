import { Dimensions } from "@/types/dimensions"
import React, { useState, useRef, useEffect } from "react";

type DimensionProps = {
  children: (dimension?: Dimensions) => React.ReactNode; 
}


/**
 * Observes the width and height of the component and provides them as render props.
 * 
 * Ensure that this element is placed inside a properly sized element, do not apply margin to this element.
 */
const DimensionsObserver = (props: DimensionProps) => {

  const [dimensions, setDimensions] = useState<Dimensions | undefined>(undefined);
  const containerRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
 
  const updateDimensions = () => {
    if (!containerRef.current) { return; }
    const {clientWidth, clientHeight} = containerRef.current;
    setDimensions({width: clientWidth, height: clientHeight});
  }

  useEffect( () => {
    updateDimensions();

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    }

  },)

  return (
    <div className="h-full w-full" ref={containerRef}> 
      {props.children(dimensions)}
    </div>
  );
}

export default DimensionsObserver;
