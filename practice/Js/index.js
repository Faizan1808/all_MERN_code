// // js work flow
// // var is declared
// //  var value
// // var logged

// // window.alert("Hello World...!!!")
// // document.getElementById.innerHTML

// // console.log(typeof a)

// // var a = 10;

// // alert("Hello")
// // console.log(typeof a)


// // alert("hello");

// // window.alert("Hello");

// // var a = 10; // number
// // var a = "hello"; // string
// // var a = true; // boolean
// // console.log(typeof a);

// // var a = 10;


// // function abc(){
// //     var a = 20;
// //     console.log(a);
// // }
// // abc();

// // GEC Global Execution Context 
// // E1
// // declare a
// // a is 20
// // a is logged
// // end the E1
// // destroyed the E1 Memory
// // after execution of function it destroyed the function from memory

// // console.log(a)

// // a is logged 10

// // var a = 2;

// // console.log(++a);


// // var a = 101;

// // if (a >= 18) {
// // console.log( "you can vote");
// // } 
// // else if (a > 100) {
// // console.log( "you are very old");
// // }
// // else {
// // console.log( "you cannot vote");

// // }

// // var apple = 5;
// // var people = 4;

// // var extra = apple % people;
// // if (apple % people == 0){
// //     console.log(" Equally divided" )
// // }
// // else {
// //     console.log("apples are not equal " + extra + " is extra")
// // }

// // || Or Operator

// // var apple = 0;
// // var orange = 0;

// // if (apple > 0 || orange > 0){
// //     console.log("you got fair share")
// // }
// // else{
// //     console.log("Please take one of the fruits")
// // }

// // ! not Operator
// // condition is true = false 
// // condition is  false = true

// // var a = 11
// // if (a % 2){
// //     console.log( "even number")
// // }
// // else {
// // console.log(" odd number")
// // };

// // switch case

// // var n = 2;
// // switch (n) {
// //     case 1:
// //         console.log("you pressed the 1 key");
// //         break;
// //     case 2:
// //         console.log("you pressed the 2 key");
// //         break

// //     default:
// //         console.log("Wrong input");

// // }

// // Loops

// // For Loop
// // var n = 2;
// // for (var i = 1; i <= 10 ; i++ ){

// //     document.write(i*n) + "<br>" ;
// // }


// // let n = 11;
// // let count = 0;
// // for (let i = 2; i < n / 2; i++) {
// //     if (n % i == 0) {
// //         count++;
// //     }
// // };
// // if (count < 1){
// //     console.log("Not Prime")
// // }
// // else{
// //     console.log("prime")
// // }

// // var a = 40;

// //     if (a <= 10){
// //       console.log("E");
// //     }
// //     else if( a >=11 && a <= 20){
// //         console.log("D" );
// //     }
// //     else if(a >= 21 && a <= 30){
// //         console.log ("C") ;
// //     }
// //     else if(a >= 31 && a <= 40){
// //         console.log ("B") ;
// //     }
// //     else{
// //         console.log ("A");
// //     }

// // var a = "P";
// // if (a === "P" || a === "p") {
// //     console.log("PrepBytes");
// //   }
// //   else if (a ===" Z "|| a === "z") {
// //     console.log("Zenith");
// //   }
// //   else if(a === "E" || a === "e") {
// //     console.log("Expert Coder");
// //   }
// //   else{
// //     console.log("Data Structure");
// //   }


// // While loop

// // var n = 1;

// // do{
// //     console.log(n);
// //     n++;
// // }while (n < 1);

// // Array.map

// // var a = [1,2,3,4,5,6];

// // // const number = (n) => n * 2; // simple arrow function

// // var b = a.map((n) => n + 2); //anonymous functions
// // console.log(b);

// // filter
// // var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // // const number = (n) => n * 2; // simple arrow function

// // var b = a.filter((n) => n > 4); //anonymous functions
// // console.log(b);

// //reduce
// // const a = [100, 20, 30, 40];


// // const b = a.reduce((money, n) => money - n, 1000); //anonymous functions
// // console.log(b);

// // find index
// // const a = [18, 20, 30, 40];


