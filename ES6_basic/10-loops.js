export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const i of array) {
    let value = i;
    value += appendString;
    newArray.push(value);
  }

  return newArray;
}
