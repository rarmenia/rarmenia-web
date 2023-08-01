'use client'

import { TypeAnimation } from "react-type-animation";

const Greeting = () => {

  const delay = 1250;
  const deltaCeil = 300;
  const describers = ['Web Dev', 'Software Engineer', 'Language Lover', 'Experience Creator', 'Techie'];
  const sequence = describers.map(_ => ( // Map to [describer, delay]
    [_, // Describer Word
      delay + (Math.random() * deltaCeil) // Delay with some randomness to help things feel more natural
    ]
  )).flat(); // flatten to [a, delay, b, delay, ...] for TypeAnimation


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
