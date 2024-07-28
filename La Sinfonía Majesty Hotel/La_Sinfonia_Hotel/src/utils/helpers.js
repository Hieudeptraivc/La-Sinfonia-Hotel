import { formatDistance, parseISO } from "date-fns";
import { differenceInDays } from "date-fns";
import { AUTH_TOKEN } from "./constant";

export const getToken = () => {
  return localStorage.getItem(AUTH_TOKEN);
};

export const setToken = (token) => {
  if (token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
};

export const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
};

export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));
export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");
export const getDateWithoutTime = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

export const checkDateInRange = (startDate, endDate, rangeDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return rangeDate.some((range) => {
    const rangeStart = new Date(range.dateStart);
    const rangeEnd = new Date(range.dateEnd);

    return start <= rangeEnd && end >= rangeStart;
  });
};
