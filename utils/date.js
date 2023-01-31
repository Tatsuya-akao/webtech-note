// january 25, 2023

import { utcToZonedTime } from "date-fns-tz";

export const formatDate = (dateData) => {
  const data = utcToZonedTime(dateData, "Asia/Tokyo");

  const year = data.getFullYear();
  const monthIndex = data.getMonth();
  const date = data.getDate();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${months[monthIndex]} ${date}, ${year}`;
};
