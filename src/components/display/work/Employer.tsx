import GlassCard from "@/components/containers/GlassCard";
import Location from "../information/Location";
import Timeframe from "../information/Timeframe";
import { WorkplaceStorage } from "@/types/about/work/workplace";


const Employer = (props: WorkplaceStorage) => {

  return (
    <GlassCard>
      <div className="flex flex-col p-2">
        <div className="flex flex-row w-full justify-between items-center">
          <div>{props.name}</div>
          <div><Timeframe {...props.timeframe} hideDay /></div>
        </div>
        <div>
          <Location location={props.location} />
        </div>
      </div>
    </GlassCard>
  )

}

export default Employer;
