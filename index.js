// console.log("Working");

// Synchronous single threaded scripting Language.
// Execution Context:-
//1. Global Execution Context.
//2. Functional Execution Context.

// Execution Context - 1. Memory Allocation Phase.
// 2. Code Execution Phase.

// The first thing that get's created while executing the code is known as Global Execution Context.
//Creation Phase is used to allocate memory to the variables 
// and function definitions are allocated to the name of the functions. 
// The exact values are not assigned to the variables, instead the default value undefined is assigned to it. 

// Execution Phase - This is the phase where the exact values will be allocated to the variables. Undefined 
// will be replaced with their true values now. 

// let variableOne = 23;

// function add(){
//     let a = 2;
//     let b = 3;
//     let result = a + b;
// }
// add()

// let myName = "Faizan Ansari";

// keywords that are assigned to the variables
// declare means declaring/defining a variable, initialize means initializing value to it
// let ,const, var
// let = initialized and then declared on the same line
    // or can be initialized first and then can be declared in later lines also.
    // it can be reinitialized too.
    // it can't be "redeclare".
    // block scope 
    // hoisting is not supported by let
// let a;
// a = 2;
// a = 3;
// const = initialized and  declared on the same line only (!important)
// it cant be reinitialized or cant be redeclare too.
    // block scope 
    // hoisting is not supported by const.
// const b = 0;
// b = 2;
// console.log(b);
// // var = initialized and then declared on the same line(villain in nature, prohibit using them)
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
// // "use strict";


// let myName;
// console.log(myName);

// console.log(age);


// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 10);

// let a = 2;
// a < 3 ? console.log("true"): console.log("false");

// //Create and array along with the values.
// let arrayOne = [1, 2, 3, 4, 5];//using square brackets.
// let arrayTwo = ["a", "b", "c", true, 23, false, "d"];//using square brackets.

// // Create an empty array and assign the values as per their indexes
// let arrThree = [];
// arrThree[0] = "Ramesh";
// arrThree[1] = "Raju";
// arrThree[2] = "Kamlesh";
// arrThree[3] = "Rajesh";
// arrThree[4] = "Suresh";
// arrThree[5] = "Dinesh";
// console.log(arrThree);
// //Array constructor with new keyword
// let arrayFour = new Array(4,5,2,"raj","hari",true);
// console.log(arrayFour);

// let arrayFive = [];
// arrayFive[0] = "Ramesh";
// arrayFive[1] = "Raju";
// arrayFive[2] = "Kamlesh";
// arrayFive[20] = "Hello";

// console.log(arrayFive[6]);
// // last index = (array's length - 1);

// //Array Methods

// // 1. Push() - Enters the element at the end of the last index of the array.// at the last position of the array

// let myArray = [1,2,3,4,5,6,7,8];
// console.log(myArray);
// myArray.push(9);
// console.log(myArray);//[1,2,3,4,5,6,7,8,9];

// //2. Pop() - Removes only the element from the last index of the array.// removes from the last position of the array.

// myArray.pop();
// myArray.pop();
// console.log(myArray);//[1,2,3,4,5,6,7]

// //3. Shift() - Removes the element from the first index of the array.// removes from the first position of the array.
// myArray.shift();
// console.log(myArray);//[2,3,4,5,6,7]

// //4. Unshift() - Adds the element at the first index of the array.// adds at the first position of the array.
// myArray.unshift(1);
// console.log(myArray);//[1, 2, 3, 4, 5, 6, 7]

// //5. includes - check if the value is in the array
// console.log(myArray.includes(0));

// //6. concat - creates a new array with the concatenation/addition of the values of the two or more arrays.
// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8];
// let arr3 = [9,10,11,12];
// console.log(arr1);
// console.log(arr2);
// console.log(arr1.concat(arr2));
// console.log(arr1);
// console.log(arr2);
// console.log(arr1.concat(arr2,arr3));

// //7. slice - slices out a piece of an array;

// let arr4 = [1,2,3,4,5,6,7,8,9];
// console.log(arr4.slice(2,-2));//first value is inclusive, last index value is exclusive.
// console.log(arr4);//[1, 2, 3, 4, 5, 6, 7, 8, 9]


// //8. Splice - It follows certain method of addition and removal of values from the array. 
// // Also it modifies the original array.
// //It gives us a new array with deleted elements.
// let res = arr4.splice(2,1,4,5);
// console.log(arr4);
// console.log(res);

