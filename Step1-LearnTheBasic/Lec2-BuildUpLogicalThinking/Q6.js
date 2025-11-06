// Date - 04/11/2025
// Question 6:
// Input: 5
// Output:
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3 
// 1 2  
// 1 
class Solution {
    // Function to print the pattern.
    printTriangle(N) {
        for (let i = 1; i <= N; i++) {
            let row = "";
            for (let j = 1; j <= N - i + 1; j++) {
                row += j + " ";
            }
            console.log(row.trim());
        }
    }
}

let obj = new Solution();
obj.printTriangle(5);
