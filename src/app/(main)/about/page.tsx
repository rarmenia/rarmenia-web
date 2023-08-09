import Section from "@/components/containers/Section";
import Greeting from "./Greeting";
import Workplace from "@/components/display/work/Workplace";
import HorizontalArea from "@/components/containers/HorizontalArea";
import SkillAreaCard from "@/components/display/skill/SkillAreaCard";
import { SKILLS, WORK_EXPERIENCE, EDU_CERT } from "@/data/about";
import EduCertCard from "@/components/display/edu-cert/EduCertCard";

const sections = [
  {
    title: 'Where I\'ve Been',
    renderer: (data: any, key: number) => <Workplace workplace={data} key={key} />,
    data: WORK_EXPERIENCE,
  },
  {
    title: 'What I Do',
    renderer: (data: any, key: number) => <div key={key} className="w-fit"><SkillAreaCard skill={data} /></div>,
    data: SKILLS,
  },
  {
    title: 'Education & Certifications',
    renderer: (data: any, key: number) => <div key={key} className="w-fit"><EduCertCard eduCert={data} /></div>,
    data: EDU_CERT,
  }
]


const About = () => {

  return (
    <div className="py-8 flex flex-col gap-4">
      <Greeting />
      {
        sections.map((section, sKey) =>
          <Section title={section.title} key={sKey}>
            <HorizontalArea>
              <div className="flex flex-row gap-4 p-4">
                {section.data.map((data, key) => section.renderer(data, key))}
              </div>
            </HorizontalArea>
          </Section>
        )
      }
    </div>
  );

}

export default About;