// //9. sort sorts the values by first converting them into string;
// let arr7 = [1,2,3,4,5,6,7];
// console.log(arr7.sort());

// let arr8 = [23,31,11,22,36,31,103,121];
// console.log(arr8.sort());//[101,11,123,22,23,31,36]
// arr8.push();
// console.log(arr8.sort().reverse());
// console.log(arr8);
// console.log(arr8.lastIndexOf(31));

// for (let item of arr8) {// values
//     console.log(item);
// }

// for (let item in arr8) {///index - in replicates indexes
//     console.log(item);
// }

// // // // //map, filter, reduce. 

// const arr9 = [1,2,3,4,5,6,7,8];
// const resultArr = arr9.map(item => item * 2);//[2,4,6,8,10,12,14,16]
// console.log(resultArr);//[2,4,6,8,10,12,14,16]
// console.log(arr9);//[1,2,3,4,5,6,7,8];

//map iterates through each of the elements of the array and performs a certain operation on the items.
// The no of items in the original array is equal to the number of items in the newly created array.
//Original array is not manipulated.

// const filteredArray = arr9.filter(item => item % 2 === 0);
// console.log(filteredArray);
// console.log(arr9);
// The no of items in the original array which passes the condition is inserted in the newly created array.

// const reducedArray = arr9.reduce((acc,curr)=>acc = acc + curr);
// console.log(reducedArray);
//All the items are shrinked into a single o/p value, 


// // // // //Strings ,

// // // // const myString = "Prepbytes";
// // // // const otherString = 'Elevation Academy';

// // // // console.log(myString.charAt(-1));//

// // // // console.log(myString.concat(otherString));

// // // // console.log(otherString.endsWith('y'));
// // // // console.log(otherString.startsWith('E'));

// // // // console.log(otherString.includes("on A"));

// // // // console.log(otherString.indexOf('a'));
// // // // console.log(otherString.lastIndexOf('a'));

// // // // console.log(otherString.length);//

// // // // console.log(otherString.replace("Academy","My Academy"));//
// // // // console.log(otherString);

// // // // console.log(otherString.search('v'));//3
// // // // console.log(otherString.search(' v'));//-1

// // // // //const otherString = 'Elevation Academy zindabad';

// // // // console.log(otherString.substr(2,6));//first value is index and second value is no of characters

// // // // console.log(otherString.substring(10,3));//first value is starting index value and the last index value is 
// // // // // end index that too exclusive.

// // // // console.log(otherString.slice(10,3));//first value is starting index value and the last index value is 
// // // // // end index that too exclusive.// it dont support the auto reversal of indexes when startIndex is larger than 
// // // // // end Index.

// // // // console.log(otherString.split(' '));

// // // // const random = "my@fgsdvbhjs@bcsd         bvh@cbvskvbdk";
// // // // console.log(random.split('@'));

// // // // console.log(otherString.split(''));

// // // // console.log(random.trim());

//Maps are collection of key,value pairs. It preserves the order of insertion of the items. It also preserves 
// the data type of the keys. No duplicate entries are allowed in Map as well.

//  const myMap = new Map([
//     ["apples",200],
//     ["oranges",300]
// ])

// console.log(myMap);

// const myMap = new Map();
// myMap.set(true,1);
// myMap.set("apples",200);
// myMap.set("oranges",300);
// myMap.set(250,"MAngoes");
// myMap.set("apples",200);

// console.log(myMap);

// console.log(myMap.get(true));
// console.log(myMap.get(250));

// console.log(myMap.has("apples"));

// myMap.delete(250);//deletes the entry of the key value pair
// console.log(myMap);
// console.log(myMap[2]);//this will not be able to access the key value pair at the particular index.
// // myMap.clear();
// console.log(myMap);

// for(let keys of myMap.keys()){
//     console.log(keys);
// }

// for(let values of myMap.values()){
//     console.log(values);
// }

// for(let values of myMap.entries()){
//     console.log(values);
// }

//Sets are collection of unique values. It doesn't have keys. Each value can occur only once, not twice or more.
//Set can hold value of any data type.

// const mySet = new Set([1,2,3,4,5]);
// console.log(mySet);

// const mySet = new Set();
// mySet.add(200);
// mySet.add("apples");
// mySet.add(true);

// console.log(mySet);

// const mySet = new Set();
// const a = 200;
// const b = "Apples";
// const c = true;

// mySet.add(a);
// mySet.add(b);
// mySet.add(c);
// mySet.add(a);
// mySet.add(b);
// mySet.add(c);
// console.log(mySet);

