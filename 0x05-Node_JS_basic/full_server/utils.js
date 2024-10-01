const fs = require('fs');
const path = require('path');

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
	return;
      }
      const content = data.trim().split('\n').filter(line => line.length > 0);
      const fields = {};
      content.forEach((row, index) => {
        if (index > 0) {
          const [firstname, , , field] = row.split(',');
	  if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });
      resolve(fields);
    });
  });
};

module.exports = readDatabase;
