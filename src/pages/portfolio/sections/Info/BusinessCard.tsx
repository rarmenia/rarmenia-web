import GlassCard from "@components/cards/GlassCard";
import FancyQuote from "@components/decorators/FancyQuote";
import GlanceInfo, { GlanceItemProps } from "@components/presentation/GlanceInfo";
import { Me } from "@data/me";
import { Transition } from "@headlessui/react";
import { AcademicCapIcon, BriefcaseIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { locationString } from "@utils/location";
import { allCopies } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from 'next/image';

interface Props {
  isVisible: boolean;
  hideQuote?: boolean;
}

const BusinessCard = (props: Props) => {

  const currentWork = Me.professional.work[0];
  const currentTitle = currentWork.positions[0];
  const edu = Me.education.undergrad;

  const glance_items: GlanceItemProps[] = [
    {
      content: locationString(Me.identity.location),
      info: 'current approx. location',
      icon: <MapPinIcon />
    },
    {
      content: `${currentTitle.title[0]} @ ${currentWork.employer[0]}`,
      info: 'current work',
      icon: <BriefcaseIcon />
    },
    {
      content: `${edu.graduation.split('-')[0]} ${edu.degree[0]} ${edu.name}`,
      info: 'degree',
      icon: <AcademicCapIcon />
    }
  ];

  const blurb = allCopies.find((blurb) => blurb.contentRef === 'main-blurb') ?? allCopies[0];

  const MDXContent = useMDXComponent(blurb.body.code);

  const NameSection = () => (
    <div className="flex flex-col leading-none">
      <div className="flex flex-row items-center gap-1">
        <div>
          {Me.identity.name.join(' ')}
        </div>
        <div className="text-[0.5rem] font-extralight font-d-sans italic opacity-50 mt-0.5">
          ({Me.identity.pronouns.slice(0, 2).join('/')})
        </div>
      </div>
      <div className='text-sky-400 font-d-sans font-extralight text-sm'>{Me.professional.expertise}</div>
    </div>
  );


  return (
    <Transition
      show={props.isVisible}
      enter="transition-opacity duration-700 ease-in-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <GlassCard className="flex flex-col md:flex-row rounded-md p-4 md:p-0 gap-4 md:gap-0 overflow-hidden transition-all">

        <div className="w-40 h-40 md:w-80 md:h-auto md:rounded-none rounded-full self-center md:self-start overflow-hidden transition-all">
          <Image src="/rei-portrait-square.jpeg" alt="profile" width={1800} height={1800} className="overflow-hidden h-full aspect-square grayscale hover:grayscale-0 hover:scale-[1.025] transition-all transition-700 ease-in-out" />
        </div>

        <div className="flex flex-col items-center md:items-start md:justify-evenly md:py-4 md:pl-4 md:pr-8 max-w-[20rem] text-white transition-all gap-2">
          <NameSection />
          <div className="w-10/12 border-b border-white/40" />
          <GlanceInfo items={glance_items} />
          <div className="w-10/12 border-b border-white/40" />
          {/* <Quote /> */}
          <FancyQuote className="text-xs/none font-d-sans p-2 border border-white/5 border-dashed flex flex-col gap-1">
            <MDXContent />
          </FancyQuote>
        </div>
      </GlassCard>
    </Transition>
  )

}

export default BusinessCard;

