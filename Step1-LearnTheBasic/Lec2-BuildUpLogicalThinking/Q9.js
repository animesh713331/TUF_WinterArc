// Date - 04/11/2025
// Question 9:

// Input: ‘N’ = 3
// Output: 
//   *
//  ***
// *****
// *****
//  ***
//   *


class Solution {
    // Function to print diamond pattern
    printDiamond(N) {

        // Top half (normal pyramid)
        for (let i = 1; i <= N; i++) {
            let spaces = " ".repeat(N - i);
            let stars = "*".repeat(2 * i - 1);
            console.log(spaces + stars);
        }

        // Bottom half (inverted pyramid)
        for (let i = N; i >= 1; i--) {
            let spaces = " ".repeat(N - i);
            let stars = "*".repeat(2 * i - 1);
            console.log(spaces + stars);
        }
    }
}

// Example to test locally
let obj = new Solution();
obj.printDiamond(3);