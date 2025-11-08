// Date - 04/11/2025
// Question 22

// Input Format: N = 6
// Result:   
// 6 6 6 6 6 6 6 6 6 6 6 
// 6 5 5 5 5 5 5 5 5 5 6 
// 6 5 4 4 4 4 4 4 4 5 6 
// 6 5 4 3 3 3 3 3 4 5 6 
// 6 5 4 3 2 2 2 3 4 5 6 
// 6 5 4 3 2 1 2 3 4 5 6 
// 6 5 4 3 2 2 2 3 4 5 6 
// 6 5 4 3 3 3 3 3 4 5 6 
// 6 5 4 4 4 4 4 4 4 5 6 
// 6 5 5 5 5 5 5 5 5 5 6 
// 6 6 6 6 6 6 6 6 6 6 6

class Solution {
    printNumberSquare(N) {
        const size = 2 * N - 1;

        for (let i = 0; i < size; i++) {
            let row = "";
            for (let j = 0; j < size; j++) {
                const minDist = Math.min(i, j, size - 1 - i, size - 1 - j);
                const num = N - minDist;
                row += num + " ";
            }
            console.log(row.trim());
        }
    }
}

// Example test
let obj = new Solution();
obj.printNumberSquare(6);