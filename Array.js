// The expression return arr.reduce((total, num) => total + num, 0) is a concise way of summing all elements in an array. Here's a breakdown of how it works:

// Components:
// arr.reduce():
// The reduce() method in JavaScript executes a reducer function on each element of the array, resulting in a single output value. It's commonly used to accumulate values, like summing elements, finding a product, etc.
// Parameters in reduce():
// (total, num):
// These are the arguments of the reducer function.
// total: This is the accumulator that holds the running total of the sum.
// num: This is the current value being processed in the array.
// Initial value:
// 0 (the second argument to reduce()):
// This is the initial value of total, which starts at 0 (since we're summing the elements).
// How it works step by step:
// First iteration:

// total = 0 (initial value), num = arr[0]
// The sum total + num is calculated, and this result becomes the new total.
// Subsequent iterations:

// For each subsequent element in the array, the current num is added to the running total.
// Final result:

// After all elements have been processed, reduce() returns the final total, which is the sum of all numbers in the array.


// Iteration 1: total = 0, num = 1, result = 0 + 1 = 1
// Iteration 2: total = 1, num = 2, result = 1 + 2 = 3
// Iteration 3: total = 3, num = 3, result = 3 + 3 = 6
// Iteration 4: total = 6, num = 4, result = 6 + 4 = 10
// Iteration 5: total = 10, num = 5, result = 10 + 5 = 15


const numbers = [175, 50, 25]; 

function myFunction(arr) {
    return arr.reduce((total,num)=> total + num , 0 )
//   return arr.reduce((total, num) => total + num, 0);
}

console.log(myFunction(numbers))

// Print First N Fibonacci Numbers

// What is the Fibonacci Sequence?
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The sequence starts like this:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// F(0) = 0
// F(1) = 1
// For n ≥ 2, F(n) = F(n-1) + F(n-2)
//  F(10) = F(9) + F(8) = 34 + 21 = 55

// Base Case (n < 2):

// If n is less than 2 (i.e., n = 0 or n = 1), return n directly.
// fibonacci(0) returns 0.
// fibonacci(1) returns 1.
// This base case prevents further recursive calls and serves as the stopping condition for the recursion.


// Recursive Case:

// If n is greater than or equal to 2, the function recursively calls itself twice:
// fibonacci(n - 1): Computes the (n-1)-th Fibonacci number.
// fibonacci(n - 2): Computes the (n-2)-th Fibonacci number.
// The sum of these two results gives the Fibonacci number for n.

// Example Walkthrough (fibonacci(5)):
// To compute fibonacci(5), the function will make recursive calls:


// fibonacci(5) = fibonacci(4) + fibonacci(3) = 7
// fibonacci(4) = fibonacci(3) + fibonacci(2) = 5
// fibonacci(3) = fibonacci(2) + fibonacci(1) = 3
// fibonacci(2) = fibonacci(1) + fibonacci(0) = 1

// Iterative Solution
// The iterative solution is typically more efficient for large values of n, as it avoids redundant calculations and uses a loop instead of recursive calls. Here's an iterative implementation of the Fibonacci function:


function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= n; i++) {
        let temp = curr;
        curr += prev;
        prev = temp;
    }
    return curr;
}

// RECURSIVE METHOD

// function fibonacci(n) {
//     if (n < 2) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

console.log(fibonacci(10))


// With Memoization:
// Here’s how you can modify the Fibonacci function to use memoization:

// function fibonacci(n, memo = {}) {
//     if (n in memo) {
//         return memo[n];
//     }
//     if (n < 2) {
//         return n;
//     }
//     // Compute the result and store it in the memo object
//     memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
//     return memo[n];
// }


// Explanation of Memoized Fibonacci Function:
// Memo Object:

// The memo object is used to store previously computed Fibonacci values. It is initialized as an empty object ({}).
// Check Cache:

// The function first checks if the result for the given n is already in the memo object (if (n in memo)). If it is, it returns the cached result.
// Compute and Store:

// If the result is not in the cache, the function computes it by making recursive calls (fibonacci(n - 1, memo) + fibonacci(n - 2, memo)), stores the result in the memo object (memo[n] = ...), and then returns the result.


// function maxProfit(prices) {
//     let maximumProfit = 0 

//     for (let i = 0 ; i < prices.length; i++){
//             for (let j = i + 1; j < prices.length; j++){
//                 if (prices[j] - prices[i] > maximumProfit){ 
//                     maximumProfit = prices[j] - prices[i]
//                 }
//             }
//     }
// }

// MAX PROFIT 




function maxProfit(prices) {
    // minPrice: This keeps track of the lowest price encountered so far. Initialized to Infinity to ensure any price in the array will be less than this initial value.
// maxProfit: This keeps track of the maximum profit that can be achieved. Initialized to 0 since no profit is possible before processing any prices.
    let minPrice = Infinity; 
    let maxProfit = 0; // max profit set to 0 

    for (let i = 0; i < prices.length; i++) { // traverse the array 


// If the current price (prices[i]) is less than the minPrice, update minPrice to this new lower value.
// This ensures that minPrice always holds the lowest price seen so far, which is the best potential buying price.
        if (prices[i] < minPrice) { // if 
            // console.log(prices[i] , minPrice)
            minPrice = prices[i];
        } else {

// if the current price is not less than minPrice, compute the profit if bought at minPrice and sold at prices[i] (prices[i] - minPrice).
// Update maxProfit to the greater of the current maxProfit or this newly computed profit.
// This step ensures that maxProfit always holds the maximum profit achievable up to the current day.
            // console.log(maxProfit, prices[i] - minPrice)
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }

    return maxProfit;
}


let prices= [ 7, 1, 5, 6, 4 ];

console.log(maxProfit(prices))





// Two Sum using Naive Approach:
// The basic approach to solve this problem is by nested traversal.

// Traverse the array using a loop
// For each element:
// Check if there exists another in the array with sum as x
// Return true if yes, else continue
// If no such pair is found, return false.
// Below is the implementation of the above approach:


// Let an array be {1, 4, 45, 6, 10, -8} and sum to find be 16
// After sorting the array 
// A = {-8, 1, 4, 6, 10, 45}
// Now, increment ‘l’ when the sum of the pair is less than the required sum and decrement ‘r’ when the sum of the pair is more than the required sum. 
// This is because when the sum is less than the required sum then to get the number which could increase the sum of pair, start moving from left to right(also sort the array) thus “l++” and vice versa.
// Initialize l = 0, r = 5 
// A[l] + A[r] ( -8 + 45) > 16 => decrement r. Now r = 4 
// A[l] + A[r] ( -8 + 10) increment l. Now l = 1 
// A[l] + A[r] ( 1 + 10) increment l. Now l = 2 
// A[l] + A[r] ( 4 + 10) increment l. Now l = 3 
// A[l] + A[r] ( 6 + 10) == 16 => Found candidates (return 1)


function chkPair(A  , x) {

    let result = []
    for (i = 0; i < (A.length - 1); i++) {
        for (j = (i + 1); j < A.length; j++) {
            if(A[i] + A[j] == x){
                // result.push(A[i], A[j])
                return true
            }
        }
    }

    return false;
}

    let A = [ 0, -1, 2, -3, 1 ];
    let x = -2;



    console.log(chkPair(A, x))


    
