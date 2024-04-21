// "use strict";
console.log("Hi Js")

//Synchronous single threaded scripting Language.

//Execution context
// 1. Global Execution Context.
// 2. Functional Execution  context

// G.E.A
// Execution Context - 1. Memory Allocation Phase(Creation)
                   //- 2 . Code Execution Phase(Execution)
                   
// The first thing that get's created while executing the code is known as Global Execution Context


// creationPhase - It take variable name will default have undefined
// it used to allocate memory to the variable and function definition are allocated to the name of the functions.
// The exact values are not assigned to the variables, instead the default value undefined is assigned to it.


// ExecutionPhase - This is the phase where the exact values will be allocated to the variables. Undefined will be replaced with their true values now..
//it assign a value to the variable
// if we assign the variable to the function then the function we start to execute and this is call Functional Execution context
//  after executing the code it will dump from the call stack

// F.E.A (Add function)
// Execution Context - 1. Memory Allocation Phase(Creation)
                    //- 2 . Code Execution Phase(Execution)

// creationPhase is same as a GEA
// In Execution phase it will assign the values to its variables
// when the function will execute then it will dump the functional execution context from the call stack

// Example
// let variableOne = 25;

// function add(){
//     let a = 3;
//     let b = 5;
//     let result = a + b;
// }

// add()

// let myName = "Faizan"

// keywords that assign to the variables
// declare means declaring/defining  a variable, initialize means initialize means initializing value to it.

// let, const, var

// keywords that are assigned to the variables
// declare means declaring/defining a variable, initialize means initializing value to it

// let ,const, var
// let = initialized and then declared on the same line
    // or can be initialized first and then can be declared in later lines also.
    // it can be reinitialized too.
    // it can't be "redeclared".
    // block scope 
    // hoisting is not supported by let

// let a = 5;
// a = 6;
// console.log(a)


// const = initialized and  declared on the same line only (!important)
// it cant be reinitialized or cant be redeclared too.
    // block scope 
    // hoisting is not supported by const.

// const b = 30;
// b = 30;
// console.log(b)

// var = initialized and then declared on the same line(villain in nature, prohibit using them)
// or can be initialized first and then can be declared in later lines also.
// it can be reinitialized too.
// it can be "redeclared" too;
// global scope 
// hoisting is supported by var.

// var c;
// c = 23;
// var c = "hey Hi";
// c = 23.45;
// console.log(c);


// let myName;
// console.log(myName);

// console.log(age);


// Temporal death Zone store the let and const until its initialized