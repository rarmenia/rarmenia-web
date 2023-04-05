import MappedProperty from 'components/processors/MappedProperty';
import ScrollPosition from 'components/providers/ScrollPosition';
import ZipperText from 'components/visuals/ZipperText';
const Hero = () => {
  return (
    <>
      <div className="w-screen h-screen relative">
        <div className="absolute inset-0 w-screen h-screen z-10 backdrop-blur-md" />
        <div className="absolute inset-0 w-screen h-screen bg-black/[84%] z-20 mix-blend-multiply grid place-items-center text-white font-mono">
          <div className="animate-fade-in flex flex-col items-center justify-center gap-4 md:gap-0.5  border-[2px] border-blue-300 border-opacity-20 rounded-md select-none p-8">

            <div className="flex flex-col md:flex-row items-center md:gap-4 font-black">
              <div className="text-9xl md:text-8xl"><ZipperText words={['REI']} /></div>
              <div className="text-5xl md:text-8xl"><ZipperText words={['ARMENIA']} /></div>
            </div>
            <div className="w-1/2 border-b-2 border-white md:mb-4" />
            <div className="flex flex-col md:flex-row items-center gap-0 md:gap-4 font-sans">
              <ZipperText words={['Full-Stack', 'Developer']} />
              <div className="animate-fade-in -my-1">
                -
              </div>
              <ZipperText words={['Experience', 'Designer']} />
            </div>

          </div>
        </div>
        <ScrollPosition children={(scroll) =>
        (<MappedProperty active={[0, 240]} target={[100, 0]} current={scroll}>
          {(opacity) => (
            <div
              className={'absolute w-screen bottom-0 z-30 flex items-center justify-center text-white font-mono animate-bounce'}
              style={
                {
                  opacity: `${opacity}%`
                }
              }
            >
              scroll for more
            </div>
          )}
        </MappedProperty>
        )} />
      </div>
    </>
  );
};

export default Hero;
