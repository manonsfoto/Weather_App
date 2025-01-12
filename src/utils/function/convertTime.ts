import { format, subHours } from "date-fns";

const convertTime = (timestamp: number, timezone: number): string => {
  const utcDate = new Date(timestamp * 1000);

  const localDate = new Date(utcDate.getTime() + timezone * 1000);

  const adjustedTime = subHours(localDate, 1);

  const formattedTime = format(adjustedTime, "hh:mm a");
  return formattedTime;
};

export default convertTime;
