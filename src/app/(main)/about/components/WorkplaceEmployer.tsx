import GlassCard from "@/components/containers/GlassCard";
import Timeframe from "@/components/display/Timeframe";
import { TimeframeStorge } from "@/types/timeframe";
import Location from '@/components/display/Location'

type WorkplaceEmployerProps = {
  name: string,
  location: string,
  timeframe: TimeframeStorge,
}

const WorkplaceEmployer = (props: WorkplaceEmployerProps) => {

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

export default WorkplaceEmployer;
