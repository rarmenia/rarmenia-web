import { DateStorage } from "@/types";

export function dateSeparator(date: Date): DateStorage {

  return {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
    weekDay: date.getDay(),
  }

}
