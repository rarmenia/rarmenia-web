'use client'

import { TypeAnimation } from "react-type-animation";

const Greeting = () => {

  const describers = ['Web Dev', 'Software Engineer', 'Language Lover', 'Experience Creator', 'Techie'];

  const BASE_DELAY_MS: number = 1250;
  const DELAY_VARIANCE_CAP_MS: number = 300;
  const getDelayWithVariation = () => BASE_DELAY_MS + Math.floor((Math.random() * DELAY_VARIANCE_CAP_MS));
  const pairDescriberWithTiming = (describer: string) => [describer, getDelayWithVariation()];

  const sequence = describers.map(pairDescriberWithTiming).flat()

  return (
    <div className="ml-4 flex flex-col">
      <div className="font-sans font-semibold text-white text-4xl leading-none tracking-tight">Hi,</div>
      <div className="font-sans font-semibold text-white text-4xl leading-none tracking-tight">I&apos;m <span className="text-sky-400">Rei</span>!</div>
      <div className="font-sans font-semibold text-white text-4xl leading-none tracking-tight flex flex-row">
        <span>A&nbsp;</span>
        <div className="text-sky-400 font-mono text-3xl flex flex-row">
          <div>&lt;{/*<*/}</div>
          <TypeAnimation
            sequence={sequence}
            wrapper="span"
            deletionSpeed={90}
            speed={65}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
          <div>&gt;{/*>*/}</div>
        </div>
      </div>
    </div>
  );

}

export default Greeting;
