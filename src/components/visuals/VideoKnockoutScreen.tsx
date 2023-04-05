import ContentPlacer from "components/processors/ContentPlacer";
import ScreenSize from "components/providers/ScreenSize";

interface Props {
  src: string;
  aspectRatio?: number,
  fallback?: React.ReactNode;
  children: React.ReactNode
  fix?: boolean;
}


const VideoKnockoutScreen = (props: Props) => {


  const render = () => (
    <div className="w-screen h-screen relative overflow-hidden">
      <div className="h-full w-full overflow-hidden absolute top-0 left-0">
      </div>
      <div className="absolute inset-0 bg-black opacity-90 grid place-items-center mix-blend-multiply text-white font-black">
        {props.children}
      </div>
    </div>
  );

  return render();

}

export default VideoKnockoutScreen;
