import { useState } from "react";

interface Props {
  icon: React.ReactNode;
  text: string;
  title: string;
  isVisible: boolean;
}

const InfoCard = (props: Props) => {

  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <button
      className={`flex flex-row gap-4 text-white items-center w-full ${props.isVisible ? 'animate-[fade-in_1300ms_ease-in_5ms_forwards]' : 'opacity-0'}`}
      title={props.title}
      onClick={() => setExpanded((current) => !current)}
    >
      <div className="bg-stone-300/20 backdrop-blur-lg border-stone-100/20 rounded-full p-2 shadow-sm h-8 flex flex-row">

        <div className="h-4 w-4">
          {props.icon}
        </div>


        <div className={`text-xs font-mono  transition-all ${expanded ? 'w-auto ml-2' : 'w-0'} overflow-hidden`} aria-hidden={!expanded}>{props.title}</div>

      </div>
      <div className="bg-stone-300/20 backdrop-blur-lg border-stone-100/20 rounded-full h-full flex flex-col items-center p-2 flex-grow shadow-sm transition-all">
        <div className="h-6 pt-1 text-xs font-mono">
          {props.text}
        </div>
      </div>
    </button>
  );
}

export default InfoCard;
