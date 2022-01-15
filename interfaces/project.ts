import {Timeframe} from './timeframe';

export interface Project {

  name: string;
  description: string;
  role: string;
  technologies: string[];
  timeframe: Timeframe;
  duties: string[];

}