// // const b = a.findIndex((n) => n > 10); //anonymous functions
// // console.log(b);

// // const a = [10, 50, 90, 68, 70]

// // const disc = a.filter((n) => n >= 65).map((n) => n * 2); // chaining function 

// // console.log(disc)

// //pop

// // const age = [10, 20, 30, 40, 50, 60, 10, 30, 50]

// // age.unshift(age.pop());
// // console.log(age);


// //slice && splice

// const age = [10, 20, 70, 80, 90, 85, 15]

// const name1 = age.splice(2,1,15,12);
// console.log(name1)

// // const x = [10,15,18, 32, 50,60];

// // const y = every(x >= 18);

// // console.log(y);
// // const age = [12, 24, 52, 85, 12];
// // const newAge = age.some((n) => n  > 18);

// // console.log(age)


// // string
// // test reverse

// // let text = "hello";

// // let x = text.split("").reverse().join("");

// // console.log(x)

// // function func(){
// //     let x = text.split("").reverse().join("");

// //     return x;
// // }

// // console.log(func('hello'));

// // unique value

// // var x = [1,2,3,1,2,3];


// // const uniqueValue = (value, index, arr) =>{
// //     return arr.indexOf(value) === index;

// // }

// // let newX = x.filter(uniqueValue);
// // console.log(newX)

// // objects

// // let fruit = {title : "apple", color:"red" };

// // console.log(fruit.color);

// // object this

// // let fruit = {
// //     title: "apple",
// //     color: "red",

// //     callDetails: function () {
// //         return this.title + " " + this.color
// //     },

// // };

// // console.log(fruit.callDetails());

// // let n = 5;
// // let string = "";

// // for (let i = 1; i <= n; i++) {

// //   for (let j = 1; j <= n - i; j++) {
// //     string += " ";
// //   }

// //   for (let k = 0; k < 2 * i - 1; k++) {
// //     string += "*";
// //   }
// //   string += "\n";
// // }
// // console.log(string);


// //Set
// // var x = [1, 2, 3, 4, 5, 1, 2, 'a', 'b', 'c', 'a', 'b'];

// // var mySet = new Set(x);

// // a = [...mySet];

// // console.log(a);
// // mySet.forEach(function(value){
// //     console.log(value);
// // });
// // console.log(mySet);


// //Map

// // var a = new Map([
// //   ["name", "Faizan"],
// //   ["Location", "Hyd"],
// // ]);

// // a.forEach(function(value,key){
// //   console.log(value);
// // });

// // for (let x of a.entries()) {
// //   console.log(x);
// // }

// // console.log(a.entries());

// const data =[
//     {name1: "Python Developer", img: "./images/python-developer.jpg"},
//     {name1: "MERN Stack", img: "./images/MERN-Stack.jpg"},
//     {name1: "Backend Developer", img: "./images/backend-developer.jpg"},
//     {name1: "Designer", img: "./images/designer.jpg"},
//     {name1: "Frontend Developer", img: "./images/frontend-developer.jpg"},

// ];

// let main = document.getElementById("main");

// // let img = document.createElement("img");
// // let name1 = document.createElement("h1");

// // main.appendChild(img);
// // main.appendChild(name1);

// data.forEach(randomCode);
// // function randomCode(n) {
// //     // let value = Math.random() * 5;
// //     // let newValue = Math.floor(value);

// //     // console.log(data[newValue]);
// // //     name1.innerHTML = data[newValue].name1;
// // //    img.src = data[newValue].img;

// //     let img = document.createElement("img");
// //     let name1 = document.createElement("h1");

// //     main.appendChild(img);
// //     main.appendChild(name1);

// //     name1.innerHTML = n.name1;
// //     img.src = n.img;


// // }



const obj1 = {
    fName: "sam",
    lName: "Jhonarthan"
}

function intro(age, language){
    console.log(`My name is ${this.fName} ${this.lName} and age is ${age} and i prefered with ${language}`)
}

intro.call(obj1, 20 , "Python"); // call
intro.apply(obj1, [20 , "Python"]); // apply
 
const  a =  intro.bind(obj1); //bind
// console.log(a,20 , "Python" );a\
a(20 , "Python" )
// intro();    