import {Timeframe} from './timeframe';

export interface Project {

  name: string;
  description: string;
  role?: string;
  duties?: string[];
  technologies?: string[];
  timeframe?: Timeframe;

}
