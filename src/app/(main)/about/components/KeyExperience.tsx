import { SparklesIcon } from "@heroicons/react/20/solid";

const KeyExperience = ({ display }: { display: string }) => {
  return (
    <div className="text-yellow-500 flex flex-row gap-2 items-center" title="Key Experience">
      <SparklesIcon className="h-6" />
      <div className="font-mono text-base">{display}</div>
    </div>
  )
}

export default KeyExperience;
