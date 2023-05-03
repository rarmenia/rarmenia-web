interface Props {
  children?: React.ReactNode;
  className?: string;
}

const GlassCard = (props: Props) => {


  const baseStyle = 'bg-stone-300/25 backdrop-blur-lg shadow-sm shadow'

  return (
    <div className={[baseStyle, props.className].join(' ')}>
      {props.children}
    </div>
  );

}

export default GlassCard;