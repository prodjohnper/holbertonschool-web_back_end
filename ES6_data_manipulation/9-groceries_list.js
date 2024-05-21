/*
  9-groceries_list.js

  Function that returns a map of groceries with the following items:

  Apples, 10
  Tomatoes, 10
  Pasta, 1
  Rice, 1
  Banana, 5
*/

export default function groceriesList() {
  // Create a new map of groceries
  const groceries = new Map();
  // Set the groceries map with the following items
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  // Return the groceries map
  return groceries;
}
