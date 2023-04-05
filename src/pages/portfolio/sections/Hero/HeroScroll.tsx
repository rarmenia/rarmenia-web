interface Props {
  opacity: number;
}

const HeroScroll = (props: Props) => {
  return <div
    className={'absolute w-screen bottom-0 z-30 flex items-center justify-center text-white font-mono animate-bounce'}
    style={
      {
        opacity: `${props.opacity}%`
      }
    }
  >
    scroll for more
  </div>
}

export default HeroScroll;
