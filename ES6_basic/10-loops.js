export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const i of array) {
    let value = i;
    value = appendString + value;
    newArray.push(value);
  }

  return newArray;
}
