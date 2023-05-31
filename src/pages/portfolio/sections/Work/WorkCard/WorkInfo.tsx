import { Tab } from "@headlessui/react";
import { Workplace } from "@models/workplace";
import AboutPanel from "./Panels/AboutPanel";
import PositionsPanel from "./Panels/PositionsPanel";
import ProjectsPanel from "./Panels/ProjectsPanel";


interface Props {
  work?: Workplace
}

const tabs = [
  {
    tab: 'About',
    filter: (work?: Workplace) => work ? !!work.blurbTarget : false,
    panel: (work?: Workplace) => <AboutPanel work={work} />,
  },
  {
    tab: 'Positions',
    panel: (work?: Workplace) => <PositionsPanel work={work} />,
  },
  {
    tab: 'Projects',
    panel: (work?: Workplace) => <ProjectsPanel work={work} />,
  }
];


const WorkInfo = (props: Props) => {

  const tabBase = 'flex-grow py-1 px-4 text-base rounded-md overflow-hidden transition-all outline-none duration-100';
  const tabSelected = 'bg-white text-sky-500';

  const filteredTabs = tabs.filter(tab => {
    if (!tab.filter) return true;
    return tab.filter(props.work);
  })


  return (
    <div className='m-1 p-1 flex flex-col items-center w-auto gap-1 min-h-[18rem] max-h-[30rem] bg-stone-950/40 rounded-md'>
      <Tab.Group>
        <Tab.List className="flex flex-row gap-1 p-1 bg-stone-950/40 rounded-md">
          {!props.work && tabs.map((_tab, ind) => <Tab key={ind} className="rounded-md outline-none py-1 px-4">???</Tab>)}
          {props.work && filteredTabs.map((tab, ind) => (
            <Tab key={ind} className={({ selected }) => [tabBase, selected ? tabSelected : undefined].filter(_ => !!_).join(' ')}>
              {tab.tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="bg-stone-950/40 flex-grow w-full rounded-md p-2">
          {!props.work && tabs.map((_tab, ind) => <Tab.Panel key={ind} className="grid place-items-center h-full">??</Tab.Panel>)}
          {props.work && filteredTabs.map((tab, ind) => (
            <Tab.Panel key={ind}>
              {tab.panel(props.work)}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default WorkInfo;