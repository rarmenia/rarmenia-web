import GlassCard from "@/components/containers/GlassCard"
import { CloudIcon, ComputerDesktopIcon, CpuChipIcon, RectangleGroupIcon, UserGroupIcon } from "@heroicons/react/20/solid"
import KeyExperience from "../information/KeyExperience";
import { SkillAreaIconType } from "@/types/about/skill/skill-area-icon-type";
import { SkillAreaStorage } from "@/types/about/skill/skill-area";

const ICON_MAP: { [key in SkillAreaIconType]: React.ReactNode } = {
  'people': <UserGroupIcon className="h-6" />,
  'monitor': <ComputerDesktopIcon className="h-6" />,
  'cpu': <CpuChipIcon className="h-6" />,
  'cloud': <CloudIcon className="h-6" />,
  'rects': <RectangleGroupIcon className="h-6" />
} as const;

type SkillAreaCardProps = {
  skill: SkillAreaStorage
}

const SkillAreaCard = ({ skill }: SkillAreaCardProps) => {
  return (
    <GlassCard>
      <div className="w-[22rem] h-52 p-2 flex flex-col items-center gap-2 justify-evenly">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-row gap-2">
            {ICON_MAP[skill.icon]}
            <div> {skill.name} </div>
          </div>
          <KeyExperience display={skill.key} />
        </div>
        <ul className="w-full grid grid-cols-2 items-center px-4 gap-4">
          {skill.other.map((single, ind) => <li key={ind} className="text-xs text-white/60 font-mono col-span-1">{single}</li>)}
        </ul>
      </div>
    </GlassCard >
  )
}

export default SkillAreaCard;
