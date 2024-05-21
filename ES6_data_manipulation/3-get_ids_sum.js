/*
  3-get_ids_sum.js

  Function that returns the sum of all the student ids.
*/

export default function getStudentIdsSum(students) {
  // Check if students is an array
  if (!Array.isArray(students)) {
    // Return 0 if students is not an array
    return 0;
  }
  // Return the sum of all the student ids
  return students.reduce((sum, student) => sum + student.id, 0);
}
