import { Team } from './team';
import { Position } from './position';
import { Project } from './project';
import { ImageInfo } from './image-info';

export interface Workplace {
  employer: [string] | [string, string];
  location: (string | string[])[];
  frame: [string] | [string, string];
  blurbTarget?: string;
  cover?: ImageInfo;
  teams: Team[];
  positions: Position[];
  projects: Project[];
}
