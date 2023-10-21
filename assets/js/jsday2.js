
let length = 0;
let width = 0;
let height = 0;


width = 10;
height = 15;
length = 23;


let product = length * width * height;
console.log("Product:", product);


if (product % 2 === 0) {
    console.log("Product is even.");
} else {
    console.log("Product is odd.");

    if (product % 3 === 0) {
        console.log("Divisible by 3.");
    } else {
        console.log("Not divisible by 3.");
    }
}
