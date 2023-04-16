import { ChatBubbleOvalLeftEllipsisIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';

interface Props {
  expanded: boolean;
}

const BlurbDecoration = (props: Props) => {

  const staticClasses = 'absolute z-10 -left-8 md:-left-14 -bottom-4 bg-stone-300/20 backdrop-blur-lg rounded-full p-2 shadow-sm shadow-slate-900';

  const position = props.expanded ? '-bottom-4' : 'bottom-[25%]';

  return (
    <div
      className={[staticClasses, position].join(' ')}
      title={props.expanded ? 'minimize' : 'expand'}
    >
      {props.expanded ? <ChatBubbleOvalLeftIcon className="h-8 -mt-0.5" /> : <ChatBubbleOvalLeftEllipsisIcon className="h-8 -mt-0.5" />}
      <span className='sr-only'>{props.expanded ? 'minimize blurb' : 'expand blurb'}</span>
    </div >
  );

}

export default BlurbDecoration
