import { Transition } from "@headlessui/react";

interface Props {
  expanded: boolean;
}

const BlurbNarrative = (props: Props) => {

  const staticClasses = 'z-0 bg-stone-300/20 backdrop-blur-lg py-6 px-8 ml-6 md:ml-0 w-auto rounded-lg flex-col flex gap-2 shadow-sm shadow-slate-900';

  return (
    <div
      className={`${staticClasses}`}
    >
      <p>
        Hey there! I&apos;m Rei!
      </p>

      <Transition
        show={props.expanded ?? false}
        enter="transition-all duration-300 ease-out"
        enterFrom="opacity-0 h-0"
        enterTo="opacity-100 h-full"
        leave="transition-all duration-30 ease-in"
        leaveFrom="opacity-100 h-full"
        leaveTo="opacity-0 h-0"
      >
        <div className={`flex flex-col gap-2`} >
          <p>I&apos;m a software engineer based in the Capital Region of New York.
          </p>
          <p>
            I specialize in full-stack development, with expertise in technologies like Angular, React, NodeJS and Python.
            But what really gets me excited is working on front-end projects that create beautiful and intuitive user experiences.
          </p>
          <p>
            In 2018, I earned my B.S. in Computer Science from Champlain College in Burlington, VT.
            After completing my degree, I returned to my home area in 2019 to work for the New York Office of ITS supporting Housing and Community Renewal.
          </p>
          <p>
            During the pandemic,
            I had the privilege of working on several high-impact projects,
            including a web app that streamlined the process of applying for rental assistance and New York&apos;s Vaccine Scheduling tool.
          </p>
          <p>
            When I&apos;m not coding, you can usually find me indulging in two of my favorite pastimes: video games and animals.
            I&apos;ve spent countless hours analyzing video game soundtracks and exploring the creative ways in which music can enhance user experiences.
            I&apos;m also a big animal lover, and I often find myself watching videos of cute animals (who doesn&apos;t love that?).
          </p>
          <p>
            In addition to my hobbies, I&apos;m always looking to expand my skillset and knowledge base.
            Whether it&apos;s learning a new programming language or diving into a new subject area,
            I love the challenge of mastering new skills and gaining fresh perspectives.
            Plus, all of that trivia knowledge comes in handy on game nights!
          </p>
        </div >
      </Transition>

      <Transition
        show={!props.expanded}
      >
        <div className="italic font-extralight text-[0.625rem]/[0.75rem] mt-2">*click for more*</div>
      </Transition>

    </div>
  );

}

export default BlurbNarrative;
