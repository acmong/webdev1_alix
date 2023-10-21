
var fruits = [];


var numFruits = parseInt(prompt("How many fruits do you want to enter (between 3 and 10)?"));
if (numFruits < 3 || numFruits > 10) {
    alert("Please enter a number between 3 and 10.");
} else {
   
    for (var i = 0; i < numFruits; i++) {
        var fruitName = prompt("Enter the name of fruit " + (i + 1)).toLowerCase();
        fruits.push(fruitName);
    }

   
    console.log("Fruits:", fruits);

   
    console.log("First Fruit:", fruits[0]);
    console.log("Last Fruit:", fruits[fruits.length - 1]);


    fruits.sort((a, b) => b.localeCompare(a));

 
    console.log("Second Fruit:", fruits[1]);

    
    fruits.splice(0, 1);
    fruits.splice(2, 1);

   
    var vegetables = [];
    var numVegetables = parseInt(prompt("How many vegetables do you want to enter (between 3 and 10)?"));
    if (numVegetables < 3 || numVegetables > 10) {
        alert("Please enter a number between 3 and 10.");
    } else {
        for (var i = 0; i < numVegetables; i++) {
            var vegetableName = prompt("Enter the name of vegetable " + (i + 1)).toLowerCase();
            vegetables.push(vegetableName);
        }
    }

    
    var food = fruits.concat(vegetables);

  
    for (var i = 0; i < food.length; i++) {
        var foodName = food[i];
        var isEven = i % 2 === 0;
        var reverseFood = foodName.split('').reverse().join('');
        console.log(`Index ${i} is ${isEven ? "even" : "odd"} and the food inside it is called ${foodName}. The word ${foodName} has ${foodName.length} letters and the second letter is ${foodName[1]}. If you reverse it, it becomes ${reverseFood}.`);
    }

    
    var searchFood = prompt("Enter a food to search for").toLowerCase();
    var foundIndex = food.indexOf(searchFood);
    if (foundIndex !== -1) {
        alert("Food is found at index " + foundIndex);
    } else {
        alert("Food not found");
    }

 
    food[0] = "START";
    food[food.length - 1] = "END";
    for (var i = 0; i < food.length; i++) {
        food[i] = food[i].toUpperCase();
    }

  
    console.log("Food:", food);
}
