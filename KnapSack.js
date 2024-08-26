// The Knapsack problem is an example of the combinational optimization problem. This problem is also commonly known as the “Rucksack Problem“. The name of the problem is defined from the maximization problem as mentioned below:

// Given a bag with maximum weight capacity of W and a set of items, each having a weight and a value associated with it. Decide the number of each item to take in a collection such that the total weight is less than the capacity and the total value is maximized.

// Types of Knapsack Problem:
// The knapsack problem can be classified into the following types:

// Fractional Knapsack Problem
// 0/1 Knapsack Problem
// Bounded Knapsack Problem
// Unbounded Knapsack Problem

// Types of Knapsack Problems
// Fractional Knapsack Problem:

// Description: In this version, items can be divided into smaller fractions. This means you can take any portion of an item, not just whole items.
// Approach: Greedy algorithm is used for solving this problem. The algorithm selects items based on their value-to-weight ratio until the knapsack is full.
// Example: If you have a knapsack with a weight capacity of 50 units and items with weights 10, 20, and 30 units, and corresponding values 60, 100, and 120 units, you can take fractions of the items to maximize the total value.

function fractionalKnapsack(weights, values, capacity) {
  let n = values.length;
  let items = [];

  // Store value/weight ratio along with the index
  for (let i = 0; i < n; i++) {
    items.push({
      ratio: values[i] / weights[i], // Value/weight ratio
      index: i, // index
      weight: weights[i], // weight
      value: values[i], //value
    });
    console.log(items);
  }

  // Sort items based on the value-to-weight ratio in descending order
  items.sort((a, b) => b.ratio - a.ratio); // sorting

  let totalValue = 0;
  let remainingCapacity = capacity; // 50

  for (let i = 0; i < n; i++) {
    // console.log(items[i].weight , remainingCapacity)
    if (items[i].weight <= remainingCapacity) {
      // Take the whole item
      totalValue += items[i].value; // totalValue + items[i].value
      remainingCapacity -= items[i].weight; // remainingCapacity item - items[i].weight
    } else {
      // Take fraction of the item
      totalValue += items[i].value * (remainingCapacity / items[i].weight);
      // console.log(items[i].value * (remainingCapacity / items[i].weight ))
      break; // Knapsack is full
    }
    console.log(totalValue, remainingCapacity);
  }

  return totalValue;
}

let weights = [10, 20, 30];
let values = [60, 100, 120];
let capacity = 50;

// We calculate the value-to-weight ratio for each item and sort them in descending order.
// We start picking items, either fully or partially, until the knapsack is full.
// The total value is maximized by picking fractions of items if necessary.

// console.log(fractionalKnapsack(weights, values, capacity));

// 0/1 Knapsack Problem:
// Description: Each item can either be taken whole or left behind; you cannot take a fraction of an item. This is also known as the "binary" knapsack problem.
// Approach: Dynamic programming is typically used for this problem. A 2D array is used to keep track of the maximum value that can be achieved with each possible weight capacity up to the knapsack's limit.
// Example: Given items with weights 1, 2, and 3 units, and values 10, 15, and 40 units, and a knapsack capacity of 6 units, the solution involves selecting whole items to maximize value.

function knapsack01(weights, values, capacity) {
    // The problem is to find the maximum value we can obtain 
    // by selecting items with given weights and values without exceeding the capacity.
  
    // n: total number of items
    let n = values.length;
  
    // dp is a 2D array (matrix) that stores the maximum value for each subproblem.
    // dp[i][j] will hold the maximum value that can be obtained using the first 'i' items and capacity 'j'.
    
    // Initialize the dp array.
    // The matrix will have (n + 1) rows and (capacity + 1) columns, 
    // where dp[i][j] starts at 0 (base case, no items or no capacity).
    const dp = [];
    for (let i = 0; i <= n; i++) {
      // Create a new row with (capacity + 1) columns, all initialized to 0.
      dp[i] = new Array(capacity + 1).fill(0);
    }
  
    // Iterate over each item (i starts from 1 because the 0th row and column are the base cases)
    for (let i = 1; i <= n; i++) {
      // Iterate over each capacity value from 1 to the full capacity
      for (let j = 1; j <= capacity; j++) {
        
        // If the current item's weight is less than or equal to the current capacity
        // (i.e., we can potentially include this item in the knapsack)
        if (weights[i - 1] <= j) { 
          // We decide whether to include the current item or not.
          // Option 1: Include the current item, and add its value to the maximum value
          // that can be obtained with the remaining capacity (j - weights[i - 1]).
          // Option 2: Exclude the current item and retain the maximum value found so far for the same capacity.
          // We take the maximum of these two options.
          dp[i][j] = Math.max(
            values[i - 1] + dp[i - 1][j - weights[i - 1]], // Include the item
            dp[i - 1][j] // Exclude the item
          );
        } else {
          // If the current item's weight exceeds the current capacity, 
          // we cannot include it, so we just carry forward the maximum value 
          // from the previous item (dp[i - 1][j]).
          dp[i][j] = dp[i - 1][j];
        }
      }
    } 
  
    // The answer to the problem is stored in dp[n][capacity],
    // which represents the maximum value we can achieve using 'n' items and 'capacity' capacity.
    return dp[n][capacity];
  }

//   Initial Setup:

// n is the number of items, determined from the values array length.
// A 2D array dp is initialized, with dimensions (n + 1) x (capacity + 1), where each element is initially set to 0.
// dp[i][j] will eventually hold the maximum value that can be obtained by considering the first i items and using a capacity of j.
// Nested Loops:

// The outer loop for (let i = 1; i <= n; i++) iterates over the items.
// The inner loop for (let j = 1; j <= capacity; j++) iterates over capacities from 1 to the given capacity.
// Choosing Items:

// If the weight of the current item (weights[i - 1]) is less than or equal to the current capacity (j), two options are considered:
// Include the item: Add its value to the maximum value achievable with the remaining capacity (j - weights[i - 1]).
// Exclude the item: Keep the maximum value found so far for the same capacity.
// The maximum of the two is stored in dp[i][j].
// Final Result:

// After all iterations, the maximum value for the full problem (using all items with the full capacity) will be stored in dp[n][capacity].
  

console.log(knapsack01(weights, values, capacity));

// Bounded Knapsack Problem:

// Description: Each item has a limited number of copies available. You can take up to a certain number of each item, but not more.
// Approach: Dynamic programming or a modified version of the 0/1 knapsack algorithm is used. This problem can be solved by considering each item with its bounded copies.
// Example: If you have items with weights 2 and 3 units, values 30 and 50 units, and you can take up to 2 of the first item and up to 3 of the second item, you need to consider these constraints in your solution.
// Unbounded Knapsack Problem:

// Description: There is no limit to the number of copies of each item you can take. You can include an item multiple times in the knapsack.
// Approach: Dynamic programming is commonly used. A 1D array is used to keep track of the maximum value achievable for each weight capacity. The problem is solved by iterating through each item and updating the maximum value for each weight capacity.
// Example: Given items with weights 1 and 3 units, values 10 and 40 units, and a knapsack capacity of 6 units, you can include multiple copies of these items to maximize the total value.
