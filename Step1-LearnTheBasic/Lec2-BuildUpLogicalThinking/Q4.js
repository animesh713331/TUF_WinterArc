// Date - 04/11/2025
// Question 4:
// Input Format: N = 6
// Result:
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6

class Solution {
    // Function to print number triangle
    printTriangle(n) {
        for (let i = 1; i <= n; i++) {
            let row = "";
            for (let j = 1; j <= i; j++) {
                row += i + " ";
            }
            console.log(row.trim());
        }
    }
}

let obj = new Solution();
obj.printTriangle(5);
