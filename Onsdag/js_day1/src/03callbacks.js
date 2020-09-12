// 1) Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.). 
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

// Use the filter method to create a new array with only names of length <=3.
var lessThanFour = names.filter(function(string) {
  return string.length <= 3;
});

// Use the forEach method to iterate and print (console.log) both the original and the new array.
names.forEach(function(print) {
    console.log(print);
});

lessThanFour.forEach(function(print) {
    console.log(print);
});

// 2) Use the names-array created above, and, using its map method, create a new array with all names uppercased.
var upperCaseNames = names.map(function(name) {
    return name.toUpperCase();
});

// 3) Use map, join + just a little bit more to create a function, which given the array of names, 
var list = names.map(function(name){
    return "<li>"+name+"</li>";
});
var listAsString = "<ul>" + list.join("\n") + "</ul>";

// 4)  Given this JavaScript array
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

// a) Use the filter filter function to get arrays with only:
// Cars newer than 1999
var newer = cars.filter(function(newCars) {
    return newCars.year>1999;
    
});
// All  Volvo’s
var volvo = cars.filter(function(volvos) {
    return volvos.make="Volvo";
    
    });
    
// All cars with a price below 5000
var cheapcars = cars.filter(function(cheap) {
    return cheap.price<5000;
    
    });
    
    
// 4a) Use map, join + just a little bit more to implement a function, that, given 
// the cars array used above, will create, and return a string with valid SQL statements to 
// insert the data into a table with matching column names (id, year, make, model, price) as sketched below:

//INSERT INTO cars (id,year,make,model,price) VALUES ( 1, 1997 'Ford','E350', 3000 );
var startString="INSERT INTO cars (id,year,make,model,price) VALUES "; 

var sqlString = cars.map(function(carstuff){
    
return  "("+cars.id+","+cars.year+","+cars.make+","+cars.model+","+cars.price+")";
   });
   
//   Asynchronous Callbacks
//
// Most of the javascript callbacks you will be using will be asynchronous, in contrary to map, 
// filter and forEach which are synchronous (MAKE SURE you understand the difference)

//1) Given the code below answer, don’t execute the code, in what order you would expect to see the outputs:
// Answer: Since "b" jas a delay of 2000, and "e" has a delay of 1000, I expect them to be last. 
//I expect: a, d, f, e, b.
 var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");

//2) Add the code to a javascript file, execute and verify whether you answer to 1) was right
// The outcome:
//aaaaaaaaaa
//dddddddddd
//ffffffffff
//undefined
//eeeeeeeeee
//bbbbbbbbbb