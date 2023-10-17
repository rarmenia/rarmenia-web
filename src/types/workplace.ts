import { TimeframeStorage } from "@/types/timeframe";
import { PositionStorge } from "./position";

export type WorkplaceStorage = {
  name: string;
  location: string,
  timeframe: TimeframeStorage,

  positions: PositionStorge[];
}
