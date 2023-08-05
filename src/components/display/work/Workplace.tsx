import { WorkplaceStorage } from "@/types/work/workplace";
import Position from "./Position";
import Employer from "./Employer";

type WorkplaceProps = { workplace: WorkplaceStorage }

const Workplace = ({ workplace }: WorkplaceProps) => {
  return (
    <div className="flex flex-col gap-2 w-fit">
      <Employer
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
