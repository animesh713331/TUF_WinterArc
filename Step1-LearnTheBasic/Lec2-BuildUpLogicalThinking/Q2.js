// Date - 04/11/2025
// Question 2:

// Input:
// n = 5
// Output:
// * 
// * * 
// * * * 
// * * * * 
// * * * * *

class Solution {
    // Function to print triangle of N
    printTriangle(N) {
        for (let i = 1; i <= N; i++) {
            let row = "";
            for (let j = 1; j <= i; j++) {
                row += "* ";
            }
            console.log(row.trim());
        }
    }
}

// Example to test locally
let obj = new Solution();
obj.printTriangle(5);
