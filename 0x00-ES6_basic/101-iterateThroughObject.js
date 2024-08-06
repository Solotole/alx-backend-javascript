export default function iterateThroughObject(reportWithIterator) {
  console.log(reportWithIterator);
  return [...reportWithIterator].join(' | ');
}
