import DICoverCard from '@components/cards/DICoverCard';
import { Workplace } from '@models/workplace';
import WorkInfo from './WorkInfo';
import WorkCoverContent from './WorkCoverContent';

interface Props {
  work?: Workplace
};

const WorkCard = (props: Props) => {

  return (
    <DICoverCard
      image={props?.work?.cover}
      imageContent={<WorkCoverContent work={props.work} />}
      content={<WorkInfo work={props.work} />}
      loading={!props.work}
      classes={
        {
          card: 'w-11/12',
          coverContainer: 'min-h-[16rem]',
          imageContainer: 'grayscale blur-[2px] group-hover:blur-0 transition-all'
        }
      }
    />
  );

}

export default WorkCard;
