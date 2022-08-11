import React, { useState } from 'react';
import TagWrapper from '../../../../components/TagWrapper';
import TechSkills from '../../../../data/TechSkills';
import TechCloud from './TechCloud';

type Props = {};

const Technologies = (props: Props) => {

  const [currentSkill, setCurrentSkill] = useState<null | string>(null)

  return (
    <>
      <div className='h-[10vh] mt-[6vh] rounded-t-[80rem] bg-cyan-700'></div>
      <div id='technologies' className='min-h-[60vw] bg-cyan-700 flex flex-col'>
        <TagWrapper tag='Technologies' className={{ open: '', close: 'self-end' }}>
          <TechCloud handleSelect={setCurrentSkill} />
          <div className='flex-grow'></div>
        </TagWrapper>
      </div>
      <div className='h-[10vh] mb-[6vh] rounded-b-[80rem] bg-cyan-700'></div>
    </>

  );
};

export default Technologies;
