import { DateStorage, dateSeparator } from "@/functions/date";
import { TimeframeStorage } from "@/types/timeframe";
import { ClockIcon } from "@heroicons/react/20/solid";

type TimeframeProps = TimeframeStorage & { separator?: string, hideDay?: boolean }

const Timeframe = (props: TimeframeProps) => {

  const parts: (DateStorage | string)[] = [];
  const separator = props.separator ?? ' - ';

  parts.push(dateSeparator(props.start));
  parts.push(separator)
  parts.push(props.end ? dateSeparator(props.end) : 'Today');

  const timeframeString = parts.map((part: DateStorage | string) => {
    if (typeof part === 'string') return part;
    return [part.month + 1, props.hideDay ? undefined : part.day, part.year].reduce((prev: string, curr: number | undefined) => {
      if (!curr) return prev;
      return prev ? `${prev}/${curr}` : `${curr}`;
    }, '')
  }).join('')

  return (
    <span className="inline-flex gap-1 items-center justify-center font-mono text-xs text-white/40 italic">
      <ClockIcon className="h-4 w-4" />
      <span>{timeframeString}</span>
    </span>
  )

}

export default Timeframe;

