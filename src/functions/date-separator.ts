export type DateStorage = {
  day: number;
  month: number;
  year: number;
  weekDay: number;
}


export function dateSeparator(date: Date): DateStorage {

  return {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
    weekDay: date.getDay(),
  }

}
