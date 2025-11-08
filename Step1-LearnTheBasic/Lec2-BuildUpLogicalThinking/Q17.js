// Date -  04/11/2025
// Question 17:

// Input Format: N = 3
// Result: 
//   A  
//  ABA 
// ABCBA

class Solution {
    printTriangle(N) {
        for (let i = 1; i <= N; i++) {
            let row = "";

            // Spaces
            for (let s = 1; s <= N - i; s++) {
                row += " ";
            }

            // Increasing part: A → current
            for (let ch = 65; ch < 65 + i; ch++) {
                row += String.fromCharCode(ch);
            }

            // Decreasing part: current - 1 → A
            for (let ch = 65 + i - 2; ch >= 65; ch--) {
                row += String.fromCharCode(ch);
            }

            console.log(row);
        }
    }
}

// Example test
let obj = new Solution();
obj.printTriangle(3);
