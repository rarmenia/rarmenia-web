import Section from "@/components/containers/Section";
import Greeting from "./components/Greeting";
import Workplace from "./components/Workplace";
import { WORK_EXPERIENCE } from "@/data/work-experience";

const About = () => {

  return (
    <div className="py-8 flex flex-col gap-8">
      <Greeting />
      <Section title="Where I've Been...">
        <div className="min-w-full max-w-full overflow-x-hidden">
          <div className="overflow-x-auto flex flex-row gap-4 p-4">
            {WORK_EXPERIENCE.map((workplace, ind) => <Workplace workplace={workplace} key={ind} />)}
          </div>
        </div>
      </Section>

    </div>
  );

}

export default About;
