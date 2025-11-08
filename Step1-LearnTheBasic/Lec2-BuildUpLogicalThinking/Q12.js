// Date -  04/11/2025
// Question 12
// Input: ‘N’ = 3

// Output: 

// 1         1
// 1 2     2 1
// 1 2 3 3 2 1


class Solution {
    printPattern(N) {
        for (let i = 1; i <= N; i++) {
            let row = "";

            // Left numbers (1 to i)
            for (let j = 1; j <= i; j++) {
                row += j + " ";
            }

            // Spaces between number groups
            let spaces = 2 * (N - i);
            row += "  ".repeat(spaces);

            // Right numbers (i to 1)
            for (let j = i; j >= 1; j--) {
                row += j + " ";
            }

            console.log(row.trim());
        }
    }
}

// Example test
let obj = new Solution();
obj.printPattern(3);
