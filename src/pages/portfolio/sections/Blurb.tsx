import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";


const Blurb = () => {

  return (
    <div className="w-screen h-screen grid place-items-center p-2">

      <div className="relative isolate text-white w-10/12 md:w-3/4 font-mono">
        <div className="z-0 bg-stone-300/20 backdrop-blur-lg p-4 ml-4 w-auto rounded-lg flex-col flex gap-2">
          <p>
            Hey there! I&apos;m Rei, a software engineer based in the Capitol Region of New York.
          </p>
          <p>
            specialize in full-stack development, with expertise in technologies like Angular, React, NodeJS and Python.
            But what really gets me excited is working on front-end projects that create beautiful and intuitive user experiences.
          </p>
          <p>
            I graduated from Champlain College in Burlington, Vermont with a B.S. in Computer Science in 2018.
            After completing my degree, I returned to my home area in 2019 to work for the State of New York Office of ITS supporting Housing and Community Renewal.
          </p>
          <p>
            During the pandemic,
            I had the privilege to work on several high-impact projects,
            including a web app that streamlined the process of applying for rental assistance and New York&apos;s Vaccine Scheduling tool.
          </p>
          <p>
            When I'm not coding, you can usually find me indulging in two of my favorite pastimes: video games and animals. I've spent countless hours analyzing video game soundtracks and exploring the creative ways in which music can enhance user experiences.
            I'm also a big animal lover, and I often find myself watching videos of cute animals (who doesn't love that?).
          </p>
          <p>
            In addition to my hobbies, I'm always looking to expand my skillset and knowledge base.
            Whether it's learning a new programming language or diving into a new subject area,
            I love the challenge of mastering new skills and gaining fresh perspectives.
            Plus, all of that trivia knowledge comes in handy on game nights!
          </p>
        </div>
        <div className="absolute z-10 -left-8 -bottom-4 bg-stone-300/20 backdrop-blur-lg rounded-full p-2" aria-hidden="true">
          <ChatBubbleOvalLeftEllipsisIcon className="h-6" />
        </div>
      </div>

    </div>
  );

}

export default Blurb;
