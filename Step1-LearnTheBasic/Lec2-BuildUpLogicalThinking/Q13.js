// Date -  04/11/2025
// Question 13
// Input Format: N = 3
// Result: 
// 1
// 2 3
// 4 5 6

class Solution {
    printTriangle(N) {
        let num = 1; // starting number

        for (let i = 1; i <= N; i++) {
            let row = "";
            for (let j = 1; j <= i; j++) {
                row += num + " ";
                num++;
            }
            console.log(row.trim());
        }
    }
}

// Example test
let obj = new Solution();
obj.printTriangle(3);