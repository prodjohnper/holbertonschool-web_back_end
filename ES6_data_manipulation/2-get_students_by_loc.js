/*
    2-get_students_by_loc.js

    Function that returns an array of objects who are located in a specific city.
*/

export default function getStudentsByLocation(students, city) {
  // Check if students is an array and city is a str
  if (!Array.isArray(students) || typeof city !== 'string') {
    // Return an empty array
    return [];
  }
  // Return a new array with the students located in the city
  return students.filter((student) => student.location === city);
}
