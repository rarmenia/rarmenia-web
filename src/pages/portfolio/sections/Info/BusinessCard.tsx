import GlassCard from '@components/cards/GlassCard';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import BusinessCardInfo from './BusinessCardInfo';

interface Props {
  isVisible: boolean;
}

const BusinessCard = (props: Props) => {

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
        <BusinessCardInfo />
      </GlassCard>
    </Transition>
  );

}

export default BusinessCard;

