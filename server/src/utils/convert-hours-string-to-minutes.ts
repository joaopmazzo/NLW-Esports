/**
 * Convert an hours string ("HH:HH") into a minutes integer
 * @param hourString 
 */
export function covertHourStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(":").map(Number);
  return (hours*60)+minutes;
}