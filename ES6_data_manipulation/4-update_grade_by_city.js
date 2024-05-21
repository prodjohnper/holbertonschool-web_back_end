/*
    4-update_grade_by_city.js

    Function that returns an array of students for a specific city with their new grade
*/

export default function updateStudentGradeByCity(students, city, newGrades) {
  // Check if students is an array, city is a string, and newGrades is an array
  if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    // Return an empty array if one of the conditions is not met
    return [];
  }
  // Return an array of students with their grades updated
  return students
    // Filter students by city
    .filter((student) => student.location === city)
    // Map through the filtered students
    .map((student) => {
      // Find the grade record for the student
      const gradeRecord = newGrades.find((grade) => grade.studentId === student.id);
      return {
        // Return the student with the updated grade
        ...student,
        grade: gradeRecord ? gradeRecord.grade : 'N/A',
      };
    });
}
