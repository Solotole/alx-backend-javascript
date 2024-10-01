import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const database = process.argv[2];
    try {
      const students = await readDatabase(database);
      res.status(200);
      res.write('This is the list of our students\n');
      for (const [field, studentsList] of Object.entries(students).sort()) {
        res.write(`Number of students in ${field}: ${studentsList.length}. List: ${studentsList.join(', ')}\n`);
      }
      res.end();
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const database = process.argv[2];
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const students = await readDatabase(database);
      res.status(200).send(`List: ${students[major].join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
