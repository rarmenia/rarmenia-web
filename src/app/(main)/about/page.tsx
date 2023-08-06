import Section from "@/components/containers/Section";
import Greeting from "./Greeting";
import { WORK_EXPERIENCE } from "@/data/work-experience";
import Workplace from "@/components/display/work/Workplace";
import HorizontalArea from "@/components/containers/HorizontalArea";

const About = () => {

  return (
    <div className="py-8 flex flex-col gap-8">
      <Greeting />
      <Section title="Where I've Been...">
        <HorizontalArea>
          <div className="flex flex-row gap-4 p-4">
            {WORK_EXPERIENCE.map((workplace, ind) => <Workplace workplace={workplace} key={ind} />)}
          </div>
        </HorizontalArea>
      </Section>
      <Section title="What I Do...">
        <HorizontalArea>
          <div className="flex flex-row gap-4 p-4">

          </div>
        </HorizontalArea>
      </Section>

    </div>
  );

}

export default About;
