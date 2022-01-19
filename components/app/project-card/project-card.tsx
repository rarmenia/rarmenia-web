import Card from "../../generics/card";
import {Project} from '../../../interfaces/project';
import ProjectInfo from './project-info';

export interface Props {
  project: Project;
}

export default function ProjectCard(props: Props): JSX.Element {
  return <Card className={'md:rounded-[.45rem] p-4 text-center'}>
    <ProjectInfo project={props.project} />
  </Card>;
}
