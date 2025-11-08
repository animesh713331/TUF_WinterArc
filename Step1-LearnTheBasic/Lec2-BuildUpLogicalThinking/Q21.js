// Date - 04/11/2025
// Question 21
// Input Format: N = 6
// Result:   
// ******
// *    *
// *    *
// *    *
// *    *
// ******

class Solution {
    printHollowRectangle(N) {
        const M = 6; // columns fixed

        for (let i = 1; i <= N; i++) {
            let row = "";
            for (let j = 1; j <= M; j++) {
                if (i === 1 || i === N || j === 1 || j === M) {
                    row += "*";
                } else {
                    row += " ";
                }
            }
            console.log(row);
        }
    }
}

// Example test
let obj = new Solution();
obj.printHollowRectangle(6);