const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8')
      .then((data) => {
        const lines = data.trim().split('\n').filter((line) => line.length > 0);
        if (lines.length === 0) {
          reject(new Error('Cannot load the database'));
          return;
        }
        const students = {};
        let totalStudents = 0;
        lines.slice(1).forEach((line) => {
          const [firstname, , , field] = line.split(',');
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
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
