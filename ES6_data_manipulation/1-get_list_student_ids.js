/*
    1-get_list_student_ids.js

    Function that returns an array of ids from a list of object.
*/

export default function getListStudentIds(students) {
  // Check if students is an array
  if (!Array.isArray(students)) {
    return [];
  }
  // Return a new array with the id of each student
  return students.map((student) => student.id);
}
