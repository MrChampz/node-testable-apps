import { parseISO, setYear } from "date-fns";

/**
 * Receives "2022-08-10" and returns "2023-08-10"
 * @param date Received date
 */
export function getFutureDate(date: string): Date {
  const parsedDate = parseISO(date);
  return setYear(parsedDate, parsedDate.getFullYear() + 1);
}
