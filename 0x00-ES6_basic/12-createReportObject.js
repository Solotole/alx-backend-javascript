export default function createReportObject(employeesList) {
  const returnObject = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(parsed) {
      const keysArray = Object.keys(parsed);
      const count = keysArray.length;

      return count;
    },
  };
  return returnObject;
}
