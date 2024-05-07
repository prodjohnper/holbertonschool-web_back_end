export default class HolbertonCourse {
  // constructor method with 3 parameters (name, length, students)
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }

    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }

    if (Array.isArray(students)) {
      if (students.every((student) => typeof student === 'string')) {
        this._students = [...students];
      } else {
        throw new TypeError('Students must be an array of strings');
      }
    }
  }

  // name getter and setter
  get name() {
    // Return the name
    return this._name;
  }

  set name(value) {
    // Check if value is a string
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // length getter and setter
  get length() {
    // Return the length
    return this._length;
  }

  set length(value) {
    // Check if value is a number
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // students getter and setter
  get students() {
    // Return the array of students
    return this._students;
  }

  set students(value) {
    // Check if value is an array of strings
    if (Array.isArray(value)
        && value.every((student) => typeof student === 'string')) {
      this._students = [...value];
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
