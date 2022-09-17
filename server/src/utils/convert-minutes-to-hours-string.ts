/**
 * Convert minutes number into a hours string ("HH:MM")
 * @param totalMinutes
 */
export function covertMinutesToHoursString(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
}
