import { AcademicCapIcon, BriefcaseIcon, GlobeAmericasIcon, IdentificationIcon, MapIcon, MapPinIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import InfoCard from "./InfoCard";
import ScreenSize from "components/providers/ScreenSize";
import MappedProperty from "components/processors/MappedProperty";
import ScrollPosition from "components/providers/ScrollPosition";

const items: [React.ReactNode, string, string][] = [
  [
    <UserCircleIcon />,
    'Rei Armenia',
    'Name'
  ],
  [
    <IdentificationIcon />,
    'they/them',
    'Prounouns'
  ],
  [
    <BriefcaseIcon />,
    'Front-End Developer',
    'Position'
  ],
  [
    <MapPinIcon />,
    'Capitol Region, New York, USA',
    'Current Location'
  ],
  [
    <AcademicCapIcon />,
    'Champlain College - B.S. 2018',
    'Education'
  ],
]

const InfoItems = () => {
  return (
    <ScrollPosition children={(position => (
      <ScreenSize children={(size) => (
        <div className="flex flex-col gap-4 w-11/12 md:w-6/12">
          {items.map(([icon, text, title], index) => (
            <MappedProperty
              key={index}
              active={[size.height / 48, size.height - ((size.height / 4) - (index * 100))]}
              target={[20, 100]}
              current={position}
              children={(opacity) => (
                <InfoCard icon={icon} text={text} title={title} opacity={opacity} />
              )}
            />))}
        </div>
      )} />
    ))} />
  );

}

export default InfoItems;
