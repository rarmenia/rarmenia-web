import { EduCertType } from "./edu-cert-type";
import { TimeframeStorage } from "./timeframe";

export type EduCertStorage = {
  type: EduCertType;
  source: string;
  location: string;
  timeframe: TimeframeStorage;
  classification: string;
  area: string;
}
