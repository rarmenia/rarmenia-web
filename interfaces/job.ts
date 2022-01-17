import {Timeframe} from './timeframe';
import {Project} from './project';

export interface Job {
  employer: string;
  division: string;
  team: string;
  title: string;
  blurb: string;
  employment: Timeframe;
  projects: Project[];
}
