/*
    8-try.js

    Function that accepts two args 'numerator' and 'denominator'
    When the 'denominator' argument is equal to '0', the function should
    throw a new error with the message 'cannot divide by 0'. Otherwise
    it should return the 'numerator' divided by the 'denominator'.
*/

// Function that accepts two args 'numerator' and 'denominator'
export default function divideFunction(numerator, denominator) {
  // If the 'denominator' argument is equal to '0', throw a new error
  if (denominator === 0) {
    // Error with the message 'cannot divide by 0'
    throw new Error('cannot divide by 0');
  }
  // Otherwise return the 'numerator' divided by the 'denominator'
  return numerator / denominator;
}
