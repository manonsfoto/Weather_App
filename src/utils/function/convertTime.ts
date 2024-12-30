import { format, subHours } from "date-fns";

const convertTime = (timestamp: number, timezone: number): string => {
  // Convert the Unix timestamp to a Date object
  const utcDate = new Date(timestamp * 1000);
  // Convert UTC to the specific timezone
  const localDate = new Date(utcDate.getTime() + timezone * 1000);
  // Subtract 1 hour to adjust the time
  const adjustedTime = subHours(localDate, 1);
  // Format the local date as a readable time
  const formattedTime = format(adjustedTime, "hh:mm a");
  return formattedTime;
};

export default convertTime;
