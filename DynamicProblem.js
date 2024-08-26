// Given two strings, find the length of the longest subsequence common to both strings. A subsequence is a sequence that appears in the same relative order, but not necessarily consecutively.

// Example:
// Input:

// s1 = "abcde"
// s2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace", which has a length of 3.

function longestCommonSubsequence(s1, s2) {
    // m and n store the lengths of strings s1 and s2 respectively
    const m = s1.length;
    const n = s2.length;
  
    // Create a 2D dp array with dimensions (m+1) x (n+1), initialized to 0.
    // dp[i][j] will hold the length of the longest common subsequence between the
    // first i characters of s1 and the first j characters of s2.
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  
    // Loop over each character in s1 (outer loop) and s2 (inner loop)
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        
        // If the characters from both strings match at positions i in s1 and j in s2
        if (s1[i] === s2[j]) {
          // Log the current value in dp[i + 1][j + 1] before updating it (debugging/logging purpose)
          console.log(dp[i + 1][j + 1]);
  
          // If there’s a match, increment the LCS length by 1 from the previous diagonal element dp[i][j]
          dp[i + 1][j + 1] = dp[i][j] + 1;
        } else {
          // If the characters don't match, carry forward the maximum LCS length found
          // by either ignoring the current character of s1 or s2.
          dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
        }
      }
    }
  
    // Return the value in dp[m][n], which holds the length of the longest common subsequence
    // between the entire strings s1 and s2.
    return dp[m][n];
  }
  

console.log(longestCommonSubsequence("abcde", "ace"));