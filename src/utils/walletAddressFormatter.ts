export function truncateString(
  str: string,
  start?: number,
  end?: number
): string {
  if (start === null && end === null && str.length <= 13) {
    return str;
  }
  if (start !== undefined && end !== undefined) {
    return str.substring(0, start) + "..." + str.substring(str.length - end);
  }
  return str.substring(0, 8) + "..." + str.substring(str.length - 5);
}