// console.log(mySet.has("200"));

// // mySet.clear();
// // mySet.add(a);
// // mySet.add(b);
// // mySet.delete(200);
// console.log(mySet);

// console.log(mySet.values());


// for(let keys of mySet.keys()){
//     console.log(keys);
// }

// for(let values of mySet.values()){
//     console.log(values);
// }

// for(let values of mySet.entries()){
//     // console.log(values);
// }

//Objects - Objects are collection of key and value pairs and also methods belonging to the Objects. 
// Objects don't preserve the order of insertion of key, value pairs. 
// Objects keys are converted into string data type by default. 

// console.log(this);

// const person = {
//     fName: "Raju",
//     lName: "Mishra",
//     30: "age",
//     age: 30,
//     true: "isAdult",
//     showDetails: function() {
//         console.log(`the name of the person is ${this.fName} ${this.lName}`);
//     }
// }

// person.profession = "Business";
// person["income"] = 625362772;

// delete person.true;
// delete person[30];

// console.log(person.hasOwnProperty("lName"));
// console.log(person.lName);

// person.showDetails();
// console.log(person);

// person.showAge = function(){
//     console.log(`the age of the person is ${person.age}`);
// }

// person.showAge();

// "use strict"

// function add(){
//     console.log(this);
// }
// add();

// x = 23;
// console.log(this);

//this keyword : - The behaviour of "this" keyword depends where we are calling "this" keyword .
//IN global space it points to the Window Object(Global Object)
// In object, this points to the parent object
// In Function this points to the Window Object(Global Object)
// But using strict mode, now if we use this Keyword inside the function, it will give us undefined instead 
// of Window Object(Global Object)

// const keys = Object.keys(person);
// console.log(keys);

// const values = Object.values(person);
// console.log(values);

// for(const [key, value] of Object.entries(person)){
//     console.log(key, value);
// }

// function Employee(fName, lName, empCode, branch) {
//     this.fName = fName;
//     this.lName = lName;
//     this.employeeId = empCode;
//     this.branch = branch;
// }

// const andrew = new Employee("Andrew","Thomas",1,"IT");
// const stephen = new Employee("Stephen","Hawking",101,"Scientist");
// const alice = new Employee("Alice","Thomas",2,"HR");
// const reyan = new Employee("Reyan","Jackson",4,"Support");
// console.log(andrew);
// console.log(stephen);
// console.log(alice);
// console.log(reyan);

// // // //DOM Manipulation.
// // // // console.log("working");

// const element1 = document.getElementById('test');
// console.log(element1);
// console.log(element1.innerText);
// console.log(element1.innerHTML);

// const element2 = document.getElementsByClassName('text');
// console.log(element2[0]);
// console.log(element2[1]);
// console.log(element2[0].innerText);
// console.log(element2[1].innerText);
// console.log(element2[0].innerHTML);
// console.log(element2[1].innerHTML);

// const element3 = document.getElementsByTagName('h2');
// console.log(element3);
// console.log(element3[0]);
// console.log(element3[1]);
// console.log(element3[2]);
// console.log(element3[0].innerText);
// console.log(element3[1].innerText);
// console.log(element3[2].innerText);
// console.log(element3[0].innerHTML);
// console.log(element3[1].innerHTML);
// console.log(element3[2].innerHTML);

// const element4 = document.getElementsByTagName("h1");
// console.log(element4[0]);
// function changeColor(){
//     const element2 = document.getElementsByClassName('text');
//     element2[0].innerText = "Hello Sidhant!!";

//     const addElement = document.createElement('div');
//     addElement.className = "newDiv";
//     addElement.id = "newDiv";
//     addElement.innerText = "Hope u have an amazing journey ahead. Please start with this coffee";

// const targetElement = document.querySelectorAll('.text');
//     element2[0].appendChild(addElement);

//     const imgElement = document.createElement('img');
//     imgElement.setAttribute("src","./coffee.jpeg");
//     console.log(imgElement);
//     element2[0].appendChild(imgElement);

//     element2[0].style.color = "orange";
//     element2[0].style.fontSize = "50px";
//     element2[0].style.backgroundColor = "cyan";
//     document.getElementsByClassName('text')[0].style.border = "5px solid black";

// }

// const button = document.getElementsByClassName('button');
// button[0].addEventListener('click', changesDirection );

