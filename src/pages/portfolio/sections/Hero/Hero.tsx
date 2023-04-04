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
            { autoplay: 1, autopause: 0, muted: true, loop: 1, controls: 0, title: 0, byline: 0, portrait: 0, quality: '720p' }
          )
        }
        aspectRatio={1.9 / 1}
      >
        <div className="animate-fade-in flex flex-col items-center justify-center gap-4 md:gap-0.5  border-[2px] border-blue-300 border-opacity-20 rounded-md select-none p-8">

          <div className="flex flex-col md:flex-row items-center md:gap-4">
            <div className="text-9xl md:text-8xl"><ZipperText words={['REI']} /></div>
            <div className="text-5xl md:text-8xl"><ZipperText words={['ARMENIA']} /></div>
          </div>
          <div className="w-1/2 border-b-2 border-white md:mb-4" />
          <div className="flex flex-col md:flex-row items-center gap-0">
            <ZipperText words={['Full-Stack', 'Developer']} />
            <div className="animate-fade-in -my-1">
              -
            </div>
            <ZipperText words={['Experience', 'Designer']} />
          </div>

        </div>
      </VideoKnockoutScreen>
    </>
  );
};

export default Hero;
