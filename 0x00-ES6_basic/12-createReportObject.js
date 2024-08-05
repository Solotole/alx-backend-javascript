export default function createReportObject(employeesList) {
  let returnObject = {
    allEmployees: {...employeesList},
    getNumberOfDepartments(parsed) {
      let count = 0;

      for(let idx in parsed) {
        count += 1;
      }
      return count;
    }
  }
  return returnObject;
}