// function changesDirection(){
//     const parent = document.getElementsByClassName('parent');
//     parent[0].style.flexDirection = "column";
// }

// const add = document.getElementsByClassName('add');
// add[0].innerHTML = `
//                     <div class="parent">
//                         <div class="child">1</div>
//                         <div class="child">2</div>
//                         <div class="child">3</div>
//                         <div class="child">4</div>
//                     </div>
// `


// // // //Array of objects - 
// // // // const array = [];

// // // // const tempObj1 = {
// // // //     name: "ravi",
// // // //     age: 23,
// // // // }
// // // // array.push(tempObj1);
// // // // console.log(array);
// // // // const tempObj2 = {
// // // //     name: "Kishan",
// // // //     age: 24,
// // // // }
// // // // array.push(tempObj2);
// // // // console.log(array);
// // // // const tempObj3 = {
// // // //     name: "Hari",
// // // //     age: 25,
// // // // }
// // // // array.push(tempObj3);
// // // // console.log(array);
// // // // const tempObj4 = {
// // // //     name: "Rajesh",
// // // //     age: 26,
// // // // }
// // // // array.push(tempObj4);
// // // // console.log(array);
// // // // const tempObj5 = {
// // // //     name: "Suresh",
// // // //     age: 27,
// // // // }
// // // // array.push(tempObj5);
// // // // console.log(array);
// // // // console.log(array[3]);

// // // // let arr1 = [1,2,3,4,5,6,7,8,2,1,4,3,5,6,7];
// function clock() {

//     const date = new Date();
//     console.log(date);
//     let hours = date.getHours();
//     console.log(hours);
//     let mins = date.getMinutes();
//     console.log(mins);
//     let secs = date.getSeconds();
//     console.log(secs);
//     let meridian;
//     if (hours > 12) {
//         meridian = "PM";
//         hours -= 12;
//     }
//     else {
//         meridian = "AM";
//     }
//     if (hours < 10) {
//         hours = "0" + hours;
//     }
//     if (mins < 10) {
//         mins = "0" + mins;
//     }
//     if (secs < 10) {
//         secs = "0" + secs;
//     }
//     console.log(hours, mins, secs);
//     const hoursSlot = document.getElementsByClassName('hours');
//     hoursSlot[0].innerHTML = `${hours} :`;
//     const minsSlot = document.getElementsByClassName('mins');
//     minsSlot[0].innerHTML = `${mins} :`;
//     const secsSlot = document.getElementsByClassName('secs');
//     secsSlot[0].innerHTML = secs;
//     const meridianSlot = document.getElementsByClassName('meridian');
//     meridianSlot[0].innerHTML = meridian;
// }
// setInterval(() => {
//     clock();
// }, 1000);

// // // // Mouse and Key Events

// // // // 1. "mousedown" - It is fired when mouse button is pressed down. 
// // // // 2. "mouseup" - It is fired when mouse button is released up. 
// // // // 3. "click" - It is fired when the mouse is clicked. Here mousedown, mouseup and click all the three events are
// // // //  called in sequence.
// // // // 4. "dblclick" - It is fired when the mouse is double clicked rapidly. Here mousedown, mouseup, click, mousedown, 
// // // // mouseup, click, dblclick.
// // // // 5. "mouseenter" - It is fired when the mouse starts to hover over some element.
// // // // 6. "mouseleave" - It is fired when the mouse exits while hovering over some element.
// // // // 7. "mouseover" - It is fired when the mouse is hovering over some element.
// // // // 8. "mouseout" - It is fired when the mouse leaves from hovering over some element.
// // // // 9. "mousemove" - It is fired when the mouse moves over some element.
// // // // 10. "contextmenu" - It is fired when the mouse right button is clicked.

// // // const divOne = document.getElementById('divOne')
// // // console.log(divOne);

// // // const divTwo = document.getElementById('divTwo')
// // // console.log(divTwo);

// // // function output(e){
// // //     console.log(e.type);
// // // }

// // // divTwo.addEventListener('dblclick',output);
// // // divTwo.addEventListener('click',output);
// // // divTwo.addEventListener('mouseup',output);
// // // divTwo.addEventListener('mousedown',output);
// // // divTwo.addEventListener('mouseenter',output);
// // // divTwo.addEventListener('mouseleave',output);
// // // divTwo.addEventListener('mouseover',output);
// // // divTwo.addEventListener('mouseout',output);
// // // divTwo.addEventListener('mousemove',output);
// // // divTwo.addEventListener('contextmenu',output);


