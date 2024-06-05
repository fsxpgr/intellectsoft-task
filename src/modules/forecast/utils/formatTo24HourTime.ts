export function formatTo24HourTime(date: Date) {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  } as const;
  const formatter = new Intl.DateTimeFormat("default", options);

  return formatter.format(date);
}
