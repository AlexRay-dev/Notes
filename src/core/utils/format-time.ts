import {format} from "date-fns";

const months = {
  0: "января",
  1: "февраля",
  2: "марта",
  3: "апреля",
  4: "мая",
  5: "июня",
  6: "июля",
  7: "августа",
  8: "сентября",
  9: "октября",
  10: "ноября",
  11: "декабря",
};

export const formatDate = (date: Date): string => {
  const day = format(date, "dd");
  const year = format(date, "yyyy");
  const month = date.getMonth();

  return (`${day} ${months[month as keyof typeof months]} ${year}`);
};