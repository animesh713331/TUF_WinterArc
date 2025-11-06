// Date - 04/11/2025
// Question 3
// Input: 5
// Output:
// 1
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5

class Solution {
    printTriangle(n) {
        for (let i = 1; i <= n; i++) {
            let row = "";
            for (let j = 1; j <= i; j++) row += j + " ";
            console.log(row.trim());
        }
    }
}


let obj = new Solution();
obj.printTriangle(5); 
