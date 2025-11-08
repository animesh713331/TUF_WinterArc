// Date -  04/11/2025
// Question 10:
// Input: ‘N’ = 3
// Output: 
// *
// **
// ***
// **
// *

class Solution {
    // Function to print Half Diamond Pattern
    printTriangle(N) {
        // Upper half (1 to N)
        for (let i = 1; i <= N; i++) {
            console.log("*".repeat(i));
        }

        // Lower half (N-1 to 1)
        for (let i = N - 1; i >= 1; i--) {
            console.log("*".repeat(i));
        }
    }
}

// Example test
let obj = new Solution();
obj.printTriangle(3);