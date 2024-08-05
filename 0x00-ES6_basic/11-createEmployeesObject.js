export default function createEmployeesObject(departmentName, employees) {
  const returnObject = {};

  returnObject[`${departmentName}`] = employees;

  return returnObject;
}
