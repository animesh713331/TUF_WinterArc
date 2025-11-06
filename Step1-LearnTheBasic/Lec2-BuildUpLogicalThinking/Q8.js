// Date - 04/11/2025
// Question 8:
// Input: 5
// Output:
// *********
//  *******
//   *****
//    ***
//     *

class Solution {
    // Function to print inverted pyramid pattern
    printTriangle(N) {
        for (let i = N; i >= 1; i--) {
            let spaces = " ".repeat(N - i);       // leading spaces increase each row
            let stars = "*".repeat(2 * i - 1);    // stars decrease by 2 each row
            console.log(spaces + stars);
        }
    }
}

// Example to test locally
let obj = new Solution();
obj.printTriangle(5);