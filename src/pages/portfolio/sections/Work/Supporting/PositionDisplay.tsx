import GlassCard from "@components/cards/GlassCard";
import AbbrOrText from "@components/data-display/AbbrOrText";
import TimeFrame from "@components/data-display/TimeFrame";
import { Position } from "@models/position";

interface Props {
  position?: Position
}

const PositionDisplay = (props: Props) => (
  <GlassCard className="w-11/12 p-2 rounded-md">
    <div className="text-lg/none text-sky-400"><AbbrOrText data={props.position?.title} /></div>
    <TimeFrame className="italic text-sm/none text-white/90" frame={props.position?.frame} />
  </GlassCard>
);

export default PositionDisplay;