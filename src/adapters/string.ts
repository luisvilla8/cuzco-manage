export const adapterGroupNumberToString = (groupNumber: string[]) => {
  const string = groupNumber.length === 9 && groupNumber.every(n => n !== "") ? groupNumber.join('') : "000000000"
  return string
}