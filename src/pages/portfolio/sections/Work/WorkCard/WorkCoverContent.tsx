import AbbrOrText from "@components/data-display/AbbrOrText";
import TimeFrame from "@components/data-display/TimeFrame";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { Workplace } from "@models/workplace";

interface Props {
  work?: Workplace
}

const WorkCoverContent = (props: Props) => {


  return (
    <div className='h-full w-full flex flex-col items-center justify-center p-4'>
      <BuildingOffice2Icon className='h-10' />
      <div className='text-lg/none font-mono'><AbbrOrText data={props?.work?.employer ?? undefined} /></div>
      <div className='flex flex-row text-xs/none items-center my-2 gap-2 italic text-white/80'>
        <TimeFrame frame={props?.work?.frame ?? undefined} />
      </div>
    </div>
  );

};

export default WorkCoverContent;