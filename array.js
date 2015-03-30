// Coded by Jared Smith
// March 30, 2015
// Array problem

var nflTeams = [
{"name": "Bengals", "location": "Cincinnati", "strength": "run" },
{"name": "Patriots", "location": "New England", "strength": "pass"},

function filter(array, test) {
	var passed = [];
	for (var j = 0; j < array.length; j = j + 1) {
		if (test(array[j]))
			passed.push(array[j]);
		}
	return passed;
	}

console.log(filter(nflTeams, function(team) {
	return team.strength == "run";
	}));
