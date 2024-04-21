// There are 3 steps
// parsing, compilation, Execution
// Parsing - Breaking the code into tokens
// syntax parsing - converting the tokens into AST(Abstract Syntax Tree)

// Js use JIT compilation(Just In Time)
// Interpreter(Ignition) & Compiler(Turbo Fan) 
// Interpreter - It is responsible to compile and execute the code line by line
// Compiler - It compile the entire code at once and then execute

// GBcollector in js is known as Orinoco
// asynchronous will always execute after the synchronous code
// asynchronous have to wait if it have waiting time of "0" to end the synchronous code 


// Hoisting - Bringing the variable and the function declaration to the top of the code is called as hoisting.
// Arrow functions are not hoisted
// console.log(x)
// console.log(b)
// console.log(c)
// global, it becomes a property of "this", window

// var x ;
// x = 10;

// let b;
// b = 20;

// const c = 30;

// console.log(x)
// console.log(b)
// console.log(c)

// let & const stay in the temporal Dead Zone as long as they are not assigned/initialized with their true values
// If we try to access them in the TDZ, we wont be able to.

// Globally defined variables wether with let, const or var are accessible inside a block or function naturally

// const a = 10;
// let b = 20;
// var c = 30;


// {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// function add(){
//     let result = a + b ;
//     console.log(result);
// }

// add();

// Block Scope
// {
//     const a = 10;
//     let b = 20;
//     var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);
// }

// console.log(a); // as it is block scope it will give not defined
// console.log(b); // as it is block scope it will give not defined
// console.log(c);


// function scope - Any variable declared inside the function are only accessible by the function itself and not
// outside the function 
// function me(){
//     let a = 10
//     const b = 20
//     var c = 30

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// me()
// console.log(a);
// console.log(b);
// console.log(c);

// Scope chain in JS
// Scope is related to the lexical environment of the variable. Scope is a place/environment where any variable can be accessed in our code.
// Whenever execution context is created a lexical environment is created for that.
//  lexical environment - A local space of the function plus the local space of the functions parent and so on

// Scope chain - Finding the variable in it's own scope, if not found then in it's parent scope, if not found i
// in the parent's scope also, then finding it in the grandParent's scope and so on upto the global space is 
// called scope chain.

// let d = 25;
// function a(){
//     let e = 30;
//     console.log(d);
//     b();
//     function b(){
//         let f = 40;
//         console.log(d);
//         console.log(e);
//         console.log(f);
//     function c(){
//         console.log(d);
//         console.log(e);
//         console.log(f);

//     }
//     c();
//     }
// }
// a();

// let d = 25;
// function a(){
//     let e = 30;
//     console.log(d);

//     b();
//     function b(){
//         let f = 40;
//         console.log(d);
//         console.log(e);
//         console.log(f);
//     }

//     function c(){
//         console.log(d);
//         console.log(e);
//         console.log(f);

//     }

//     c();

// }
// a();

// Shadowing in Js

// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a);
// console.log(b);
// console.log(c);

// {  
//     let a = 40;
//     const b = 50;
//     var c = 60;
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }
// console.log(a);
// console.log(b);
// console.log(c);


// Illegal shadowing

// let a = 10;
// console.log(a);
// {
//     let a = 20;
//     console.log(a);
// }
// console.log(a);

// setTimeout((drink1, drink2) => {
//     console.log("Hey hi",drink1, drink2);
// }, 2000, "Mojito","Blue Lagoon");


// setInterval((drink1, drink2) => {
//     console.log("Hey hi",drink1, drink2);
// }, 1000, "Mojito","Blue Lagoon");

// Day --- 7

// Closures - Function along with the lexical scope bundled together is called closures.
// A function can access a variable inside or outside of the Function


// let a = 20;
// function x() {
//     return function y() {
//         console.log(a)
//     }

// }
// x()

// let result = x()
// result()

// let a = 20;
// let result = function y (){ // named function expression
//     console.log(a);
// }
// result();
// console.log(result);

// const print = function(){ // function expression
//     console.log("Hey print me!!");
// }

