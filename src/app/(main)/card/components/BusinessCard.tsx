import GlassCard from "@/components/containers/GlassCard";
import SepartatorLine from "@/components/decorations/SeparatorLine";
import Location from "@/components/information/Location";

import { EnvelopeIcon } from "@heroicons/react/20/solid";

import Image from 'next/image'

type BusinessCardProps = {
  hideContact?: boolean;
}

const BusinessCard = ({ hideContact }: BusinessCardProps) => {
  return (
    <div className="w-fit">
      <GlassCard>
        <div className="min-w-[22rem] flex flex-col items-center p-4 gap-4">
          <div className="h-50 aspect-square bg-stone-700 grid place-items-center overflow-hidden rounded-full">
            <Image src="/img/photos/profile_img_square.png" alt="photo of rei armenia" width={200} height={200} />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex flex-row items-center gap-2">
              <div className="text-xl font-sans font-semibold text-white">Rei Armenia</div>
              <div className="italic text-sm text-white/40">{'(they/them)'}</div>
            </div>
            <Location location={'Capital Region, New York, USA'} />
          </div>
          {
            !hideContact && (<>
              <SepartatorLine />
              <div className="flex flex-col px-4 gap-2">
                <a className="flex flex-row gap-4 items-center opacity-80" href="https://www.linkedin.com/in/rarmenia/" target="_blank">
                  <Image src="/img/logos/linked_in.png" width="24" height="24" alt="linked in logo" className="brightness-[10]" />
                  <span className="font-mono">/in/rarmenia</span>
                </a>
                <a className="flex flex-row gap-4 items-center opacity-80" href="https://github.com/rarmenia" target="_blank">
                  <Image src="/img/logos/github.png" width="24" height="24" alt="linked in logo" className="brightness-[10]" />
                  <span className="font-mono">rarmenia</span>
                </a>
                <a className="flex flex-row gap-4 items-center opacity-80" href="mailto:rei.armenia@gmail.com" target="_blank">
                  <EnvelopeIcon className="h-6 text-white" />
                  <span className="font-mono">rei.armenia@gmail</span>
                </a>
              </div>
            </>)
          }
        </div>
      </GlassCard>
    </div >
  )
}

export default BusinessCard;
