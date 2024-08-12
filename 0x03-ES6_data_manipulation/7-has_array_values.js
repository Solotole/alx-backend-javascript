export default function hasValuesFromArray(set, array) {
  const newArray = [];
  for (const item of array) {
    if (set.has(item)) {
      newArray.push(1);
    } else {
      newArray.push(0);
    }
  }
  const value = !newArray.includes(0);
  return value;
}
