interface Props {
  icon: React.ReactNode;
  text: string;
  title: string;
  opacity?: number;
}

const InfoCard = (props: Props) => {
  return (
    <div className="flex flex-row gap-4 text-white items-center w-full" title={props.title} style={{
      opacity: `${props.opacity ?? 100}%`
    }}>
      <div className="bg-stone-300/20 backdrop-blur-lg border-stone-100/20 rounded-full p-2">
        <div className="h-6 w-6" children={props.icon} />
      </div>
      <div className="bg-stone-300/20 backdrop-blur-lg border-stone-100/20 rounded-full h-full flex flex-col items-center p-2 flex-grow">
        <div className="h-6 pt-1 text-xs font-mono" children={props.text} />
      </div>
    </div>
    // <div className="bg-stone-300/20 backdrop-blur-lg border-stone-100/20 rounded-md flex flex-row gap-4 text-xl items-center border my-2 py-2 px-10 text-white">
    //   <div className="h-6 w-6" children={props.icon} />
    //   <div className="mt-1 text-lg text-center w-full" children={props.text} />
    // </div>
  );
}

export default InfoCard;
