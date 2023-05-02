import ScreenBackground from '@components/ScreenBackground';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Props {

  opacity?: number;
  multiplyContent?: React.ReactNode;

  video: string;
  img?: string;
  aspect: number;

}

const PortfolioBackground = (props: Props) => {

  const { scrollY } = useScroll()
  const multiplyLayerOpacity = useTransform(scrollY, [0, 300], [.8, .8725]);


  return (

    <div className='fixed h-screen w-screen z-0 isolate'>
      <div className='z-0 inset-0 absolute'>
        <ScreenBackground video={props.video} img={props.img} aspectRatio={props.aspect} />
      </div>

      <motion.div className='z-10 bg-stone-300/5 backdrop-blur-md absolute inset-0' />

      <motion.div className='z-20 bg-black absolute mix-blend-multiply inset-0' style={{ opacity: multiplyLayerOpacity }}>
        {props.multiplyContent ?? <></>}

      </motion.div>

    </div>

  )

}

export default PortfolioBackground;
