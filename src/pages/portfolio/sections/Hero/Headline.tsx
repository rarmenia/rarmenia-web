import React, { useEffect, useState } from 'react';
import TagWrapper from '../../../../components/TagWrapper';

type Props = {};

const Headline = (props: Props) => {
  return (
    <div className="text-white place-self-center grid">
      <TagWrapper tag="WhoAmI?">
        <div className="py-3 px-8">
          <h1 className="text-center text-2xl">
            <span className="text-amber-600">Rei</span> Armenia
          </h1>
          <p className="text-center">Front-End Engineer</p>
          <p className="text-center text-xs">Upstate New York</p>
        </div>
      </TagWrapper>
    </div>
  );
};

export default Headline;
