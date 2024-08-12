export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const idArray = array.map((item) => item.id);
  return idArray;
}
