import ZipperText from "@components/visuals/ZipperText";
import { Me } from "@data/me";
import React from "react";
const Describer = ({ describer }: { describer: string }) => {

  return (
    <div>
      <ZipperText words={describer.split(' ')} />
    </div>
  )
}

const Separator = () => {
  return (
    <div className="border-b md:border-0 min-w-[50%] md:min-w-0">
      <span className="md:inline hidden">-</span>
    </div>
  )
}


const HeroDescribers = () => {

  return (
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 font-mono text-xs">
      {
        Me.professional.describers.map((describer, ind, arr) => (
          <React.Fragment key={ind}>
            <Describer describer={describer} />
            {ind + 1 < arr.length && <Separator />}
          </React.Fragment>
        ))
      }
    </div>
  );

}

export default HeroDescribers;
