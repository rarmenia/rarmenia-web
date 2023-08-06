import GlassCard from "@/components/containers/GlassCard";
import { PositionStorge } from "@/types/work/position"
import { SparklesIcon } from "@heroicons/react/24/solid";
import Timeframe from "../information/Timeframe";

type PositionProps = {
  position: PositionStorge;
}

const KeyExperience = ({ display }: { display: string }) => {
  return (
    <div className="text-yellow-500 flex flex-row gap-2 items-center" title="Key Experience">
      <SparklesIcon className="h-6" />
      <div className="font-mono text-base">{display}</div>
    </div>
  )
}

const Position = ({ position }: PositionProps) => {
  return (
    <GlassCard>
      <div className="w-[22rem] h-32 p-2 flex flex-col gap-2">
        <div className="flex flex-row w-full justify-between items-center">
          <div>{position.title}</div>
          <div><Timeframe {...position.timeframe} hideDay /></div>
        </div>
        <KeyExperience display={position.keyExperience} />
        <div className="text-xs italic text-white/40">{position.description}</div>
      </div>
    </GlassCard>
  )
}

export default Position;
