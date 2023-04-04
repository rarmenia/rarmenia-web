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
    const scaleX = available.width / content.width;
    const scaleY = available.height / content.height;
    const scale = Math.max(scaleX, scaleY);
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

  const calcDimensionsAndOffset = (
    availableWidth: number,
    availableHeight: number,
    contentAspectRatio: number = 16 / 9
  ): DimOffset => {
    // Step 1: Calculate width and height respecting aspect ratio
    let width: number;
    let height: number;

    if (availableWidth / availableHeight > contentAspectRatio) {
      width = availableHeight * contentAspectRatio;
      height = availableHeight;
    } else {
      width = availableWidth;
      height = availableWidth / contentAspectRatio;
    }

    const smallestPossibleWidth = Math.ceil(contentAspectRatio);
    const smallestPossibleHeight = Math.ceil(1 / contentAspectRatio);

    if (width < smallestPossibleWidth || height < smallestPossibleHeight) {
      width = smallestPossibleWidth;
      height = smallestPossibleHeight;
    }

    // Step 2: Scale dimensions to fully cover available space
    const scaleX = availableWidth / width;
    const scaleY = availableHeight / height;
    const scale = Math.max(scaleX, scaleY);
    width *= scale;
    height *= scale;

    // Step 3: Calculate top and left to center content within available space
    const top = (availableHeight - height) / 2;
    const left = (availableWidth - width) / 2;

    return { width, height, top, left };
  };


  return (<>{props.children(calcDimensionsAndOffset(props.space.width, props.space.height, props.aspect))}</>)
}


export default ContentPlacer;
