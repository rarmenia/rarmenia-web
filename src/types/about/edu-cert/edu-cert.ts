import { TimeframeStorage } from "@/types/timeframe";
import { EduCertType } from "./edu-cert-type";

export type EduCertStorage = {
  type: EduCertType;
  source: string;
  location: string;
  timeframe: TimeframeStorage;
  classification: string;
  area: string;
}