// // // //Keydown, keyup, keypress(triggered for printable character only)
// // // const myText = document.getElementById('myInput');
// // // myText.addEventListener('keydown', keyEvent);
// // // myText.addEventListener('keyup', keyEvent);
// // // myText.addEventListener('keypress', keyEvent);

// // // function keyEvent(e){
// // //     console.log(e.type + " " + e.keyCode+ " "+ String.fromCharCode(e.keyCode));
// // // }

// // // JS Engine (Google v8 architecture)
// // // Execution context : call stack and GEC and FEC
// // // Hoisting and temporal dead zone

// // //Hoisting  - Bringing the variable and the functions declaration to the top of the code is called as hoisting.
// // // //Arrow functions are not hoisted .
// // // // var x = undefined;
// // // // function add(){
// // // //     let result = 2+3;
// // // //     console.log(result);
// // // // }
// // // console.log(a);//undefined
// // // // console.log(b);//
// // // // console.log(c);
// // // //global, it becomes a property of "this", window
// // // var a;
// // // a = 10;
// // // let b;
// // // b = 20;
// // // const c = 30;


// // // console.log(a);//10
// // // console.log(b);//10
// // // console.log(c);//10

// // //let and const stays in the temporal dead zone as long as they are not assigned/initialized with their true 
// // // values. If we try to access them in the TDZ, we wont be able to.

// // // Different scopes in JS : global , block and functional
// // // Scope chain in JS
// // // Shadowing in JS
// // // Closures, Closures + setTimeout , setInterval

// // //Globally defined variables whether with let, const or var are naturally accessible inside a block or function. 
// // // Global scope
// // // let a = 10;
// // // const b = 20;
// // // var c = 30;
// // // console.log(a);//10
// // // console.log(b);//20
// // // console.log(c);//30
// // // {
// // //     console.log(a);//10,nd
// // //     console.log(b);//20,nd
//     console.log(c);//30,nd
// }
// console.log(a);//10
// console.log(b);//20
// console.log(c);//30

// function add(){
//     let result = a+b;
//     console.log(result);
// }
// add();

//Block Scope
// {
//     let a = 10;
//     const b = 20;
//     var c = 30;
//     console.log(a);//10
//     console.log(b);//20
//     console.log(c);//30
// }
// console.log(c);//30
// let and const are block scoped variables and therefore not accessible outside the block whereas var are global
// scope therefore can be accessed anywhere in the code.    

//function Scope- Any variables declared inside the function are only accessible by the function itself and not 
// outside the function. 
// function me() {
//     let a = 15;
//     const b = 25;
//     var c = 35;
//     console.log(a);//15
//     console.log(b);//25
//     console.log(c);//25
// }
// me();
// console.log(a);
// console.log(c);

// Scope chain in JS
// Scope is related to the lexical environment of the variable. Scope is a place/environment where any variable
// can be accessed in our code.

// Whenever execution context is created a lexical environment is created for that.
// lexical environment - A local space of the function plus the local space of the functions parent and so on

// Scope chain - Finding the variable in it's own scope, if not found then in it's parent scope, if not found i
// in the parent's scope also, then finding it in the grandParent's scope and so on upto the global space is 
// called scope chain.

// let d = 25;
// function a(){
//     console.log(d);//25
//     let e = 30;
//     // b();
//     function b() {
//         console.log(d);//25
//         console.log(e);//30
//         let f = 40;
//         c();
//         function c(){
//             console.log(d);//25
//             console.log(e);//30
//             console.log(f);//40
//         }
//     }
// }
// a();
// b();
// let d = 20;
// function a(){
//     let e = 30;
//     console.log(d);//20
//     b();
//     function b(){
//         let f = 40;
//         console.log(d);//20
//         console.log(e);//30
//         console.log(f);//40
//     }
//     function c(){
//         console.log(d);//20
//         console.log(e);//30
//         console.log(f);//not defined
//     }
//     c();
// }
// a();

//Shadowing in JS

// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a);//10
// console.log(b);//20
// console.log(c);//30
// {
//     let a = 40;
//     const b = 50;
//     var c = 60;
//     console.log(a);//40
//     console.log(b);//50
//     console.log(c);//60
// }
// console.log(a);// 10
// console.log(b);//20
// console.log(c);//60

//Illegal shadowing
// const a = 10;
// console.log(a);//10
// {
//     var a = 20;
//     console.log(a);//20
// }
// console.log(a);//10

