export default function updateUniqueItems(oldMap) {
  if (!(oldMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const key of oldMap.keys()) {
    const value = oldMap.get(key);
    if (value === 1) {
      oldMap.set(key, value * 100);
    }
  }
  return oldMap;
}
