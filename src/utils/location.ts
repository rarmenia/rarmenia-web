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
