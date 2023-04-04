import React from 'react';
import PersonalContent from './PersonalContent';
import ProfessionalContent from './ProfessionalContent';


type Props = {};

const About = (props: Props) => {
  return (
    <div id='about' className='bg-stone-800 flex flex-col'>
      <div className='px-4 py-8 w-full h-full flex flex-col items-center justify-center gap-8'>
        <div className='h-full bg-stone-100 w-10/12 py-8 px-4 rounded-xl shadow-sm animate-fade-in'>
          <PersonalContent />
        </div>
        <div className='h-full bg-stone-100 w-10/12 py-8 px-4 rounded-xl shadow-sm animate-fade-in'>
          <ProfessionalContent />
        </div>
      </div>
      <div className='flex-grow'></div>
    </div>
  );
};

export default About;
