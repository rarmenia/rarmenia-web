import React, { useEffect, useState } from 'react';
import TagWrapper from '../../../../components/TagWrapper';
import ZipperText from '../../../../components/ZipperText';
import Me from '../../../../data/Me';
type Props = {};

const Headline = (props: Props) => {
  return (
    <div className='text-white place-self-center grid'>
      <TagWrapper tag='WhoAmI?'>
        <div className='py-3 px-8'>
          <h1 className='text-center text-2xl'>
            <ZipperText center={true} words={[
              Me.info.name.first,
              Me.info.name.last
            ]} />
          </h1>
          <p className='text-center text-stone-800'>
            <ZipperText center={true} words={[
              ...Me.info.title.split(' '),
            ]} />
          </p>
          <p className='text-center text-xs text-stone-800'>
            <ZipperText center={true} words={[
              ...Me.info.location.region.split(' '),
              ...Me.info.location.state.split(' '),
            ]} />
          </p>
        </div>
      </TagWrapper>
    </div>
  );
};

export default Headline;
