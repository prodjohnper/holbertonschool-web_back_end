/*
    9-try.js

    Function 'guardrail' that accepts 'mathFunction'(function) arg.
    This function will create and return an array named queue.
    When the 'mathFunction' function is executed, the value returned
    by the function should be appended to the 'queue'. If this function
    throws an error, the error message should be appended to the 'queue'.
    In every case, the message 'Guardrail was processed' should be added
    to the 'queue'.
*/

// Function 'guardrail' that accepts 'mathFunction'(function) arg
export default function guardrail(mathFunction) {
  // Create and return an array named 'queue'
  const queue = [];

  // Return the 'queue' array after the 'mathFunction' is executed
  try {
    // Execute the 'mathFunction' function
    const result = mathFunction();
    // Append the value returned by the function to the 'queue'
    queue.push(result);
    // Handle the error if the 'mathFunction' function throws an error
  } catch (err) {
    // Append the error message to the 'queue'
    queue.push(`Error: ${err.message}`);
    // Append the message 'Guardrail was processed' to the 'queue' in every case
  } finally {
    queue.push('Guardrail was processed');
  }
  // Return the 'queue' array
  return queue;
}
