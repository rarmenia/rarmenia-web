import React from 'react';
import Image from 'next/image'
import ComponentViewIntersection from '@components/providers/ComponentViewIntersection';
import GlassCard from '@components/cards/GlassCard';
import { Me } from '@data/me';
import { AcademicCapIcon, BriefcaseIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { locationString } from '@utils/location';
import { allCopies } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import BusinessCard from './BusinessCard';



const Info = () => {

  const currentWork = Me.professional.work[0];
  const currentTitle = currentWork.positions[0];

  const edu = Me.education.undergrad;

  const blurb = allCopies.find((blurb) => blurb.contentRef === 'main-blurb') ?? allCopies[0];

  const MDXContent = useMDXComponent(blurb.body.code);


  return (
    <div id='about' className='w-screen grid place-items-center'>

      <ComponentViewIntersection>
        {({ isVisible }) =>
          <BusinessCard isVisible={isVisible} />
        }
      </ComponentViewIntersection>
    </div>
  );
};

export default Info;
