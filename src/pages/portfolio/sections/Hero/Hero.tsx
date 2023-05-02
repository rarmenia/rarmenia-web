
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import HeroContent from './HeroContent';
import HeroScroll from './HeroScroll';
import useScreenSize from '@hooks/useScreenSize';
const Hero = () => {
  const { scrollY } = useScroll();
  const { height } = useScreenSize();
  const heroOpacity = useTransform(scrollY, [0, height / 2.75], [1, 0]);
  const scrollOpacity = useTransform(scrollY, [0, 60], [1, 0])

  return (
    <div aria-hidden='true'>
      <motion.div style={{ opacity: heroOpacity }}>
        <HeroContent />
      </motion.div>
      <motion.div style={{ opacity: scrollOpacity }}>
        <HeroScroll />
      </motion.div>
    </div>
  );

};

export default Hero;
