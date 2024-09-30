const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n').filter(line => line.length > 0);
    if (lines.length === 0) throw new Error('Cannot load the database');
    const header = lines.shift();
    const students = {};
    let totalStudents = 0;
    lines.forEach((line) => {
      const studentData = line.split(',');
      const [firstname, lastname, age, field] = studentData;
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
      totalStudents += 1;
    });
    console.log(`Number of students: ${totalStudents}`);
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        const studentList = students[field];
        console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
