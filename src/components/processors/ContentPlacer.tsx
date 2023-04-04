interface Dimensions {
  width: number;
  height: number;
}

interface Offset {
  top: number;
  left: number;
}

type DimOffset = Dimensions & Offset;

interface Props {

  space: Dimensions;
  aspect: number;

  scaleToFill?: boolean;
  centerContent?: boolean;

  children: (dimOff: DimOffset) => JSX.Element;

}

const ContentPlacer = (props: Props) => {

  const calcContentDimensionsFit = (available: Dimensions, contentAspect: number): Dimensions => {
    const byWidth = (available.width / available.height) > contentAspect;
    return {
      width: Math.max(Math.ceil(contentAspect), available.width * (byWidth ? contentAspect : 1)),
      height: Math.max(Math.ceil(contentAspect), available.height / (byWidth ? 1 : contentAspect))
    }
  }

  const calcContentDimensionsCover = (available: Dimensions, content: Dimensions): Dimensions => {
    const scale = Math.max(available.width / content.width, available.height / content.height);
    return {
      width: content.width * scale,
      height: content.height * scale,
    }
  }

  const calcContentOffset = (available: Dimensions, content: Dimensions): Offset => {
    return {
      top: (available.height - content.height) / 2,
      left: (available.width - content.width) / 2
    }
  }

  const calcDimensionsAndOffset = (available: Dimensions, contentAspect: number = 16 / 9): DimOffset => {
    const fit = calcContentDimensionsFit(available, contentAspect);
    const scaled = calcContentDimensionsCover(available, fit);
    const centerOffset = calcContentOffset(available, props.scaleToFill ? scaled : fit);
    return { ...(props.scaleToFill ? scaled : fit), ...(props.centerContent ? centerOffset : { top: 0, left: 0 }) };
  }

  return (<>{props.children(calcDimensionsAndOffset(props.space, props.aspect))}</>)
}


export default ContentPlacer;
