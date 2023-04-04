import ContentPlacer from "components/processors/ContentPlacer";
import ScreenSize from "components/providers/ScreenSize";

interface Props {
  src: string;
  aspectRatio?: number,
  fallback?: React.ReactNode;
  children: React.ReactNode
}


const VideoKnockoutScreen = (props: Props) => {


  const render = () => (
    <div className="w-screen h-screen relative overflow-hidden">
      <div className="h-full w-full overflow-hidden absolute top-0 left-0">
        <ScreenSize>
          {(dim) => (
            <ContentPlacer space={dim} aspect={props.aspectRatio ?? (16 / 9)}>
              {(dimOff) => (
                <>
                  <object data={props.src} className="absolute" style={
                    {
                      ...dimOff,
                      minHeight: dimOff.height,
                      minWidth: dimOff.width
                    }
                  } />
                </>
              )}
            </ContentPlacer>
          )}
        </ScreenSize>
      </div>
      <div className="absolute inset-0 bg-black opacity-90 grid place-items-center mix-blend-multiply text-white font-black">
        {props.children}
      </div>
    </div>
  );

  return render();

}

export default VideoKnockoutScreen;