interface Props {
  frame?: [string] | [string, string];
  className?: string;
}


const TimeFrame = (props: Props) => {


  const splitDate = (
    date: string
  ): [number, number | null, number | null] => {
    const parts: number[] = date.split('-').map((sub) => Number.parseInt(sub));
    const year = parts[0];
    const month = parts[1] - 1 ?? null;
    const day = parts[2] ?? null;
    return [year, month, day];
  }

  const toDate = (date: string): Date => {
    const [year, month, day] = splitDate(date);
    return new Date(year, month ?? 0, day ?? 1);
  }

  const frame = (props.frame ?? ['??', '??']).map(date => {
    {
      if (date === '??') return date;
      const [year, month, day] = splitDate(date);
      const dObj = toDate(date);
      const mStr = month
        ? new Intl.DateTimeFormat('en-US', { month: 'short' }).format(dObj)
        : null;
      const front = [mStr, day ? `${day},` : null]
        .filter((_) => !!_)
        .join(' ')
        .trim();
      return [front, year].filter((_) => !!_).join(' ');
    }
  })
  const start = frame[0];
  const end = frame[1] ?? 'Present';

  return (
    <>
      <span className={props.className ?? ''}>{start} - {end}</span>
    </>
  )

};

export default TimeFrame;