import ZipperText from '../../../../components/ZipperText';
import VideoKnockout from '../../../../components/visuals/VideoKnockout';
const Hero = () => {
  return (
    <>
      <div className="h-screen w-screen">
        <VideoKnockout
          src="https://player.vimeo.com/video/697318636"
          params={
            {
              autoplay: 1,
              muted: true,
              loop: 1,
              controls: 0,
              autopause: 0,
              title: 0,
              byline: 0,
            }
          }
        >
          <div className="flex flex-col items-center justify-center gap-0.5 p-16">
            <ZipperText words={['REI', 'ARMENIA']} />
            <div className="w-1/2 border-b-2 border-white mb-4" />
            <div className="text-2xl">
              <ZipperText words={['Full-Stack', 'Developer', '-', 'Experience', 'Designer']} />
            </div>

          </div>
        </VideoKnockout>
      </div>
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
