import { AcademicCapIcon, BriefcaseIcon, IdentificationIcon, MapPinIcon, UserCircleIcon } from "@heroicons/react/24/outline";
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
    title: 'Prounouns'
  },
  {
    icon: <BriefcaseIcon />,
    text: 'Front-End Developer',
    title: 'Position'
  },
  {
    icon: <MapPinIcon />,
    text: 'Capitol Region, New York, USA',
    title: 'Current Location'
  },
  {
    icon: <AcademicCapIcon />,
    text: 'Champlain College - B.S. 2018',
    title: 'Education'
  }
]

const InfoItems = () => {
  return (
    <div className="flex flex-col gap-4 w-11/12 md:w-6/12">
      {items.map((item, index) => (
        <InfoCard key={index} {...item} />
      ))}
    </div>

  );

}

export default InfoItems;
