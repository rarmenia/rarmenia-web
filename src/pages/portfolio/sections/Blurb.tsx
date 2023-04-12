import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";


const Blurb = () => {

  return (
    <div className="w-screen h-screen grid place-items-center p-2">

      <div className="relative isolate text-white w-10/12 md:w-3/4 font-mono">
        <div className="z-0 bg-stone-300/20 backdrop-blur-lg p-4 ml-4 w-auto rounded-lg flex-col flex gap-2">
          <p>
            Hi! I&apos;m Rei!
          </p>
          <p>
            I&apos;m a software engineer from the Capitol Region of New York. I do full-stack work, but much of my experience and passion lies with front-end technologies.
          </p>
          <p>
            I went to college in Burlington Vermont at Champlain College and obtained a B.S. in Computer Science in 2018.
          </p>
          <p>
            In 2019, I decided to move back to my home area to join the State of New York Office of ITS supporting Housing and Community Renewal.
            Through the pandemic I had the privilege to work on several high importance projects which has bolstered my Development skills.
          </p>
          <p>
            I love Video Games and Animals and often spend too much of my free time analyzing video game soundtracks and looking at cute animal videos because of it.
            However, I also love picking up new skills and knowledge which has given me many new perspectives and a LOT of trivia knowledge.
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
