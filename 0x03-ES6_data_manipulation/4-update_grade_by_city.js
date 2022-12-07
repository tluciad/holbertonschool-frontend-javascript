export default function updateStudentGradeByCity(list, city, newGrade) {
  return list
    .filter((item) => item.location === city)
    .map((student) => {
      const theGrade = newGrade.find((grade) => grade.studentId === student.id);
      const grade = theGrade ? theGrade.grade : 'N/A';
      return { ...student, grade };
    });
}
