export default function cleanSet(set, startString) {
  const newArray = [];
  set.forEach((item) => {
    if (item.substr(0, 3) === startString) {
      newArray.push(item.slice(3, item.length));
    }
  });
  const preferredArray = newArray.join('-');
  return preferredArray;
}
