import { DateTime } from "luxon";

export const getRequiredTimeFormat = (date: string) => {
  const newDate = DateTime.fromISO(date).toFormat("MM-dd-yyyy hh:mm");

  return newDate;
};
