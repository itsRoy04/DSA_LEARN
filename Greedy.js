function coinChange(coins, amount) {
    // Sort the coins in descending order so that we can start with the largest coin
    coins.sort((a, b) => b - a);
  
    let totalCoins = 0;  // To track the total number of coins used
    let remainingAmount = amount;  // Track the remaining amount we need to change 
    
    for (let coin of coins) {
      if (remainingAmount === 0) break;  // If the amount becomes 0, we're done
      
      // Find out how many coins of this denomination can be used
      let count = Math.floor(remainingAmount / coin);
      
      // Add the count to the total coins used
      totalCoins += count;
      
      // Reduce the remaining amount by the value of the coins we just used
      remainingAmount -= count * coin;
    }
  
    // If we successfully made the exact amount, return the total number of coins
    // Otherwise, return -1 to indicate it's not possible
    return remainingAmount === 0 ? totalCoins : -1;
  }
  

//   Explanation:
// Sort Coins: The coins are sorted in descending order so that we start with the largest denomination first.
// Greedy Choice: For each coin, it calculates how many of those coins can be used by dividing the remaining amount by the coin's value.
// Update Remaining Amount: Subtract the equivalent value of the used coins from the remaining amount.
// Break Condition: If the remaining amount becomes zero, we stop and return the total number of coins used.

  console.log(coinChange([1, 5, 10, 25], 63));  // Output: 6 (2x 25 + 1x 10 + 3x 1)
