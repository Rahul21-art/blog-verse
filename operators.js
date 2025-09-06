//arthematic operators

let x = 10;
let y = 5;

console.log("x + y =", x + y); // addition
console.log("x - y =", x - y); // subtraction
console.log("x * y =", x * y); // multiplication
console.log("x / y =", x / y); // division
console.log("x % y =", x % y); // modulus
console.log("x ** y =", x ** y); // exponentiation

//assignment operators

let z = 10;
z+=3;
console.log(z)
z*=2;
console.log(z)

//comparison operators

let a = 10;
let b = "rahul";

console.log(a == b); // equal to
console.log(a === b); // strictly equal to
console.log(a != b); // not equal to
console.log(a !== b); // strictly not equal to
console.log(a > b); // greater than
console.log(a < b); // less than
console.log(a >= b); // greater than or equal to
console.log(a <= b); // less than or equal to
console.log(a < 20 && b === "10"); // logical AND
console.log(a > 20 || b === "10"); // logical OR
console.log(!(a === b)); // logical NOT
console.log(a < 20 ? "a is less than 20" : "a is not less than 20"); // ternary operator
console.log(typeof a); // type of operator
console.log(typeof b); // type of operator
console.log(typeof (a+b));
console.log(typeof (a-b));
console.log(a+b);

//string operators

let firstName = " Rahul"
let lastName = "naidu"
console.log(firstName + " " +lastName); 

let correctName=`helo ${firstName} ${lastName},welcome to blog verse`
console.log(correctName);

//ternary operator

let age = 20;

console.log( age>18 ? "you are eligible to vote ": "you are not eligible to vote"); 

// increament and decrement operators

let count = 10;
console.log(count++); //10
console.log(++count); //12
console.log(count);//12
console.log(count--); //12
console.log(--count); //10

//typeof operator

console.log(typeof count); //number
console.log(typeof firstName); //string
