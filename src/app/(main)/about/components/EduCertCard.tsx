import Timeframe from "@/components/information/Timeframe";
import Location from "@/components/information/Location";
import { EduCertStorage, EduCertType } from "@/types";
import { AcademicCapIcon, BeakerIcon, DocumentIcon } from "@heroicons/react/20/solid";
import GlassCard from "@/components/containers/GlassCard";

type EduCertCardProps = {
  eduCert: EduCertStorage;
}

const ICON_MAP: { [key in EduCertType]: React.ReactNode } = {
  'UNDERGRAD': <AcademicCapIcon className="h-5" />,
  'GRAD': <AcademicCapIcon className="h-5" />,
  'CERT': <DocumentIcon className="h-5" />,
  'WORKSHOP': <BeakerIcon className="h-5" />,
} as const;

const EduCertCard = ({ eduCert }: EduCertCardProps) => {


  return (
    <GlassCard>
      <div className="w-[22rem] p-4 flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-row items-center gap-2">
            {ICON_MAP[eduCert.type]}
            <div className="capitalize">{eduCert.type.toLowerCase()}</div>
          </div>
          <div className="font-mono text-sm text-white/80 italic">{eduCert.source}</div>
        </div>
        <div className="font-mono flex flex-row items-center justify-between w-full">
          <Location location={eduCert.location} />
          <Timeframe {...eduCert.timeframe} hideDay />
        </div>
      </div>
    </GlassCard>
  );

}

export default EduCertCard;
