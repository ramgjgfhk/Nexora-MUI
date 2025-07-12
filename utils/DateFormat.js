export const dateFormate = (date) => {
  const rawDate = date;
  const customDate = new Date(rawDate);

  const formatted = customDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return formatted
};
