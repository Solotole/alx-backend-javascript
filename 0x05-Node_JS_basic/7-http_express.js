const express = require('express');
const fs = require('fs');
const path = require('path');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const databaseFile = process.argv[2];
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  try {
    const studentsData = await countStudents(databaseFile);
    res.end(studentsData);
  } catch (error) {
    res.end(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
