export default function getStudentsByLocation(array, city) {
  if (typeof city !== 'string' && !Array.isArray(array)) {
    return [];
  }
  const newArray = array.filter((item) => item.location === city);
  return newArray;
}
