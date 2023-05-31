import { Workplace } from "@models/workplace";
import PositionDisplay from "../../Supporting/PositionDisplay";

interface Props {
  work?: Workplace;
}

const PositionsPanel = (props: Props) => {

  return (<div className="flex flex-col gap-4 items-center p-4">
    {props.work && props.work.positions.map((position, index) => <PositionDisplay position={position} key={index} />)}
    {!props.work && <PositionDisplay position={undefined} />}
  </div>)

}

export default PositionsPanel;