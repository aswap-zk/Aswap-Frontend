//
// 숫자 및 소수점만 입력 가능하게하며 1,000 단위마다 , 추가
export function formatDecimalWithCommas(value: string) {
  let inputValue = value;
  // Remove all commas for processing
  inputValue = inputValue.replace(/,/g, "");

  // 숫자와 소수점만 입력 가능한 정규식 검사
  if (!/^[\d.]*$/.test(inputValue)) return;

  // 소수점은 하나만 허용
  if ((inputValue.match(/\./g) || []).length > 1) return;

  // 숫자는 1,000 단위마다 콤마로 구분
  const parts = inputValue.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return parts.join(".");
}

export function formatNumberWithCommas(value: number | string) {
  const inputValue = typeof value === "number" ? value.toString() : value;
  const parts = inputValue.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return parts.join(".");
}

// 콤마를 포함해 표시한 string 값을 number로 변환
export function parseNumberFromString(str: string): number {
  const numericString = str.replace(/,/g, ""); // 콤마 제거
  return parseFloat(numericString);
}
