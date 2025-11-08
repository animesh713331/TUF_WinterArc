// Date -  04/11/2025
// Question 16:
// Input: ‘N’ = 3

// Output: 
// A
// B B
// C C C

class Solution {
    printTriangle(N) {
        for (let i = 1; i <= N; i++) {
            let ch = String.fromCharCode(65 + i - 1); // 65 = 'A'
            let row = "";
            for (let j = 1; j <= i; j++) {
                row += ch + " ";
            }
            console.log(row.trim());
        }
    }
}

// Example test
let obj = new Solution();
obj.printTriangle(3);
