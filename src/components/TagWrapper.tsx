import React from 'react';

type Props = {
  children: React.ReactNode;
  tag: string;
  className?: string | { open: string; close: string };
  removeDefault?: boolean;
  noAnimation?: boolean;
};

type TagProps = {
  tag: string;
  type: 'open' | 'close';
  className?: string | { open: string; close: string };
  removeDefault?: boolean;
  noAnimation?: boolean;
};

const defaultClasses = 'text-xs text-stone-400 opacity-30 italic';
const openingDefault = 'text-start';
const closingDefault = 'text-end';

const Tag = (props: TagProps) => {
  const propClasses = props.className
    ? typeof props.className === 'string'
      ? props.className
      : props.type === 'open'
      ? props.className.open
      : props.className.close
    : undefined;

  const finalClasses = [
    props.noAnimation ? '' : 'animate-fade-in-30',
    propClasses,
    ...(props.removeDefault
      ? []
      : [
          defaultClasses,
          props.type === 'open' ? openingDefault : closingDefault,
        ]),
  ]
    .filter((_) => _?.length ?? 0 > 0)
    .join(' ');

  const render = () => (
    <div className={finalClasses}>
      <code>{`<${props.type === 'close' ? '/' : ''}${props.tag}>`}</code>
    </div>
  );

  return render();
};

const TagWrapper = (props: Props) => {
  const render = () => (
    <>
      <Tag
        type="open"
        tag={props.tag}
        className={props.className}
        removeDefault={props.removeDefault}
      />
      {props.children}
      <Tag
        type="close"
        tag={props.tag}
        className={props.className}
        removeDefault={props.removeDefault}
      />
    </>
  );

  return render();
};

export default TagWrapper;
