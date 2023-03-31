import VideoKnockoutScreen from 'components/visuals/VideoKnockoutScreen';
import ZipperText from '../../../../components/ZipperText';
import { vimeo_link } from '../../../../utils';
const Hero = () => {
  return (
    <>
      <VideoKnockoutScreen
        src={
          vimeo_link(
            '697318636',
            { autoplay: 1, autopause: 0, muted: true, loop: 1, controls: 0, title: 0, byline: 0, portrait: 0 }
          )
        }
        aspectRatio={1.9 / 1}
      >
        <div className="animate-fade-in flex flex-col items-center justify-center gap-0.5  border-[2px] border-blue-300 border-opacity-20 rounded-md select-none p-8">

          <div className="flex flex-col md:flex-row items-center md:gap-4">
            <div className="text-9xl md:text-8xl"><ZipperText words={['REI']} /></div>
            <div className="text-5xl md:text-8xl"><ZipperText words={['ARMENIA']} /></div>
          </div>
          <div className="w-1/2 border-b-2 border-white md:mb-4" />
          <div className="flex flex-col md:flex-row items-center gap-0">
            <ZipperText words={['Full-Stack', 'Developer']} />
            <div className="animate-fade-in">
              -
            </div>
            <ZipperText words={['Experience', 'Designer']} />
          </div>

        </div>
      </VideoKnockoutScreen>
      {/* <ParticleEngineWrapper
        id="heroParticles"
        options={Links}
        className="bg-amber-700 h-[80vh] w-full absolute top-0 left-0"
      />
      <div
        id="hero"
        className="h-[80vh] bg-transparent flex flex-col items-center justify-center border-b-2 border-stone-900 z-30"
      >
        <TagWrapper
          tag="Hero"
          className={{ open: 'self-start', close: 'self-end' }}
        >
          <div className="flex-grow"></div>
          <div className="z-50 w-auto">
            <Headline />
          </div>
          <div className="flex-grow"></div>
        </TagWrapper>
      </div>
      <div className="h-[10vh] mb-[3vh] bg-amber-700 rounded-b-[80rem] flex flex-col items-center justify-end">
        <div className="text-white flex flex-row mb-4 items-center justify-center animate-bounce">
          <ChevronDoubleDownIcon className="h-4" />
          <div>Scroll For More</div>
          <ChevronDoubleDownIcon className="h-4" />
        </div>
      </div> */}
    </>
  );
};

export default Hero;
