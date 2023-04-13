import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import ComponentViewIntersection from "components/providers/ComponentViewIntersection";


const Blurb = () => {

  return (
    <div className="w-screen min-h-[90vh] grid place-items-center p-2">

      <div className="relative isolate text-white w-10/12 md:w-2/4 font-mono">
        <ComponentViewIntersection threshold={0.05}>
          {
            (intersection) => (<>
              <div
                className={`z-0 bg-stone-300/20 backdrop-blur-lg py-6 px-8 ml-6 md:ml-0 w-auto rounded-lg flex-col flex gap-2 shadow-sm shadow-slate-900 ${intersection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              >
                <p>
                  Hey there!
                </p>
                <p>I&apos;m Rei, a software engineer based in the Capital Region of New York.
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
              </div>
              <div className="absolute z-10 -left-8 md:-left-14 -bottom-4 bg-stone-300/20 backdrop-blur-lg rounded-full p-2 shadow-sm shadow-slate-900" aria-hidden="true">
                <ChatBubbleOvalLeftEllipsisIcon className="h-8 -mt-0.5" />
              </div>
            </>)
          }
        </ComponentViewIntersection>
      </div>

    </div>
  );

}

export default Blurb;
