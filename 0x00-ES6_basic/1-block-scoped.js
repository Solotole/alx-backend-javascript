export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  // to avoid the assigning but nit used error
  if (trueOrFalse) {
    // No operation
  }
  return [task, task2];
}
