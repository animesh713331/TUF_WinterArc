/***************************************************
 * 🧩 Topic 3: Switch Case
 * Problem: Print the day of the week based on number (1-7)
 ***************************************************/
class Solution3 {
    getDay(num) {
        switch (num) {
            case 1: console.log("Monday"); break;
            case 2: console.log("Tuesday"); break;
            case 3: console.log("Wednesday"); break;
            case 4: console.log("Thursday"); break;
            case 5: console.log("Friday"); break;
            case 6: console.log("Saturday"); break;
            case 7: console.log("Sunday"); break;
            default: console.log("Invalid");
        }
    }
}
// Example run
let sol3 = new Solution3();
let inputDay = 4;
console.log("\nDay Output:");
sol3.getDay(inputDay);
