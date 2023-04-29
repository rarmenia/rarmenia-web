
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import HeroContent from './HeroContent';
import HeroScroll from './HeroScroll';
const Hero = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 240], [1, 0]);
  const scrollOpacity = useTransform(scrollY, [0, 40], [1, 0])

  return (
    <div aria-hidden="true">
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
