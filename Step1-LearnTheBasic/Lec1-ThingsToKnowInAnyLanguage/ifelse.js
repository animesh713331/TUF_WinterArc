/***************************************************
 * 🧩 Topic 2: Grade Checker (If-Else Ladder)
 * Problem: Print Grade based on marks
 *  Marks >= 90 → Grade A
 *  Marks >= 70 → Grade B
 *  Marks >= 50 → Grade C
 *  Marks >= 35 → Grade D
 *  Else → Fail
 ***************************************************/
class Solution2 {
    checkGrade(marks) {
        if (marks >= 90) {
            console.log("Grade A");
        } else if (marks >= 70) {
            console.log("Grade B");
        } else if (marks >= 50) {
            console.log("Grade C");
        } else if (marks >= 35) {
            console.log("Grade D");
        } else {
            console.log("Fail");
        }
    }
}
// Example run
let sol2 = new Solution2();
let marksInput = 72;
console.log("\nGrade Check for Marks:", marksInput);
sol2.checkGrade(marksInput);