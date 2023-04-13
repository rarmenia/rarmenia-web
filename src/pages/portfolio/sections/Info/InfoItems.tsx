import { AcademicCapIcon, BriefcaseIcon, IdentificationIcon, MapPinIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import ComponentViewIntersection from "components/providers/ComponentViewIntersection";
import InfoCard from "./InfoCard";

const items: { icon: React.ReactNode, text: string, title: string }[] = [
  {
    icon: <UserCircleIcon />,
    text: 'Rei Armenia',
    title: 'Name'
  },
  {
    icon: <IdentificationIcon />,
    text: 'they/them',
    title: 'Pronouns'
  },
  {
    icon: <BriefcaseIcon />,
    text: 'Front-End Developer',
    title: 'Position'
  },
  {
    icon: <MapPinIcon />,
    text: 'Capitol Region, New York, USA',
    title: 'Location'
  },
  {
    icon: <AcademicCapIcon />,
    text: 'Champlain College',
    title: 'Education'
  }
]

const InfoItems = () => {
  return (
    <div className="flex flex-col gap-2 w-11/12 md:w-6/12">
      {items.map((item, index) => (
        <ComponentViewIntersection threshold={0.4} key={index} >
          {
            (intersection) => (
              <>
                <InfoCard key={index} {...item} isVisible={intersection.isVisible} />
              </>
            )
          }

        </ComponentViewIntersection>
      ))}
    </div>

  );

}

export default InfoItems;
