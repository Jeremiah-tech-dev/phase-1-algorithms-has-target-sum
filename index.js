function hasTargetSum(array, target) {
  const numSet = new Set();
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (numSet.has(complement)) {
      return true;
    }
    numSet.add(array[i]);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here
  1. Create a new Set to store numbers we've seen
  2. Loop through each number in the array
  3. For each number, calculate its complement (target - number)
  4. If the complement is in the Set, we found a pair
  5. If not, add the current number to the Set
  6. If we finish the loop without finding a pair, return false
*/

/*
  Add written explanation of your solution here
  The algorithm uses a Set to keep track of the numbers we've seen so far.
  For each number in the array, we calculate its complement (the number we need to find to reach the target).
  If the complement is already in the Set, we return true.
  If not, we add the current number to the Set and continue.
  If we finish the loop without finding a pair, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
