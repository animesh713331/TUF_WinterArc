// Date - 04/11/2025
// Question 7:

// Input: 5
// Output:
//     *
//    ***  
//   *****
//  *******
// *********

class Solution {
    // Function to print the pyramid pattern.
    printTriangle(N) {
        for (let i = 1; i <= N; i++) {
            let spaces = " ".repeat(N - i);       // leading spaces
            let stars = "*".repeat(2 * i - 1);    // stars increase by 2 each row
            console.log(spaces + stars);
        }
    }
}

// Example to test locally
let obj = new Solution();
obj.printTriangle(5);
