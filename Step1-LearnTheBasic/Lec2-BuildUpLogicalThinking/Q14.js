// Date -  04/11/2025
// Question 14
// Input Format: N = 6
// Result:   
// A
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F

class Solution {
    printTriangle(N) {
        for (let i = 1; i <= N; i++) {
            let row = "";
            for (let j = 0; j < i; j++) {
                let ch = String.fromCharCode(65 + j); // 65 = 'A'
                row += ch + " ";
            }
            console.log(row.trim());
        }
    }
}

// Example test
let obj = new Solution();
obj.printTriangle(6);