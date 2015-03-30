// Coded by Jared Smith
// March 30, 2015
// showRegex problem from the practicum

var sentence1 = "Hello, my name is Opie!"
var sentence2 = "My friends call me Jared!"

var reg1 = /Opie/
var reg2 = new RegExp("Jared")

console.log(sentence1);
console.log(sentence2);

// Here is where the demonstrations occur

console.log(sentence1.replace(reg1, "Jared"));
console.log(sentence2.replace(reg2, "Opie"));
