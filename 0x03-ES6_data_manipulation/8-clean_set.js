export default function cleanSet(set, startString) {
  const newArray = [];
  const sLength = startString.length;
  set.forEach((item) => {
    if (item.substr(0, sLength) === startString && sLength !== 0) {
      newArray.push(item.slice(sLength, item.length));
    }
  });
  const preferredArray = newArray.join('-');
  return preferredArray;
}
