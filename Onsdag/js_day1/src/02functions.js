
// 1) Create a new JavaScript file and add these three functions:

// Function Declaration
// Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

// Function Expression
var sub = function(n1,n2){
  return n1 - n2
} 

// Callback example
var cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

// 2) Call the functions above as sketched below:

console.log( add(1,2) );    // 3
console.log( add );         // It prints the add function: ƒ add(n1, n2){return n1 +n2;}
console.log( add(1,2,3) );  // 3
console.log( add(1) );      // Nan	
console.log( cb(3,3,add) ); // Result from the two numbers: 3+3=6
console.log( cb(4,3,sub) ); // Result from the two numbers: 4+3=1
console.log(cb(3,3,add())); // VM74:2 Uncaught TypeError: callback is not a function
                            // at cb (<anonymous>:2:56)
                            // at <anonymous>:1:13
                            // Der skal ikke være paranteser efter "add"
console.log(cb(3,"hh",add));// Result from the two numbers: 3+hh=3hh


// 3) Rewrite the Callback function expression (cb)  to make a check for all 
// its three required arguments, and throw an Error if any of the arguments 
// do not match 

var cb = function(n1,n2, callback){
    try {
        if ((typeof callback === "function") && (typeof n1 === "number" ) && (typeof n2==="number")){
            return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
            
        }
        else 
        {throw new Error("There is a mismatch");
        }
    } catch (e){
        console.error(e.name + ": "+ e.message);
    }
};

// 4)  Write a mul(n1, n2) function (inspired by add and sub) and use it
//  as the callback for the cb function

function mul(n1, n2){
   return n1 * n2;
}

console.log( cb(3,3,mul) );

// 5) Call cb, this time with an anonymous function that divides the first
//  argument with the second

var anonymous = function(n1,n2){
  return n1 / n2;
}; 

console.log(cb(10,5, anonymous));