import MappedProperty from 'components/processors/MappedProperty';
import ScreenSize from 'components/providers/ScreenSize';
import ScrollPosition from 'components/providers/ScrollPosition';
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
                <MappedProperty
                  active={[0 + (size.height / 8), size.height - (size.height / 2)]}
                  target={[100, 0]}
                  current={scroll}
                >
                  {(track) => <HeroContent opacity={track} translateY={track === 0 ? -800 : ((100 - track) * 1.8) * -1} />}
                </MappedProperty>
                <MappedProperty
                  active={[0 + (size.height / 8), size.height - (size.height / 1.5)]}
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
