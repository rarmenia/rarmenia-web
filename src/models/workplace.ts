import { ImageProps } from 'next/image';
import { Team } from './team';
import { Position } from './position';
import { Project } from './project';

export interface Workplace {
  employer: [string] | [string, string];
  location: (string | string[])[];
  frame: [string] | [string, string];
  cover: ImageProps;
  teams: Team[];
  positions: Position[];
  projects: Project[];
}
