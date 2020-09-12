//a) Create the two arrays below, spelled exactly as they are given. 
// var boys = ["Peter", "lars", "Ole"];
// var girls = ["Janne", "hanne", "Sanne"];
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//b) Create a new array called all, which should be a concatenation of the two 
// arrays given above, starting with the boys and ending with the girls.
var all = boys.concat(girls);

//c) The array type has a cool method to reduce an array into a single string join() (you will love this method)
//·         Create a comma-separated string containing all the names from the all-array, separated by commas.
//·         Create a hyphen (-) separated string containing all the names from the all-array, separated by hyphens.
var commaSeparation = all.join(",");
var hyphenSeparation = all.join("-");

// d)  Add the names Lone and Gitte to the end of the array (remember, all can be done in one-liners)
all.push("Lone", "Gitte");

// e)  Add the names, Hans and Kurt, to the start of the array
all.unshift("Hans", "Kurt");

// f)  Remove the first name in the array (Hans)
all.shift();

// g)  Remove the last name from the array (Gitte)
all.pop();

//h) Remove Ole and Janne from the middle of the array
all.splice(4,5);

// i) Sanne thinks it’s unfair that the boys have to come first, reverse the all array, so that the girls come first.
all.reverse();

// j) Peter thinks that this is just as unfair and suggests that the array should be sorted. Sort the array.
all.sort();

// k) The default sort algorithm doesn’t handle the situation where the name can be either capitalized or not. Write a user-defined sort method to fix this problem.

all.sort( (a, b) => a.localeCompare(b));

//l) Convert all the names in the array to uppercase.
var upperCasedArray = $.map(all, String.toUpperCase);

//m) Create a new array containing all the names that start with either “l” or “L” (hint: use the filter function with a sufficient callback). 
var beginsWithI = $.map(all.filter);