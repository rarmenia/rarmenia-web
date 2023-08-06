import GlassCard from "@/components/containers/GlassCard"
import { SkillAreaIconType } from "@/types/skill/skill-area-icon-type";
import { CloudIcon, ComputerDesktopIcon, CpuChipIcon, RectangleGroupIcon, UserGroupIcon } from "@heroicons/react/20/solid"

const ICON_MAP: { [key in SkillAreaIconType]: React.ReactNode } = {
  'people': <UserGroupIcon />,
  'monitor': <ComputerDesktopIcon />,
  'cpu': <CpuChipIcon />,
  'cloud': <CloudIcon />,
  'rects': <RectangleGroupIcon />
}

type SkillAreaCardProps = {
  icon: SkillAreaIconType;

}

const SkillAreaCard = (props: SkillAreaCardProps) => {
  const icon = ICON_MAP[props.icon];
  return (
    <GlassCard>
      <div className="flex flex-col gap-2 items-center p-2">
        <div className="flex flex-row gap-1">
          <div>{icon}</div>
        </div>
      </div>
    </GlassCard>
  )
}

export default SkillAreaCard;
