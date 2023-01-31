// january 25, 2023

export const formatDate = (dateData) => {
  const data = new Date(dateData);
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
