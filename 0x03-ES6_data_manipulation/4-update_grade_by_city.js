export default function updateStudentGradeByCity(listObjects, city, newGrades) {
  return listObjects
    .filter((item) => item.location === city)
    .map((item) => {
      const studentGrade = newGrades.find((value) => item.id === value.studentId);
      return {
        ...item,
        grade: studentGrade ? studentGrade.grade : 'N/A',
      };
    });
}
