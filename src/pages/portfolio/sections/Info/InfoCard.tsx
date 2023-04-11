interface Props {
  icon: React.ReactNode;
  text: string;
  title: string;
  isVisible: boolean;
}

const InfoCard = (props: Props) => {
  return (
    <div className={"flex flex-row gap-4 text-white items-center w-full".concat(' ', props.isVisible ? 'animate-[fade-in_1300ms_ease-in_5ms_forwards]' : 'opacity-0')} title={props.title}>
      <div className="bg-stone-300/20 backdrop-blur-lg border-stone-100/20 rounded-full p-2">
        <div className="h-6 w-6">
          {props.icon}
        </div>
      </div>
      <div className="bg-stone-300/20 backdrop-blur-lg border-stone-100/20 rounded-full h-full flex flex-col items-center p-2 flex-grow">
        <div className="h-6 pt-1 text-xs font-mono">
          {props.text}
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
