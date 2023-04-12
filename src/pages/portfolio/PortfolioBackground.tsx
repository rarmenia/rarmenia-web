import ScreenBackground from "components/visuals/ScreenBackground";

interface Props {

  opacity?: number;
  multiplyContent?: React.ReactNode;

  video: string;
  img?: string;
  aspect: number;

}

const PortfolioBackground = (props: Props) => {

  return (

    <div className="fixed h-screen w-screen z-0 isolate">
      <div className="z-0 inset-0 absolute h-screen w-screen">
        <ScreenBackground video={props.video} img={props.img} aspectRatio={props.aspect} />
      </div>

      <div className="z-10 bg-stone-300/5 backdrop-blur-md absolute inset-0" />
      <div className="z-20 bg-black/80 absolute mix-blend-multiply inset-0">
        {props.multiplyContent ?? <></>}
      </div>

    </div>

  )

}

export default PortfolioBackground;
