import { LocationStorage } from "../location";
import { TimeframeStorge } from "../timeframe";
import { PositionStorge } from "./position";

export type WorkplaceStorage = {
  name: string;
  location: string,
  timeframe: TimeframeStorge,

  positions: PositionStorge[];
}
