import FancyQuote from '@components/FancyQuote';
import GlanceInfo, { GlanceItemProps } from '@components/GlanceInfo';
import GlassCard from '@components/GlassCard';
import { Me } from '@data/me';
import { Transition } from '@headlessui/react';
import { AcademicCapIcon, BriefcaseIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { locationString } from '@utils/data-decode';
import { allCopies } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
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
    <div className='flex flex-col leading-none'>
      <div className='flex flex-row items-center gap-1'>
        <div>
          {Me.identity.name.join(' ')}
        </div>
        <div className='text-[0.5rem] font-extralight font-d-sans italic opacity-50 mt-0.5'>
          ({Me.identity.pronouns.slice(0, 2).join('/')})
        </div>
      </div>
      <div className='text-sky-400 font-d-sans font-extralight text-sm'>{Me.professional.expertise}</div>
    </div>
  );

  return (
    <Transition
      show={props.isVisible ?? false}
      className='w-full flex items-center justify-center'
      enter='transition-opacity duration-700 ease-in-out'
      enterFrom='opacity-0'
      enterTo='opacity-100'
    >
      <GlassCard className='w-11/12 md:w-3/4 overflow-hidden rounded-md text-white flex flex-col md:flex-row gap-2 group'>
        <div className='h-60 w-60 md:min-h-[25rem] md:h-auto md:w-4/12 md:min-w-[18rem] relative isolate rounded-full self-center md:self-start my-8 md:my-0 md:rounded-none md:rounded-r-md overflow-hidden shadow-sm shadow-stone-950/40'>
          <div className='absolute inset-0 -z-10'>
            <Image src='/img/rei-portrait-square.jpeg' alt='Rei' fill={true} className='object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.025] transition-all' />
          </div>
        </div>
        <div className='flex flex-col items-center md:items-start md:justify-evenly p-2 md:mx-auto text-white transition-all gap-6 md:gap-2 mb-8'>
          <NameSection />
          <div className='w-10/12 border-b border-white/40' />
          <GlanceInfo items={glance_items} />
          <div className='w-10/12 border-b border-white/40' />
          {/* <Quote /> */}
          <FancyQuote className='text-xs/none font-d-sans p-4 border border-white/5 border-dashed rounded-sm flex flex-col gap-1 w-10/12'>
            <MDXContent />
          </FancyQuote>
        </div>
      </GlassCard>
    </Transition>
  );

}

export default BusinessCard;

