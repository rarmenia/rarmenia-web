interface Props {
  children?: React.ReactNode;
  className?: string;
}

const GlassCard = (props: Props) => {


  const baseStyle = 'bg-stone-300/20 backdrop-blur-lg border border-stone-100/5 shadow-sm shadow'

  return (
    <div className={[baseStyle, props.className].join(' ')}>
      {props.children}
    </div>
  );

}

export default GlassCard;