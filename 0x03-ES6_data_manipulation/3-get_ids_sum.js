export default function getStudentIdsSum(array) {
  if (Array.isArray(array) === false) {
    return -1;
  }
  const idArray = array.map((item) => item.id);
  const sumId = idArray.reduce((accumulator, nextElement) => accumulator + nextElement);
  return sumId;
}
