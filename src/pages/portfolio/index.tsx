import { NextPage } from 'next';
import About from './sections/About';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Technologies from './sections/Technologies';
import WorkExperience from './sections/WorkExperience';

const Portfolio: NextPage = () => {
  return (
    <div className="relative overflow-hidden">
      <main className="w-full overflow-auto">
        <Hero />
        <About />
        <Technologies />
        <WorkExperience />
        <Projects />
      </main>
    </div>
  );
};

export default Portfolio;
