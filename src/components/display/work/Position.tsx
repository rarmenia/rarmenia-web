import GlassCard from "@/components/containers/GlassCard";
import { PositionStorge } from "@/types/about/work/position"
import Timeframe from "../information/Timeframe";
import KeyExperience from "../information/KeyExperience";

type PositionProps = {
  position: PositionStorge;
}


const Position = ({ position }: PositionProps) => {
  return (
    <GlassCard>
      <div className="w-[22rem] min-w-[22rem] h-32 p-2 flex flex-col gap-2 grow">
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