// print();


// let passenger = 0
// const ticket = function () {

//     return function () {

//         passenger++
//         console.log(passenger)

//     }
// }
// let bookie = ticket()
// console.dir(bookie) // function definition
// bookie()


// const boardPassenger = function(n,wait){
//     let peoplePerGroup = n/3;

//     setTimeout(() => {
//         console.log(`we are boarding all ${n} passengers`);
//         console.log(`there are 3 groups of ${peoplePerGroup} passengers`);
//     }, wait*1000);

//     console.log(`Boarding of Passengers started for ${n} people`);
// }
// boardPassenger(180,3);


// const movieSeats = function(x, wait, n){
//     let Seat = x/4;
//     setTimeout(() => {
//         console.log(`There are ${x} seat's`);
//         console.log(`${Seat} people can seat in a row`)
//     }, wait*1000);

//     console.log(`Movie will start in ${n}min`)
// }
// movieSeats(160,4,10)

// callback function
// setTimeout(() => {
//     console.log("I am a setTimeout function");
// }, 3000);

// function x(y){
//     console.log("I am function x")
//     console.log("I am function x")
//     y();
//     console.log("I am function x")
//     console.log("I am function x")
// }
// x(function y(){
//     console.log("I am function y")
// })

// let x = 5;
// let y = 4;
// function a(b) {
//     console.log(x + y);
//     console.log(x - y);
//     console.log(x % y);
//     b()
// }
// a(function b(){
//     console.log("This is from function b")
//     console.log(x * y);
//     console.log(x ** y)
// })

// setInterval(() => {
//     console.log("I am setInterval")
// }, 1000);

// callback hell - pyramid of doom or arrow shape formed due to nested callback functions.
// This is lead to unmanageable code. This gros horizontally.
//Call back s have a disadvantage of callback hell when multiple/nested callback functions are called.

//task.createOrder(()=>{
// task.makePayment(()=>{
// task.orderSummary(()=>{
// task.updateWallet();
// })
// })
// }

//Promises - They are used to handle all the asynchronous tasks. It allows us to prevent callback hell.
// It allows us to make API calls. Promises are a solution to callback hell, but that is not the only task
// what Promises are responsible for.
// An Object is used as a placeholder/container for a future value.


// 1. Pending, 2. Fulfilled, 3. Rejected

// Day --- 8

// Status = 200(get the data successfully) / 400 (error) / 500 (internal server error) 

// const url = "https://jsonplaceholder.typicode.com/todos"

// let result = fetch(url);

// console.log(result)

// promise consist of a producer and a consumer
// producer has executor function called resolve and reject. Resolve and reject are handled by ".then()" and
// ".catch()" method respectively

// let promise = new Promise((resolve, reject) => { // Producer
//     setTimeout(() => {
//         resolve("I am resolving a Promise")
//         reject("I am rejecting a promise")
//     }, 2000);
// })

// promise  // consumer
//     .then((response) =>{
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log("End of promise")
//     })


// function callingPromise(){
//     return new Promise((resolve, reject) =>{ // producer
//         setTimeout(() => {
//             resolve("I am resolving a Promise")
//             reject("I am rejecting a Promise")
//         }, 2000);
//     })
// }

