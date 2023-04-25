import ZipperText from "@components/visuals/ZipperText";
import { Me } from "@data/me";

const HeroName = () => {

  const [first, last] = Me.identity.name.map(part => part.toLocaleUpperCase('en'));

  return (
    <div className="flex flex-col md:flex-row items-center md:gap-4 font-black">

      <div className="text-7xl md:text-8xl">
        <ZipperText words={[first]} />
      </div>

      <div className="text-5xl md:text-8xl">
        <ZipperText words={[last]} />
      </div>

    </div>
  )

};

export default HeroName