import { MapPinIcon } from "@heroicons/react/20/solid";

type LocationProps = {
  location: string;
}

const Location = ({ location }: LocationProps) => {
  return (
    <span className="inline-flex gap-1 items-center justify-center font-mono text-xs text-white/40 italic">
      <MapPinIcon className="h-4 w-4" />
      <span>{location}</span>
    </span>
  )
}

export default Location;
