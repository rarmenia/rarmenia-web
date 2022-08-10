import React from 'react';
import TagWrapper from '../../../components/TagWrapper';

type Props = {};

const About = (props: Props) => {
  return (
    <div id="about" className="min-h-screen bg-stone-800 flex flex-col">
      <TagWrapper tag="About" className="p-2">
        <div className="text-white w-100">
          <h2 className="text-xl ml-2">
            About <span className="text-amber-600">Me</span>
          </h2>
        </div>
        <div className="flex-grow"></div>
      </TagWrapper>
    </div>
  );
};

export default About;
