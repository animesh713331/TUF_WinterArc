/***************************************************
 * 🧩 Topic 4: While Loop
 * Problem: Print numbers from 1 to N
 ***************************************************/
class Solution4 {
    printNumbers(n) {
        let i = 1;
        while (i <= n) {
            console.log(i);
            i++;
        }
    }
}
let sol4 = new Solution4();
let inputN = 5;
console.log("\nNumbers from 1 to", inputN, ":");
sol4.printNumbers(inputN);


/***************************************************
 * 🧩 Topic 5: While Loop (Factorial)
 * Problem: Find factorial of a number
 ***************************************************/
class Solution5 {
    factorial(n) {
        let fact = 1;
        let i = 1;
        while (i <= n) {
            fact *= i;
            i++;
        }
        console.log("Factorial of", n, "is:", fact);
    }
}
let sol5 = new Solution5();
let factNum = 5;
console.log("\nFactorial Result:");
sol5.factorial(factNum);


/***************************************************
 * 🧩 Topic 6: Nested For Loop
 * Problem: Print a pattern of stars
 ***************************************************/
class Solution6 {
    printPattern(rows) {
        for (let i = 1; i <= rows; i++) {
            let line = "";
            for (let j = 1; j <= i; j++) {
                line += "* ";
            }
            console.log(line);
        }
    }
}
let sol6 = new Solution6();
console.log("\nStar Pattern:");
sol6.printPattern(5);


/***************************************************
 * 🧩 Topic 7: Functions (Pass by Value and Reference)
 ***************************************************/
// Pass by Value
function modifyValue(a) {
    a = a + 10;
    console.log("Inside function:", a);
}
let x = 5;
modifyValue(x);
console.log("Outside function:", x);

// Pass by Reference
function modifyObject(obj) {
    obj.value += 10;
    console.log("Inside function:", obj.value);
}
let data = { value: 5 };
modifyObject(data);
console.log("Outside function:", data.value);