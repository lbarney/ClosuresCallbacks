var add, subtract, multiply, divide, calculate, reverseOrder, userHelp, someFunc, counterup, counter, otherFunc;
// Callbacks


//1. We are going to create a simple calculator. Go ahead and create four functions called add, subtract, multiply, and divide that take in two numbers that add, subtract, multiply, and divide the two inputted values. In each function return the result.
var add = function(num1, num2) {
   return num1 + num2;
};
var subtract = function(num1, num2) {
   return num1 - num2;
};
var multiply = function (num1, num2) {
   return num1 * num2;
};
var divide = function (num1, num2) {
   return num1 / num2;
};
// Next, you will want to create a function called calculate that takes in two numbers and a callback function. Return the result of the callback with the two numbers as its arguments.
var calculate = function (num1, num2, callback) {
   return callback(num1, num2);
}

// 2. Create a function called reverseOrder that takes in a string and reverses the order of the characters. Return the result.
var reverseOrder = function(string) {
  var newString = '';
  for (var i = string.length -1; i >= 0;  i--){
    newString += string.charAt(i);
  }
  return newString;
};

// Create a function called userHelp that takes in a callback function and a quote. Invoke the callback function using the quote as an argument. Return the result of the callback. This should take a user defined quote and reverse the order of the quote.
var userHelp = function (callback, quote) {
   return callback(quote);
};

// Closures

// 1. Create a function called someFunc that takes in a number and returns the definition of another anonymous function. That anonymous function will take in a second number and will return the sum of both numbers.
var someFunc = function (num1) {
   return function(num2){
     return num1 + num2
   }
};
// Invoke the someFunc function, and pass in a number value (Let's use number 9) as the argument. Assign the response to another variable called otherFunc.
var otherFunc = someFunc(9)
// When you are done, we can invoke the otherFunc function and pass in another number value as its argument. And we can do this as often as we like. Go ahead and uncomment out the following invocations.

 otherFunc(10) // 19
 otherFunc(26) // 35
 otherFunc(100) // 109
 otherFunc(1) // 10

// You have just created your first closure. What you have essentially done is contained a fixed inputted number value in the local someFunc scope, while allowing the user to run an internal function as often as he likes using any valid number argument.

// When you assign the invocation of someFunc to the otherFunc variable, you are assigning the definition of an entirely new function.


// 2. Next, you will create a counter closure function that can be called at any point and will retain the number's new value even after being called over and over again.

// Create a function called countSet, no parameters needed, and set a new variable (call it countup) to equal 0. Have the function return an anonymous function that returns the countup variable after being incremented.
var countSet = function () {
   var countUp = 0;
    return function(){
      countUp ++;
      return countUp;
  }   
};
// Assign the invocation of the countSet function to a new variable. Let's call it counter.
var counter = countSet();
// Then whenever you need to count up, you can invoke the counter function. Go ahead and uncomment out the following invocations.

counter()//1
counter()//2
counter()//3
counter()//4

module.exports = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  calculate: calculate,
  reverseOrder: reverseOrder,
  userHelp: userHelp,
  someFunc: someFunc,
  counterup: counterup,
  counter: counter
};
