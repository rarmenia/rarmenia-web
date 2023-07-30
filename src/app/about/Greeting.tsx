'use client'

import { TypeAnimation } from "react-type-animation";

const Greeting = () => {


  return (
    <div className="ml-4 flex flex-col">
      <div className="font-sans font-semibold text-white text-4xl leading-none tracking-tight">Hi,</div>
      <div className="font-sans font-semibold text-white text-4xl leading-none tracking-tight">I&apos;m <span className="text-sky-400">Rei</span>!</div>
      <div className="font-sans font-semibold text-white text-4xl leading-none tracking-tight flex flex-row">
        <span>A&nbsp;</span>
        <div className="text-sky-400 font-mono text-3xl flex flex-row">
          <div>&lt;{/*<*/}</div>
          <TypeAnimation
            sequence={['Programmer', 1000, 'Techie', 1000, 'Experience Creator', 1000, 'Language Lover', 1000,]}
            wrapper="span"
            speed={70}
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
