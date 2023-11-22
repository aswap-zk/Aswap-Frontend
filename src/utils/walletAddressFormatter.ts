export function truncateString(str: string): string {
  if (str.length <= 13) {
    return str;
  }
  return str.substring(0, 8) + "..." + str.substring(str.length - 5);
}
