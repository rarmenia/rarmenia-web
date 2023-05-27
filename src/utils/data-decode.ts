type Part = string | string[];
export function locationString(
  parts: Part[],
  useShort: boolean = true
): string {
  return parts.reduce((prev: string, curr: Part) => {
    const target = useShort ? 0 : 1;
    const next = Array.isArray(curr) ? curr[target] ?? curr[0] : curr;
    return prev ? `${next}, ${prev}` : next;
  }, '');
}

export function fancyFrame(frame?: [string] | [string, string]): string {
  if (!frame) return '';
  return `${fancyDate(frame[0])} - ${fancyDate(frame[1])}`;
}

export function fancyDate(date?: string): string {
  if (!date) return 'Present';
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

export function splitDate(
  date: string
): [number, number | null, number | null] {
  const parts: number[] = date.split('-').map((sub) => Number.parseInt(sub));
  const year = parts[0];
  const month = parts[1] - 1 ?? null;
  const day = parts[2] ?? null;
  return [year, month, day];
}

export function toDate(date: string): Date {
  const [year, month, day] = splitDate(date);
  return new Date(year, month ?? 0, day ?? 1);
}
