import React from 'react';
import Particles from 'react-particles';
import { IOptions, RecursivePartial } from 'tsparticles-engine';

type Props = {
  id: string;
  className?: string;
  options?: RecursivePartial<IOptions>;
};

const ParticleEngineWrapper = (props: Props) => {
  return (
    <Particles
      id={props.id}
      className={props.className}
      options={props.options}
      style={undefined}
    />
  );
};

export default ParticleEngineWrapper;
