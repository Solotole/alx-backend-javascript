export default function createEmployeesObject(departmentName, employees) {
  let returnObject = {};

  returnObject[`${departmentName}`] = employees;

  return returnObject;
}
