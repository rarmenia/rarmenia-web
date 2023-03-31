import { useEffect, useState } from "react";

interface Props {
  src: string;
  aspectRatio?: number,
  fallback?: React.ReactNode;
  children: React.ReactNode
}

interface Dimensions { width: number, height: number, top: number, left: number }

const VideoKnockoutScreen = (props: Props) => {

  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0, top: 0, left: 0 });

  useEffect(() => {

    const calculateDimensions = (
      availableWidth: number,
      availableHeight: number,
      contentAspectRatio: number = 16 / 9
    ): Dimensions => {
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



    setDimensions(calculateDimensions(window.innerWidth, window.innerHeight, props.aspectRatio));

    const updateDimensions = () => {
      setDimensions(calculateDimensions(window.innerWidth, window.innerHeight, props.aspectRatio));
    }

    window.addEventListener('resize', updateDimensions);

    return () => { window.removeEventListener('resize', updateDimensions) }


  }, []);

  const render = () => (
    <div className="w-screen h-screen relative overflow-hidden">
      <div className="h-full w-full overflow-hidden absolute top-0 left-0">
        <object data={props.src} className="absolute" style={{
          width: dimensions.width,
          height: dimensions.height,
          top: dimensions.top,
          left: dimensions.left
        }} />
        {props.fallback}
      </div>
      <div className="absolute inset-0 bg-black opacity-90 grid place-items-center mix-blend-multiply text-white font-black">
        {props.children}
      </div>
    </div>
  );

  return render();

}

export default VideoKnockoutScreen;