// setTimeout((drink1, drink2) => {
//     console.log("Hey hi",drink1, drink2);
// }, 2000, "Mojito","Blue Lagoon");

// setInterval((drink1, drink2) => {
//     console.log("Hey hi",drink1, drink2);
// }, 1000, "Mojito","Blue Lagoon");


//Closures - Function along with the lexical scope bundled together is called closures.


// function x(){
//     let total = 0;
//     total = 40+total;
//     return function y (){
//         console.log(total);
//     }
// }
// let result = x();
// result();
// console.log(result);

// const ticketBooking = function(){
//     let passengerCount = 0;//1//2//3

//     return function(){
//         passengerCount++;
//         console.log(`The count of passenger is ${passengerCount}`);
//     }
// }
// ticketBooking()();
// let bookie = ticketBooking();
// console.log(bookie);
// bookie();//1
// bookie();//2
// bookie();//3
// bookie();//4
// bookie();//5

// console.log(bookie)

// const boardPassenger = function(n,wait){
//     let peoplePerGroup = n/3;

//     setTimeout(() => {
//         console.log(`we are boarding all ${n} passengers`);
//         console.log(`there are 3 groups of ${peoplePerGroup} passengers `);
//     }, wait*1000);

//     console.log(`Boarding of Passengers started for ${n} people`);
// }
// boardPassenger(180,3);

// setTimeout(() => {
//     console.log("I am a setTimeout function");
// }, 0);


// function x(y){
//     console.log("I am function x");
//     y(); 
//     console.log("I am function x");
// }  

// x(function y(){
//     console.log("I am function y");
// })

// let y = function y(){
//     console.log("I am function y");
// }

// y();

//callback hell - pyramid of doom or arrow shape formed due to nested callback functions. 
//This leads to unmanageable code. This grows horizontally.
//Call back functions have a disadvantage of callback hell when multiple/nested callback functions are called.

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
// An Object that is used as a placeholder/container for a future value. 

// 1. Pending   2. Fulfilled    3. Rejected

// status = 200(get the data successfully) / 404(error) / 500(internal server error)

// const url = "https://jsonplaceholder.typicode.com/todos";

// let result = fetch(url);
// console.log(result);

//Promise consists of a Producer and a consumer.
// producer has executor functions called resolve and reject. Resolve and reject are handled by .then() and 
// .catch() method respectively

// let promise = new Promise((resolve, reject) => {//Producer
//     setTimeout(() => {
//         resolve("I am resolving a Promise");
//         // reject("I am rejecting the promise")
//     }, 3000);
// })

// promise  //Consumer
//     .then((response) => {
//         console.log(response);
//     }).catch((error) => {
//         console.log(error);
//     }).finally(() => {
//         console.log("End of promise");
//     })
//  console.log("End of promise");

// function callingPromise() {//Producer
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve("I am resolving a Promise");
//             reject("I am rejecting the promise")
//         }, 2000);
//     })
// }

// callingPromise()        //Consumer
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("End of promise");
//     })


//Promise Chaining - 

// let promise = new Promise((resolve, reject)=>{
//     resolve();
// })

// promise
//     .then(()=>{
//         console.log("I am first promise response");
//     })
//     .then(()=>{
//         return new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 console.log("I am second promise response");
//                 resolve();
//             }, 2000);
//         })
//     })
//     .then(()=>{
//         console.log("I am third promise response");
//     })
//     .then(()=>{
//         return new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 console.log("I am fourth promise response");
//                 resolve();
//             }, 2000);
//         })
//     })
//     .then(()=>{
//         console.log("end of promises");
//     })
//     .catch(()=>{
//         console.log("error");
//     })

// let promise = new Promise((resolve, reject) => {
//     const url = "https://jsonplaceholder.typicode.com/todos";
//     let result = fetch(url);
//     console.log(result);
//     result
//         .then((res)=>{
//             console.log(res);
//             if(res.status === 200){
//                 let resultObject = res.json();
//                 resolve(resultObject);
//             }
//             else{
//                 reject(new Error(res))
//             }
//         })
        // .then((res)=>{
        //     console.log(res);
        // })
// })

// promise 
//     .then((res)=>{
//         console.log(res);
//         // return res.json();
//     })
//     // .then((res)=>{
//     //     console.log(res);
//     // })
//     .catch((err)=>{
//         console.log(err);
//     })


