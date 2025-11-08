// Date -  04/11/2025
// Question 19:
// Input Format: N = 3
// Result: 
// ******
// **  **
// *    *
// *    *
// **  **
// ******

class Solution {
    printSquare(N) {
        const size = 2 * N;

        for (let i = 1; i <= size; i++) {
            let row = "";

            for (let j = 1; j <= size; j++) {
                if (i <= N && (j <= N - i + 1 || j > size - (N - i + 1))) {
                    row += "*";
                } 
                else if (i > N && (j <= i - N || j > size - (i - N))) {
                    row += "*";
                } 
                else {
                    row += " ";
                }
            }
            console.log(row);
        }
    }
}

// Example test
let obj = new Solution();
obj.printSquare(3);