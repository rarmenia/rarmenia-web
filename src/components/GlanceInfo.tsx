export interface GlanceItemProps {

  info: string;
  content: string;
  icon: React.ReactNode;

  className?: string;
  iconClasses?: string;

}

export const GlanceItem = (props: GlanceItemProps) => {

  const itemDefaultClasses = 'flex flex-row text-xs items-center gap-3';
  const iconDefaultClasses = 'h-4 w-4';

  return (
    <div className={props.className ?? itemDefaultClasses} title={props.info}>

      <div className={props.iconClasses ?? iconDefaultClasses}>
        {props.icon}
      </div>

      <div>{props.content}</div>

    </div>
  );

}

interface GlanceInfoProps {

  items: GlanceItemProps[];
  className?: string;
  itemClasses?: string;

  iconClasses?: string;

}

const GlanceInfo = (props: GlanceInfoProps) => {

  const infoDefaultClasses = 'flex flex-col leading-none text-xs gap-0.5';

  return (
    <div className={props.className ?? infoDefaultClasses}>
      {
        props.items.map((item, index) => (
          <GlanceItem
            key={index}
            info={item.info}
            content={item.content}
            icon={item.icon}
            className={item.className ?? props.itemClasses}
            iconClasses={item.iconClasses ?? props.iconClasses}
          />
        ))
      }
    </div>
  )

}

export default GlanceInfo;