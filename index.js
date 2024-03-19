// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Function to add up the elements of the array
function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Call the function with the array and log the result
console.log("The sum of the array is:", arraySum(numbers));
