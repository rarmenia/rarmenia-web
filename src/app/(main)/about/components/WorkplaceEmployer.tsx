import GlassCard from "@/components/containers/GlassCard";
import { LocationStorgae } from "@/types/location";

type WorkplaceEmployerProps = {
  name: string,
  location: LocationStorgae,
}

const WorkplaceEmployer = (props: WorkplaceEmployerProps) => {

  return (
    <GlassCard>
      <div className="flex flex-col p-4">
        <div className="flex flex-row space-between">
          <div>Employer Name</div>
          <div>Timeframe</div>
        </div>
        <div>Location</div>
      </div>
    </GlassCard>
  )

}

export default WorkplaceEmployer;
