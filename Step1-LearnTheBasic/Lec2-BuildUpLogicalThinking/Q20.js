// Date -  04/11/2025
// Question 20
// Input Format: N = 3
// Result: 
// *    *
// **  **
// ******
// **  **
// *    *

class Solution {
    printPattern(N) {
        const size = 2 * N;

        for (let i = 1; i <= size - 1; i++) {
            let stars = (i <= N) ? i : size - i;
            let spaces = size - 2 * stars;
            let row = "";

            row += "*".repeat(stars);
            row += " ".repeat(spaces);
            row += "*".repeat(stars);

            console.log(row);
        }
    }
}

// Example test
let obj = new Solution();
obj.printPattern(3);
