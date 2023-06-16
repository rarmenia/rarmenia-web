import useIntersection from '@hooks/useIntersection';
import BusinessCard from './BusinessCard';
import { useRef } from 'react';



const Info = () => {

  const intersectionRef = useRef<HTMLDivElement>(null)
  const intersecting = useIntersection(intersectionRef);


  return (
    <div id='about' className='grid place-items-center'>
      <div ref={intersectionRef} className='w-full flex items-center justify-center'>
        <BusinessCard isVisible={intersecting?.isIntersecting ?? false} />
      </div>
    </div>
  );
};

export default Info;
