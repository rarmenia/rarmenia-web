import GlassCard from "@components/GlassCard";
import { Me } from "@data/me";
import WorkCard from "./WorkCard";

const Work = () => {

  return (
    <div id='work' className="flex flex-col gap-6 items-center">
      <GlassCard className="text-white text-2xl/none px-8 py-2 rounded-sm font-mono">Work Experience</GlassCard>
      <div className="flex flex-col items-center w-full">
        {Me.professional.work.map((work, ind) => <WorkCard key={ind} work={work} />)}
      </div>
    </div>
  );

}

export default Work;