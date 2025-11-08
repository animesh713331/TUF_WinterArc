// Date -  04/11/2025
// Question 18:

// Input Format: N = 3
// Result: 
// C
// B C
// A B C

class Solution {
    printTriangle(N) {
        for (let i = 1; i <= N; i++) {
            let row = "";
            let start = 65 + N - i; // ASCII of 'A' + N - i

            for (let ch = start; ch <= 65 + N - 1; ch++) {
                row += String.fromCharCode(ch) + " ";
            }

            console.log(row.trim());
        }
    }
}

// Example test
let obj = new Solution();
obj.printTriangle(3);