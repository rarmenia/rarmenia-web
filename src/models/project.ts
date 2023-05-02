import { Stack } from './stack';

export interface Project {
  name: [string] | [string, string];

  frame: [string] | [string, string];

  technologies: Stack;
}
