// Date - 04/11/2025
// Question 1:
// Input:
// n = 3
// Output:
// * * *
// * * *
// * * *

class Solution {
    // Function to print square of N
    printSquare(N) {
        // your code here
        for(let i=0;i<N;i++){
            let row="";
            for(let j=0;j<N;j++){
                row+="* ";
            }
            console.log(row.trim());
        }
    }
}

let obj = new Solution();
obj.printSquare(5);