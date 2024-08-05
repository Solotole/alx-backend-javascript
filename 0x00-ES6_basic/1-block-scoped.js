export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  // to avoid the assigning but nit used error
  if (trueOrFalse) {
  }
  return [task, task2];
}
