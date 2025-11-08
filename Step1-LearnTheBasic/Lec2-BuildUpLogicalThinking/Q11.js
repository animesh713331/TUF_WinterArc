// Date -  04/11/2025
// Question 11:
// Input: ‘N’ = 3
// Output: 

// 1
// 0 1
// 1 0 1

class Solution {
    // Function to print 0-1 triangle pattern
    printTriangle(N) {
        for (let i = 1; i <= N; i++) {
            let row = "";
            for (let j = 1; j <= i; j++) {
                // if sum of row+column is even → 1, else 0
                if ((i + j) % 2 === 0) {
                    row += "1 ";
                } else {
                    row += "0 ";
                }
            }
            console.log(row.trim());
        }
    }
}

// Example test
let obj = new Solution();
obj.printTriangle(3);