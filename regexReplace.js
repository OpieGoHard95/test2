// Coded by Jared Smith
// March 30, 2015
// Practicum for Test2 RegexReplace problem

var words = "Today I, Opie, will attempt to solve world hunger. When I, Opie, solve world hunger everyone will adore me shouting out, 'Oh look! There goes Opie! The boy who solved world hunger.'";

// The regex should look through the string and find Opie and put Jared in

console.log(words.replace(/\b(Opie)\b/g, "Jared"));