// callingPromise() // consumer
//     .then((response) =>{
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() =>{
//         console.log("End of promise")
//     })


// Promise Chaining - 

// let promise = new Promise((resolve, reject) => {
//     resolve();
// })

// promise
//     .then(() => {
//         console.log("I am first promise response")
//     })
//     .then(() => {
//         return new Promise((resolve, reject) => {

//             setTimeout(() => {
//                 console.log("I am second promise response")
//                 resolve()
//             }, 2000);
//         })
//     })
//     .then(() => {
//         console.log("I am third promise response")
//     })
//     .then(() => {
//         return new Promise((resolve, reject) => {

//             setTimeout(() => {
//                 console.log("I am fourth promise response")
//                 resolve()
//             }, 2000);
//         })
//     })
//     .then(() => {
//         console.log("End of promise")
//     })
//     .catch(() => {
//         console.log("error")
//     })


// let  promise = new Promise((resolve, reject) =>{
//     const url = "https://jsonplaceholder.typicode.com/todos";

//     let result = fetch(url);
//     console.log(result)
//     result   
//         // .then((res)=>{
//         //     console.log(res)
//         //     if(res.status == 200){
//         //         let resultObject = res.json()
//         //         resolve(resultObject);
//         //     }
//         //     else{
//         //         reject(new Error(res));
//         //     }
//         // })
//         .then((res) => {
//             console.log(res);
//             let resultObject = res.json();
//             return resultObject
//         })
//         .then((res) => {
//             console.log(res)
//         })

// })

// promise 
//     .then((res)=>{
//         console.log(res)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })


// async - whenever a function is started with a keyword async, it gives us a promise in return.
// await is always used with async function only. Just await cant be used. Await basically helps to wait for 
// the particular task to finish and then moves to the next line of the code.


async function fetchData() {
    const url = "https://jsonplaceholder.typicode.com/todos/"
    let response = await fetch(url); //10
    console.log(response);

    let result = await response.json();
    console.log(result);

}
fetchData()

// async function callFecthDate() {
//     await fetchData();
//     console.log("End of Promise");
// }
// callFecthDate()

// async function promise(){
//     const url = "https://jsonplaceholder.typicode.com/todos"
//     let response = await fetch(url);
//     console.log(response)

//     let result = await response.json()
//     console.log(result)
// }
// promise()

// function promise() {

//     return new Promise((resolve, reject) =>{
//     const url = "https://jsonplaceholder.typicode.com/todos";

//     let result = fetch(url);
//     console.log(result)
//     result
//         .then((res)=>{
//             console.log(res)
//             if(res.status == 200){
//                 let resultObject = res.json()
//                 resolve(resultObject);
//             }
//             else{
//                 reject(new Error(res));
//             }
//         })
//         // .then((res) => {
//         //     console.log(res);
//         //     let resultObject = res.json();
//         //     return resultObject
//         // })
//         // .then((res) => {
//         //     console.log(res)
//         // })

// })
// }

// promise()
//     .then((res)=>{
//         console.log(res)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })


// function promise(){
//     return new Promise((resolve,reject) => {
//     const url = "https://jsonplaceholder.typicode.com/todos"
//     let result = fetch(url);
//     console.log(result);
    
//     result
//         .then((res)=>{
//             console.log(res)

//             if(res.status === 200){
//                 let resultOutput = res.json()
//                 resolve(resultOutput)
//             }
//             else{
//                 reject(new Error(res))
//             }
//         })
//         // .then((res) =>{
//         //     console.log(res)
//         //     let resultOutput = res.json()
//         //     return resultOutput
//         // })
//         // .then((res)=>{
//         //     console.log(res)
//         // })

// })

// }

// promise()
//     .then((res) =>{
//         console.log(res)
//     })

// Day --- 9

// First Class Function & Higher Order Functions
// First Class Function(FCF's) - Function in javascript can be passed as values to the other function's or
// can be returned as values from the other functions. This property of functions allowed by JavaScript makes
// then call as FIrst Class function or first class citizens

// Higher Order Function(HOF's) - The function accepting FCF's are called HOF's or the function returning 
// FCF's are called as HOF's


function x(para){ // HOF
    console.log("I am inside function x")
    para()
}

x(function y(){ // FCF
    console.log("I am function y")
})


function z(){ // HOF
    let me = "Faizan"

    return function(){
        console.log(`I am ${me}`)
    }
}

let res = z()// FCF

// const sayHi = (friend)=>{ // FCF
//     console.log(`Hello ${friend}`)
// }

// const greeting = (friend, callBack)=>{ //HOF
//     callBack(friend)
// }

// greeting("Faizan",sayHi)

// Call | Bind | Apply - They are the methods used for borrowing the function by the objects.

// function showDetails(id,dept){
//     console.log(`I am ${this.fName} ${this.lName} and my age is ${this.age}, my id is ${id} and my dept is ${dept}`)
// }


// const obj1 = {
//     fName : "Faizan",
//     lName : "Ansari",
//     age: 24,
//     // showDetails: function(){
//     //     console.log(`I am ${this.fName} ${this.lName} and my age is ${this.age}`)
//     // }
// }

// showDetails.call(obj1,1,"IT") // call will take argument individually
// showDetails.apply(obj1,[1,"IT"]) // apply will take in Array 

// const obj2 ={
    // fName: "Hari",
    // lName: "prasad",
    // age: 24,
// }

// obj1.showDetails.call(obj2)
// showDetails.call(obj2,2,"Management")
// showDetails.apply(obj2,[2,"Management"])

// let result1 = showDetails.bind(obj1);
// console.log(result1);
// result1(1,"IT");

// let result2 = showDetails.bind(obj2);
// console.log(result2);
// result1(2,"Management");

// Prototype & Prototype Chaining

// let a = [1,2,3,4];
// console.log(a.__proto__);
// console.log(a.__proto__.__proto__);
// console.log(a.__proto__.__proto__.__proto__);

// function add(){
//     console.log("add");
// }
// console.log(add.__proto__);
// console.log(add.__proto__.__proto__);
// console.log(add.__proto__.__proto__.__proto__);


// const ram = {
//     fName: "Hari",
//     lName: "prasad",
//     roll: 24,

//     showDetails: function(){
//         console.log(`I am ${this.fName} ${this.lName} and my age is ${this.roll}`);
//     }
// }

// console.log(ram);

// const shyam={
//     fName: "Shyam",
// }

// shyam.__proto__ = ram;

// console.log(shyam);
// console.log(shyam.lName);
// console.log(shyam.roll);
// console.log(shyam.showDetails());

// console.log(shyam.__proto__);
// console.log(shyam.__proto__.__proto__);
// console.log(shyam.__proto__.__proto__.__proto__);

// const PersonPrototype = {
//     calcAge(){
//         console.log(`My age is ${2022 - this.bYear}`);
//     },
//     initialize(fName, lName, bYear){
//         this.fName = fName;
//         this.lName = lName;
//         this.bYear = bYear;
//     }
// }

// const steven = Object.create(PersonPrototype);
// console.log(steven)
// steven.initialize("steven","Bell", 1995);
// console.log(steven);

// steven.calcAge()

// // const Kristen = Object.create(PersonPrototype);
// // console.log(Kristen)
// // steven.initialize("Kristen","Stewart", 1997);
// // console.log(Kristen);

// // Kristen.calcAge()

// const StudentPrototype = Object.create(PersonPrototype);

// StudentPrototype.introduce = function(){
//     console.log(`My name is ${this.fName} ${this.lName} and my age is ${2022-this.bYear}`);
// }

// const harry = Object.create(StudentPrototype);
// console.log(harry);
// // harry.initialize("Harry","Potter",1995);
// console.log(harry);
// harry.introduce();
// harry.calcAge();

// StudentPrototype.init = function(fName, lName, bYear, dept){
//     PersonPrototype.initialize.call(this,fName, lName, bYear);
//     this.dept = dept;
// }

// harry.init("Harry","Potter",1995,"CSE");
// console.log(harry);

// Classes and Inheritance

// class Employee {
//     static capitalize(name){
//         return name.charAt(0).toUpperCase() + name.substr(1,name.length);
//     }
//     constructor(name, empId){
//         this.name = Employee.capitalize(name);
//         this.empId = empId;
//     }

//     markAttendance(){
//         console.log(`${this.name} with Employee Id ${this.id} has marked its attendence`)
//     }
//     applyFOrLeave(){
//         console.log(`${this.name} with Employee Id ${this.id} has applied for leave`)
//     }
// }

// const faizan = new Employee ("Faizan",1)
// console.log(faizan);
// faizan.markAttendance();
// faizan.applyFOrLeave();

// Class - Its another method of creating an object. It has a default method called constructor() which is called 
//  whenever any object is created using new Keyword followed by Class Name ex - new Employee()

// Static method - Static methods are used to implement functions that belong to a class as a whole and not
// a particular object.

// Class - Its a method of inheriting one class into another class. This is done by using the keyword extends.

class Manager extends Employee{
    manages(){
        console.log(`${this.name} with Employee Id ${this.empId} manages the operation`)
    }
    requestForLeave(){
        // console.log(`${this.name} with Employee Id ${this.id} has applied for leave`)
        super.applyFOrLeave()
    }
}

// const rathore = new Manager("rathore",102)
// console.log(rathore);

// rathore.markAttendance();
// rathore.requestForLeave();

// rathore.manages();

// Method overriding - If we create a own function of applyForLeave() for manager then it wont take the same 
// function form the Employee.

// super - whenever we override a method, but we don't want the code of inherited class to go in waste, but 
// reuse it, then we can use that already used function inside the another function(requestForLeave) 
// with super keyword. 

//Promise.all() - It allows us to execute multiple promises at a time. It would run only if all the promises
// are resolved. Even if one of the promise is rejected, then the promise is said to be rejected and 
// the promise that is first rejected is thrown as error


// let promise1 = new Promise((resolve, reject)=>{
//     resolve("Welcome")
// });

// let promise2 = new Promise((resolve, reject)=>{
//     resolve("To")
// })

// let promise3 = new Promise((resolve, reject)=>{
//     resolve("Tech")
// })

// let promise4 = new Promise((resolve, reject)=>{
//     resolve("World")
// })

// Promise.all([promise1, promise2, promise3, promise4]) // .all/.race/.any./allSettled
//     .then((res)=>{
//         console.log(res)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// Promise.race - first promise whether resolved or rejected is given.
// Promise.allSettled - gives the status and value for all the promise whether resolved or rejected.
// Promise.any - gives you first resolved promise, if all promises are rejected, then gives you a message
// AggregateError: All promises were rejected

// ES5 vs ES6
// 1. In the  year 2009 / In the year 2015
// 2. It only had var keyword for declaring variables / Let , const was introduced in the Es6
// 3. function keyword was used for creating function/ arrowfunctions came into picture
// 4. lower performance / Higher Performance
// 5.for loops / for..of loops
// 6. strings, arrays, objects,... / Symbol()
// 7. ES6 started using template literals.


// Local Storage vs Session Storage vs Cookies.

// local storage - It store the local details of the user while logging into any website.
// It preserve the data in the tabs or systems.

// session storage - It store the local details of the user while logging into any website.
// It is limited to q particular window only

// cookies - They are used to store / track the browsing activities of our and suggest similar kind of products
// in the form of advertisements. 


// const handelSubmit = () =>{
//     const name = document.getElementById("name").value;
//     console.log(name);
    
//     const email = document.getElementById("email").value;
//     console.log(email);

//     localStorage.setItem("username", name);
//     localStorage.setItem("email", email);

//     sessionStorage.setItem("username", name);
//     sessionStorage.setItem("email", email);

// }

// const getDetails = () =>{
//     const username = localStorage.setItem("username"); 
//     console.log(username);

//     const email = localStorage.setItem("email");
//     console.log(email);

//     const usernameS = sessionStorage.getItem("username");
//     console.log(usernameS);

//     const emailS = sessionStorage.getItem("email");
//     console.log(emailS);
// }

// Type error vs reference error vs syntax error

// function myfunc(){
//     console.log('hello); // syntax error
// }

// const a = 20;
// a = 2;
// console.log(a); // type error

// let helloMan; // undefined
// console.log(helloMan); // reference error

// IIFE's Immediately Invoked Function Expression - These are those function that are called first 
// when the program runs. It does not block any of the variable name's

// (()=>{
//     const myVariable = "faizan"
//     console.log(myVariable);
// })();

// const myVariable = "faiz"
// console.log(myVariable);

// // Symbol - Its another primitive data type whish creates unique variables every times.

// const sym1 = Symbol("Faiz");
// const sym2 = Symbol("Faiz");
// console.log(sym1);
// console.log(sym1 === sym2);


