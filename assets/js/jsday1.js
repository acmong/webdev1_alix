// alert('hello world');
/* 
   this is a sample comment
*/

var x = 5, y = 6; // number data type
var z, a = 100;
var b = '5'; //string data type
var firstName = 'Carlos';
var lastName = 'Caballero'
var sum = x + y;
var test = x + b;
var fullName = firstName + ' ' + lastName;
var isTrue = true;
 

console.log(x, y);
console.log(z);
console.log(a);
console.log(firstName); 
console.log('Caballero');
console.log(sum);
console.log(test) //adding number and string
console.log(typeof test);
console.log(fullName);
console.log(firstName, lastName);
console.log('My name is', fullName, 'and my math is', sum );
console.log('My name is', fullName, 'and my math is', test );
console.log(isTrue);
console.log(false);
console.log('The opposite of isTrue is', false); 
console.log('The value of isTrue is', true); 
console.log(firstName * x);//NaN: Not a Number;
console.log(x ** y);
var sum = 10 % 3;
console.log('The new value of sum is', sum);
console.log(x);
console.log(x > y); //false
console.log(x < 6); 
console.log(x == 5);
console.log(x == b);
console.log(x === b); 
console.log(x > 5);
console.log(x >= 5);
console.log(!isTrue);
console.log(x !=5);
console.log(x == 5 && y == 6); // output is true
console.log(x != 5 && y == 6); // output is false
console.log(x == 5 && y !=6);  // output is false
console.log(x != 5 && y !=6);  // output is false
console.log(x == 5 || y == 6); // output is true
console.log(x == 5 || y != 6); // output is true
console.log(x != 5 || y == 6); // output is true
console.log(x != 5 || y != 6); // output is false

if (x == 5 && y == 6) { //
 console.log('our condition is true');
}

if (x == 5 && y !=6) { //false
  console.log('our condition is false so this will not show');
} else if (x >= 6) { //5 is not equal to 6, x 5 is not greater than or equal to 6
   console.log('x is not equal to 6 that\'s why this is showing');
} else {
 console.log('This shows if all if/else if statements are false') 
}

 x = 10; 
//check if a number is odd or even using modulo
if (x % 2 == 0) {
  console.log('x is an even number');
} else {
  console.log('x is an odd number');
}

if (firstName == 'Carlos') {
  console.log('access granted');
}

if (lastName == 'caballero'){
  console.log('access is granted even if lowercase')
} else {
  console.log('Comparison is case sensitive');
}

if (firstName == 'carlos' || lastName == 'caballero') {
  console.log('coach is in');
} else {
  console.log('coach is out');
}