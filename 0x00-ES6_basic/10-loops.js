export default function appendToEachArrayValue(array, appendString) {
  const arrayNew = [];
  for (const value of array) {
    arrayNew.push(appendString + value);
  }
  return arrayNew;
}
