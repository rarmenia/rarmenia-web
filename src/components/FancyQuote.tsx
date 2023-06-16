interface Props {

  className?: string;

  quotes?: {
    styleClasses?: string;
    openPositionClasses?: string;
    closePositionClasses?: string;
    showClose?: boolean;
  }

  children?: React.ReactNode;

}

const FancyQuote = (props: Props) => {

  const compose = (classParts: (string | undefined)[]): string => {
    return classParts.map(_ => _ ?? '').filter(_ => !!_).join(' ');
  }

  const quoteBase = 'absolute -z-20';
  const quoteStyleDefault = 'text-6xl/none font-mono text-white/30';
  const openPositionDefault = 'top-0 left-0';
  const closePositionDefault = 'bottom-0 right-0 leading-[0]';

  const openClasses = compose([quoteBase, props.quotes?.styleClasses ?? quoteStyleDefault, props.quotes?.openPositionClasses ?? openPositionDefault]);
  const closeClasses = compose([quoteBase, props.quotes?.styleClasses ?? quoteStyleDefault, props.quotes?.closePositionClasses ?? closePositionDefault]);

  return (
    <div className={['relative isolate', props.className ?? ''].filter(classes => !!classes).join(' ')}>

      {props.children}



      <div className={openClasses}>&ldquo;</div>
      {props.quotes?.showClose && (<div className={closeClasses}>&rdquo;</div>)}
    </div>
  )

}

export default FancyQuote;