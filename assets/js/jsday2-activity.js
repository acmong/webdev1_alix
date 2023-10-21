for (var x = 0; x <= 10; x++) {
    console.log("Kael Pogi #", x);
}

/**
 * create a for loop that display the number from zero to 10
 * If the number is even, print out "EVEN"
 * If the number is odd, print out "ODD"
 * 
 */
for (var counter = 0; counter < 10; counter++) 
    if (counter % 2 == 0) { // check if it is even
    console.log(counter, 'Even')
}   else {
    console.log (counter, 'Odd')
}


// decrement for loop

for (var goingDown = 100; goingDown > 3; goingDown--){
    console.log('going down for real in', goingDown);
}
console.log("down");

var y = 0;
while (y < 10){
    console.log('Kael ulet #', y)
    y++;
}

if (confirm ('Press a button')) {
    console.log('You pressed OK')
}   else {
    console.log('You pressed cancel');
   
   
    console.log('end #1 ');
}
var confirmOutput = confirm('Trying out confirm box')
console.log('checking confirmOutput');
if (confirmOutput == true) {
    console.log('it is true');
}   else {
    console.log('false');
}
    console.log('end #2')



alert('hello', 'hello2');
alert('hello3', +456);
var personName = prompt('Please enter your name so I can address you');
console.log(personName);
if (personName == 'Alixandria'); 
  else {
    alert('Only Alixandria can enter here!')
}
