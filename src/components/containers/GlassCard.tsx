type CardProps = {
  children?: React.ReactNode;
}

const GlassCard = (props: CardProps) => {
  return (
    <div className="p-8 overflow-hidden bg-gradient-to-br from-stone-800/30  to-stone-800/30 via-stone-700/30 border border-stone-50/5 rounded-md backdrop-blur-md">
      {props.children}
    </div>
  );
}

export default GlassCard;

