// Date - 04/11/2025
// Question 5:

/*
Input: 5
Output:
* * * * *
* * * *
* * *
* *
*
*/

class Solution {
    // Function to print triangle pattern with N lines.
    printTriangle(N) {
        for (let i = 1; i <= N; i++) {
            let row = "";
            for (let j = N; j >= i; j--) {
                row += "* ";
            }
            console.log(row.trim());
        }
    }
}

// Example to test locally
let obj = new Solution();
obj.printTriangle(5);

