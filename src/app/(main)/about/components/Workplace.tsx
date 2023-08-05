import { WorkplaceStorage } from "@/types/work/workplace";
import WorkplaceEmployer from "./WorkplaceEmployer";
import Position from "./Position";

type WorkplaceProps = { workplace: WorkplaceStorage }

const Workplace = ({ workplace }: WorkplaceProps) => {
  return (
    <div className="flex flex-col gap-2 w-fit">
      <WorkplaceEmployer
        name={workplace.name}
        timeframe={workplace.timeframe}
        location={workplace.location}
      />
      <div className="flex flex-row gap-2">
        {workplace.positions.map((position, ind) => (
          <Position position={position} key={ind} />
        ))}
      </div>
    </div>
  );
}

export default Workplace;
