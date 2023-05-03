import GlassCard from '@components/GlassCard';
import { Tab } from '@headlessui/react';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { Position } from '@models/position';
import { Workplace } from '@models/workplace';
import { fancyFrame } from '@utils/data-decode';
import Image from 'next/image';

interface Props {
  work: Workplace
}

const WorkImageCover = ({ work }: Props) => {

  const WorkImage = () => (
    <div className='absolute inset-0 -z-10'>
      <Image src={work.cover.src} alt={work.cover.alt ?? 'workplace img'} fill={true} className='object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.025] transition-all' />
    </div>
  );

  const InfoCover = () => (
    <div className='h-full w-full flex flex-col items-center justify-center bg-stone-950/30 backdrop-blur-[1px] group-hover:backdrop-blur-0 p-4'>
      <BuildingOffice2Icon className='h-10' />
      <div className='text-lg/none font-mono'><abbr title={work.employer[1] ?? work.employer[0]}>{work.employer[0]}</abbr></div>
      <div className='flex flex-row text-xs/none items-center my-2 gap-2 italic text-white/80'>
        {fancyFrame(work.frame)}
      </div>
    </div>
  );

  return (
    <div className='h-60 md:h-auto md:w-4/12 md:min-w-[18rem] relative isolate rounded-b-lg md:rounded-b-md md:rounded-r-md overflow-hidden shadow-sm shadow-stone-950/40'>
      <WorkImage />
      <InfoCover />
    </div>
  );
}

const WorkInformation = ({ work }: Props) => {

  const tabClasses = 'flex-grow py-2 text-base rounded-md overflow-hidden transition-all outline-none duration-100';
  const selectedClasses = 'bg-white text-sky-500';
  const unselectedClasses = '';
  const tabSelected = [tabClasses, selectedClasses].join(' ');
  const tabUnselected = [tabClasses, unselectedClasses].join(' ');

  const tabs = ['About', 'Positions', 'Projects'].slice(work.blurbTarget ? 0 : 1);

  const Position = ({ position }: { position: Position }) => (
    <div className='bg-stone-300/20 text-white p-4 w-11/12 rounded-md flex flex-col gap-4'>
      <div className='flex flex-col gap-0'>
        <div className='text-base/none'>{position.title[1] ?? position.title[0]}</div>
        <div className='text-sm/none text-white/80 italic'>{fancyFrame(position.frame)}</div>
      </div>
    </div>
  )

  return (
    <div className='p-2 flex flex-col items-center w-full gap-2'>
      <Tab.Group>
        <Tab.List className='flex flex-row gap-2 w-11/12 min-w-[15rem] md:w-10/12 lg:w-3/4 xl:w-1/2 items-center p-1 bg-stone-950/40 rounded-md overflow-hidden backdrop-blur-lg'>
          {tabs.map(tab => (
            <Tab key={tab} className={({ selected }) => selected ? tabSelected : tabUnselected}>{tab}</Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='w-full grow bg-stone-950/60 rounded-md backdrop-blur-lg min-h-[20rem] max-h-[20rem] overflow-auto p-1 grid place-items-center'>
          {work.blurbTarget && (<Tab.Panel>ABOUT</Tab.Panel>)}
          <Tab.Panel className='flex flex-col gap-4 items-center w-full'>
            {work.positions.map((position, index) => <Position key={index} {...{ position }} />)}
          </Tab.Panel>
          <Tab.Panel>PROJECTS</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

const WorkCard = ({ work }: Props) => {

  return (
    <GlassCard className='w-11/12 md:w-3/4 overflow-hidden rounded-md text-white flex flex-col md:flex-row group'>

      <WorkImageCover {...{ work }} />
      <WorkInformation {...{ work }} />

    </GlassCard>
  );

}

export default WorkCard;