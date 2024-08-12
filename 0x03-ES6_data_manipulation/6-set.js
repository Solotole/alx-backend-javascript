export default function setFromArray(array) {
  if (!Array.isArray(array)) {
    console.log('no set to return');
    // return;
  }
  const newSet = new Set(array);
  return newSet;
}
