import Section from "@/components/containers/Section";
import Greeting from "./components/Greeting";

const About = () => {

  return (
    <div className="py-8 flex flex-col gap-8">
      <Greeting />
      <Section title="Where I've Been...">
      </Section>

    </div>
  );

}

export default About;
