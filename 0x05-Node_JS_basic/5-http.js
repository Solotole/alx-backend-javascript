const http = require('http');
const url = require('url');
const { readFile } = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);
const countStudents = async (path) => {
  try {
    const data = await readFileAsync(path, 'utf-8');
    const lines = data.trim().split('\n').filter((line) => line.length > 0);
    if (lines.length === 0) throw new Error('Cannot load the database');
    const students = {};
    let totalStudents = 0;
    lines.slice(1).forEach((line) => {
      const studentData = line.split(',');
      const [firstname, , , field] = studentData;
      if (!students[field]) students[field] = [];
      students[field].push(firstname);
      totalStudents += 1;
    });
    let result = `Number of students: ${totalStudents}\n`;
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        const studentList = students[field];
        result += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
      }
    }
    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

// Create HTTP server
const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    try {
      const studentsData = await countStudents(process.argv[2]);
      res.end(studentsData);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
