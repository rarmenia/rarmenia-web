
import MappedProperty from '@components/processors/MappedProperty';
import ScreenSize from '@components/providers/ScreenSize';
import ScrollPosition from '@components/providers/ScrollPosition';
import HeroContent from './HeroContent';
import HeroScroll from './HeroScroll';
const Hero = () => {
  return (
    <>
      <ScrollPosition>
        {(scroll) => (
          <ScreenSize>
            {(size) => (
              <div aria-hidden="true">
                <HeroContent opacity={100} translateY={-(scroll / 2.2)} />
                {/* <MappedProperty
                  active={[0 + (size.height / 16), size.height / 2]}
                  target={[100, 0]}
                  current={scroll}
                >
                  {(track) => <HeroContent opacity={track} translateY={track === 0 ? -800 : ((100 - track) * 1.8) * -1} />}
                </MappedProperty> */}
                <MappedProperty
                  active={[0, size.height / 12]}
                  target={[100, 0]}
                  current={scroll}
                >
                  {(opacity) => <HeroScroll opacity={opacity} />}
                </MappedProperty>
              </div>
            )}
          </ScreenSize>
        )}
      </ScrollPosition>
    </>
  );
};

export default Hero;
