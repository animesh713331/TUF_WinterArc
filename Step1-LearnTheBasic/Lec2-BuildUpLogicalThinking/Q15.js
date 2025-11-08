// Date -  04/11/2025
// Question 15
// Input Format: N = 3
// Result: 
// A B C
// A B
// A

class Solution {
    printTriangle(N) {
        for (let i = N; i >= 1; i--) {
            let row = "";
            for (let j = 0; j < i; j++) {
                let ch = String.fromCharCode(65 + j);
                row += ch + " ";
            }
            console.log(row.trim());
        }
    }
}

// Example test
let obj = new Solution();
obj.printTriangle(3);