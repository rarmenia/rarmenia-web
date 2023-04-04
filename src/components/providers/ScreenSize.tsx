import { useEffect, useState } from "react";

interface Dimensions {
  width: number;
  height: number;
}

interface Props {
  children: (dimensions: Dimensions) => JSX.Element;
}


const ScreenSize = (props: Props) => {

  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener('resize', updateDimensions);

    return () => { window.removeEventListener('resize', updateDimensions) }

  }, [])

  return (<> {props.children(dimensions)} </>)


}

export default ScreenSize;
