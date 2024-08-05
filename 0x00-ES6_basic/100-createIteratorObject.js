export default function createIteratorObject(report) {
  const employees = [];

  for (const department in report.allEmployees) {
    if (Object.hasOwn(report.allEmployees, department)) {
      employees.push(...report.allEmployees[department]);
    }
  }

  return {
    * [Symbol.iterator]() {
      for (const employee of employees) {
        yield employee;
      }
    },
  };
}
