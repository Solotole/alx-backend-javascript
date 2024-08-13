export const weakMap = new WeakMap();

export function queryAPI(object) {
  let count;
  if (weakMap.get(object) === undefined) {
    weakMap.set(object, 1);
  } else if (weakMap.get(object) >= 5) {
    throw new Error('Endpoint load is high');
  } else if (weakMap.get(object) < 5) {
    count = weakMap.get(object) + 1;
    weakMap.set(object, count);
  }
}
