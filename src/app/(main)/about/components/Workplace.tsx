import Position from "./Position";
import Employer from "./Employer";
import { WorkplaceStorage } from "@/types";

type WorkplaceProps = { workplace: WorkplaceStorage }

const Workplace = ({ workplace }: WorkplaceProps) => {
  return (
    <div className="flex flex-col gap-2 w-fit">
      <Employer {...workplace} />
      <div className="flex flex-row gap-2">
        {workplace.positions.map((position, ind) => (
          <Position position={position} key={ind} />
        ))}
      </div>
    </div>
  );
}

export default Workplace;
