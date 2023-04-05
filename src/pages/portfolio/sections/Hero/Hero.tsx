import MappedProperty from 'components/processors/MappedProperty';
import ScreenSize from 'components/providers/ScreenSize';
import ScrollPosition from 'components/providers/ScrollPosition';
import HeroContent from './HeroContent';
import HeroScroll from './HeroScroll';
const Hero = () => {
  return (
    <>
      <div className="w-screen h-screen relative">
        <div className="absolute inset-0 w-screen h-screen z-10 backdrop-blur-md" />

        <ScrollPosition children={(scroll) => (
          <ScreenSize children={(size) => (
            <>
              <MappedProperty
                active={[0 + (size.height / 8), size.height - (size.height / 2)]}
                target={[100, 10]}
                current={scroll}
                children={(opacity) => <HeroContent opacity={opacity} />}
              />
              <MappedProperty
                active={[0 + (size.height / 8), size.height - (size.height / 6)]}
                target={[90, 5]}
                current={scroll}
                children={(opacity) => <HeroScroll opacity={opacity} />}
              />
            </>
          )} />
        )} />
      </div>
    </>
  );
};

export default Hero;
