import { Dialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import TagWrapper from '../../../../components/TagWrapper';
import { TechnologiesMap } from '../../../../data/TechSkills';
import TechCloud from './TechCloud';

const SkillOverlay = (props: {
  skill: string | null;
  handleClose: () => void;
}) => {
  const tech = TechnologiesMap[props.skill ?? ''];

  const render = () => (
    <>
      <div className="absolute w-11/12 h-full bg-stone-800 opacity-95 border border-stone-800 rounded-2xl text-white">
        <div className="h-full w-full relative">
          <div className="absolute top-0 right-0 mt-2 mr-2">
            <button onClick={() => props.handleClose()}>
              <XIcon className="h-8 text-white" />
            </button>
          </div>
          <div className="p-4 flex flex-col">
            <div className="flex flex-col gap-0.5">
              <div className="text-2xl font-semibold">{props.skill}</div>
              <div className="text-sm">{tech.experience}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return render();
};

const Technologies = () => {
  const [currentSkill, setCurrentSkill] = useState<null | string>(null);

  const handleWordChosen = (word: string) => {
    setCurrentSkill(word);
    console.log(word);
  };

  const handleClose = () => {
    setCurrentSkill(null);
  };

  const techCloud = React.useMemo(
    () => <TechCloud onWordChosen={handleWordChosen} />,
    []
  );

  const render = () => (
    <>
      <div className="h-[10vh] mt-[6vh] rounded-t-[80rem] bg-cyan-700"></div>
      <div id="technologies" className="bg-cyan-700 flex flex-col">
        <TagWrapper
          tag="Technologies"
          className={{ open: '', close: 'self-end' }}
        >
          <div>What I Work With:</div>
          <div className="relative flex flex-row items-center justify-center">
            <div className="h-[600px] w-full">{techCloud}</div>
            {currentSkill !== null && (
              <SkillOverlay skill={currentSkill} handleClose={handleClose} />
            )}
          </div>
        </TagWrapper>
      </div>
      <div className="h-[10vh] mb-[6vh] rounded-b-[80rem] bg-cyan-700"></div>
    </>
  );

  return render();
};

export default Technologies;