//async - whenever a function is started with a keyword async, it gives us a "promise" in return. 
// await is always used with async function only. Just await cant be used. Await basically helps to wait for 
// the particular task to finish and then moves to the next line of the code.

// async function fetchData(){
//     const url = "https://jsonplaceholder.typicode.com/todos";
//     console.log(url);
//     let response = await fetch(url);
//     console.log(response);
//     let result = await response.json()
//     console.log(result);
// }
// async function callFetchData(){
//      fetchData();
//     console.log("End Of Promise");
// }
// callFetchData();

//First Class Functions And Higher Order Functions.

//First Class Functions(FCF's) - Functions in javaScript can be passed as values/arguments to the other function's or
// can be returned as values from the other functions. This property of functions allowed by Javascript makes 
// them call as First class functions or First class Citizens.

// Higher Order Functions(HOF's) - The functions accepting FCF's are called as HOF's or the Functions returning
// FCF's are called as HOF's 

// function x(param){//HOF
//     console.log(`Inside the function X`);
//     param();
// }

// x(function y(){//FCF
//     console.log(`I am function Y`);
// })

// function z(){//HOF
//     let me = "SId";

//     return function(){//fcf
//         console.log(`I am ${me}`);
//     }
// }

// let res = z();
// let res = function(){// FCF
    //     console.log(`I am ${me}`);
    // }


// const sayHi = (friend) => {//friend = "ravi"// sayHi->FCF
//     console.log(`Hello ${friend}`);//Hello Ravi
// }

// const greeting = (friend,callBackFn) => {//friend = "ravi", callBackFn = sayHi// greeting->HOF
//     callBackFn(friend);//sayHi("Ravi")
// }

// greeting("Ravi",sayHi);

//Call | Bind | Apply - They are the methods used for borrowing the functions by the objects.


// function showDetails(id,dept){
    // console.log(`I am ${this.fName} ${this.lName}, my age is ${this.age}, my id is ${id} and my dept is ${dept}`);
// }

// const obj1 = {
//     fName: "Ram",
//     lName: "Kumar",
//     age: 23,
// }
// showDetails.call(obj1,1,"IT");
// showDetails.apply(obj1,[1,"IT"]);

// const obj2 = {
//     fName: "Hari",
//     lName: "Prasad",
//     age: 24,
// }
// showDetails.call(obj2,2,"Management");
// showDetails.apply(obj2,[2,"Management"]);

// const obj3 = {
//     fName: "Manu",
//     lName: "Tripathi",
//     age: 24,
// }
// showDetails.call(obj3,3,"HR");
// showDetails.apply(obj3,[3,"HR"]);

// let result1 = showDetails.bind(obj1);
// let result1 = function showDetails(id,dept){
//     console.log(`I am ${this.fName} ${this.lName}, my age is ${this.age}, my id is ${id} and my dept is ${dept}`);
// }
// console.log(result1);
// result1(1,"IT");

// let result2 = showDetails.bind(obj2);
// console.log(result2);
// result2(2,"Management");

// let result3 = showDetails.bind(obj3);
// console.log(result3);
// result2(3,"HR");

//Prototype & Prototype Chaining

// let arr = [1,2,3,4,5];
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);

// function add(){
//     console.log("add");
// }
// console.log(add.__proto__);
// console.log(add.__proto__.__proto__);
// console.log(add.__proto__.__proto__.__proto__);

// const ram = {
//     fName: "Ram",
//     lName: "Kumar",
//     roll: 23,
//     showDetails: function (){
//         console.log(`I am ${this.fName} ${this.lName}, my roll is ${this.roll}`);
//     }
// }

// console.log(ram);

// const shyam = {
//     fName: "Shyam",
//     // lName: "Shaw"
// }

// shyam.__proto__ = ram;
// console.log(shyam);
// console.log(shyam.lName);
// console.log(shyam.roll);
// shyam.showDetails();

// console.log(shyam.__proto__);
// console.log(shyam.__proto__.__proto__);
// console.log(shyam.__proto__.__proto__.__proto__);

// const PersonPrototype = {
//     calcAge(){
//         console.log(`My age is ${2022-this.bYear}`);
//     },
//     initialise(fName, lName, bYear){
//         this.fName = fName;
//         this.lName = lName;
//         this.bYear = bYear;
//     }
// }

// const steven = Object.create(PersonPrototype);
// console.log(steven);
// steven.initialise("Steven","Bell",1987);
// console.log(steven);

// steven.calcAge();

