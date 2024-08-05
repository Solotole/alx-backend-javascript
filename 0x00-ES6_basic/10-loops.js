export default function appendToEachArrayValue(array, appendString) {
  let array2 = [];
  for (let idx of array) {
    let value = idx;
    array2.push(appendString + value);
  }

  return array2;
}
