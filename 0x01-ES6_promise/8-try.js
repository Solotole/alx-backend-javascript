export default function divideFunction(numerator, denominator) {
  const result = numerator / denominator;
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  }
  return result;
}