// const kirsten = Object.create(PersonPrototype);
// console.log(kirsten);
// kirsten.initialise("Kirsten","Stewart",1990);
// console.log(kirsten);

// kirsten.calcAge();

// const StudentPrototype = Object.create(PersonPrototype);

// StudentPrototype.introduce = function(){
//     console.log(`My name is ${this.fName} ${this.lName} and my age is ${2022-this.bYear}`);
// }

// const harry = Object.create(StudentPrototype);
// console.log(harry);
// // harry.initialise("Harry","Potter",1995);
// console.log(harry);
// harry.introduce();
// harry.calcAge();

// StudentPrototype.init = function(fName, lName, bYear, dept){
//     PersonPrototype.initialise.call(this,fName, lName, bYear);
//     this.dept = dept;
// }

// harry.init("Harry","Potter",1995,"CSE");
// console.log(harry);


// Classes and Inheritance

// const Person ={
//     initialise(){

//     },
//     sayHi(){

//     }
// }

// class Employee {
//     static capitalize(name){
//         return name.charAt(0).toUpperCase() + name.substr(1,name.length-1);//substr(startingIndex,noOfCharacters)
//     }
//     constructor(name, empId){
//         this.name = Employee.capitalize(name);
//         this.empId = empId;
//     }
//     markAttendance(){
//         console.log(`${this.name} with Employee Id ${this.empId} has marked its attendance`);
//     }
//     applyForLeave(){
//         console.log(`${this.name} with Employee Id ${this.empId} has applied for leave`);
//     }   
// }

// const himani = new Employee("himani",1);
// console.log(himani);
// const arjun = new Employee("arjun",2);
// console.log(arjun);

// himani.markAttendance();
// himani.applyForLeave();

// arjun.markAttendance();
// arjun.applyForLeave();

//Class - Its another method of creating an Object. It has a default method called constructor() which is called
//  whenever any object is created using new Keyword followed by Class Name ex - new Employee()

//static methods - static methods are used to implement functions that belong to a class as a whole and not to
// a particular object. 

// Class Inheritance - Its a method of inheriting one class into another class. This is done by using the 
// keyword extends.

// class Manager extends Employee {
//     manages(){
//         console.log(`${this.name} with Employee Id ${this.empId} manages the operation`);
//     }
//     requestForLeave(){
//         // console.log(`${this.name} with Employee Id ${this.empId} has applied for leave being a manager`);
//         super.applyForLeave();
//     }
// }

// const rathore = new Manager("rathore",101);
// console.log(rathore);

// rathore.markAttendance();
// rathore.requestForLeave();
// rathore.manages();

// arjun.manages();//

// method overriding - If we create an own function of applyForLeave() for manager then it wont take the same
// function from the Employee instead use it's own function.

// super - Whenever we override a method, but we don't want the code of inherited class to go in waste, but to
// reuse it, then we can use that already used function(applyForLeave()) inside the another 
// function(requestForLeave) with super Keyword


//Promise.all() - It allows us to execute multiple promises at a time. It would run only if all the promises
// are resolved. Even if one of the promise is rejected, then the promise is said to be rejected and 
// the promise that is first rejected is thrown as error.
let promise1 = new Promise((resolve,reject)=>{
    // resolve("Welcome");
    reject(new Error("Welocme"))
})

let promise2 = new Promise((resolve,reject)=>{
    // resolve("To")
    reject(new Error("To"))
})

let promise3 = new Promise((resolve,reject)=>{
    // resolve("Prepbytes")
    reject(new Error("Prepbytes"))
})

// Promise.any([promise1, promise2, promise3])//.all/.race/.allSettled/.any
//     .then((result)=>{
//         console.log(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// Promise.race - first promise whether resolved or rejected is given.

// Promise.allSettled  - gives the status and value for all the promises whether resolved or rejected

// Prommise.any - gives u first resolved promise, if all promises are rejected, then gives u a message
// AggregateError: All promises were rejected


// const taskList = [];

// const addTask = () => {
//     const name = document.getElementById("name").value;
//     // console.log(name);
//     const tempObj = {
//         id: Date.now(),
//         taskName: name,
//     }
//     taskList.push(tempObj);
//     console.log(taskList);
//     addTaskOnScreen();
// }

// const addTaskOnScreen = () => {
//     const element = document.createElement("div");
//     element.setAttribute("class","child");
//     const exstingElement = document.getElementById("parent");
//     exstingElement.appendChild(element);
//     element.innerText = taskList[taskList.length-1].taskName;
// }

