// const a = ["1","2","3","4"]
// console.log(...a)
// console.log(a)


// for-in loop - for-in loop is a spl loop it iterate over an object or an array. return the index of an array

// const person = {fname:"John", lname:"Doe", age:25};
// let text = "";
// for (let x in person) {
//   text += person[x] + " ";
//   console.log(text)
// }
// console.log(text)
// console.log(person)

// Explain global Scope, Block Scope, Functional Scope and Scope Chain in javascript

// global Scope - 

// Map

// let arr = [1,2,3,4,8,9,4];

// // let x = arr.map(i => i * 2)
// let x = arr.filter(i => (i % 2 == 0))

// console.log(x)

// function add(){
//      let a = 5;
//      let b = 6;

//      console.log(a + b);

// }

// setTimeout(() => {
//      add()
// }, 3000);

// Arrow function is one of the features introduced in the ES6 version of JavaScript. 
// It allows you to create functions in a cleaner way compared to regular functions
// let sum = (a , b) =>{
//      let result = a * b;
//      return result;
// }

// let c = sum(5,9);
// console.log(c);

// Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed. 
// Temporal Dead Zone starts when the code execution enters the block which contains the let or const declaration
// and continues until the declaration has executed.


// variables and function declarations are moved to the top of their scope before code execution. 


// async function func1(){
//      let promise = new Promise(function (resolve, reject){
//           resolve("i am inside async await function");
//      })

//      let res = await promise

//      console.log(res);
// }

// func1()



// for-in loop
// let car = [1,2,3,4]
// let newVal = ''
// for(let x in car){

//      newVal += x;
//      console.log(x)
// }

// function heading(){
//      let head = document.getElementById("main");
//      // head.appendChild()
//      head.innerText = "MERN STACK";


// }

let arr = [0,1,0,4,0,8,1,0,5];

let count = 0;

for(let i of arr){
     if(i == 0){
          count++
     }
}

// console.log(count)

// let x = [2,3,6,9,4,7,12,18,19,15];

// let even = 0;
// let odd = 0;

// for(let i of x){
//      if( i % 2 == 0){
//           even += i // 42
//      }
//      else{
//           odd += i //53
//      }
// }

// console.log(even,odd)


let obj1 ={
     fullName: "Sam",
     array: [1,2,3,4,5]
}

let obj2 ={
     fullName: "john",
     array: [1,2,3,4,5]
}
   
function check(){
     let temp = 0;

     for(let i = 0; i < obj1.array.length || i < obj2.array.length; i++ ) {

          if(obj1.array[i] == obj2.array[i]){
               temp = 1;   
          }

          else{
               temp = 0;
          }
     }

     if(temp == 1) console.log('Arrays are same');

     else console.log('Arrays are not same');  

}
check();