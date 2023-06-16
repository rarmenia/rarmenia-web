import GlassCard from "./GlassCard";
import DataImage from "@components/data-display/DataImage";
import { ImageInfo } from "@models/image-info";

interface Props {
  image?: ImageInfo;
  imageContent?: React.ReactNode;
  content?: React.ReactNode;

  classes?: {
    card?: string;
    coverContainer?: string;
    imageContainer?: string;
    imageClasses?: string;
    imageContentContainer?: string;
    contentContainer?: string;
  }

  loading?: boolean;

}

const DICoverCard = (props: Props) => {

  const cardBase = 'group isolate overflow-hidden text-white grid grid-cols-1 md:grid-cols-3 rounded-md gap-2 md:gap-0'
  const cardClasses = [cardBase, props.classes?.card, props.loading ? 'animate-pulse' : undefined].filter(_ => !!_).join(' ');

  const coverContainerBase = 'col-span-1 rounded-b-lg md:rounded-b-md md:rounded-r-md overflow-hidden bg-transparent'
  const shadows = 'shadow-md shadow-stone-950/20 md:shadow-stone-950/80';
  const coverContainerClasses = [coverContainerBase, shadows, props.classes?.coverContainer].filter(_ => !!_).join(' ');

  const imageBase = 'absolute inset-0 -z-10 h-full w-full bg-transparent'
  const imageClasses = [imageBase, props.classes?.imageContainer].filter(_ => !!_).join(' ');

  const imageContentBase = 'h-full w-full';
  const imageContentClasses = [imageContentBase, props.classes?.imageContentContainer].filter(_ => !!_).join(' ');

  const contentBase = 'col-span-1 md:col-span-2'
  const contentClasses = [contentBase, props.classes?.contentContainer].filter(_ => !!_).join(' ');

  return (
    <GlassCard className={cardClasses}>

      <div className={coverContainerClasses}>
        <div className="h-full w-full relative isolate">
          <div className={imageClasses}>
            <DataImage image={props.image ?? undefined} className={props.classes?.imageClasses} />
          </div>
          {!!props.imageContent && (
            <div className={imageContentClasses}>
              {props.imageContent}
            </div>
          )}
        </div>
      </div>
      <div className={contentClasses}>
        {props.content}
      </div>
    </GlassCard >
  );

}

export default DICoverCard;