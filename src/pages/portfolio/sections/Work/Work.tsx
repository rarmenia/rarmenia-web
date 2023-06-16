import GlassCard from '@components/cards/GlassCard';
import { Workplace } from '@models/workplace';
import WorkCard from './WorkCard/WorkCard';

interface Props {
  workplaces?: Workplace[];
}

const Work = (props: Props) => {


  return (
    <div id='work' className='flex flex-col gap-6 items-center'>
      <GlassCard className='text-white text-2xl/none px-8 py-2 rounded-sm font-mono'>Work Experience</GlassCard>
      <div className='flex flex-col items-center w-full'>
        {!props.workplaces && <WorkCard />}
        {props.workplaces && props.workplaces.map((work, ind) => <WorkCard key={ind} work={work} />)}
      </div>
    </div>
  );

}

export default Work;