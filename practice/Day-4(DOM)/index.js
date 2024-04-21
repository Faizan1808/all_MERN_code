// DOM Manipulation

// const element = document.getElementById('test');

// console.log(element);
// console.log(element.innerText);
// console.log(element.innerHTML);

// const element1 = document.getElementsByClassName('text');

// console.log(element1[0]);
// console.log(element1[1]);

// console.log(element1[0].innerText);
// console.log(element1[1].innerText);

// console.log(element1[0].innerHTML);
// console.log(element1[1].innerHTML);

// const element2 = document.getElementsByTagName('h2');

// console.log(element2[0]);
// console.log(element2[1]);
// console.log(element2[2]);

// console.log(element2[0].innerText);
// console.log(element2[1].innerText);
// console.log(element2[2].innerText);

// console.log(element2[0].innerHTML);
// console.log(element2[1].innerHTML);
// console.log(element2[2].innerHTML);

// const element3 = document.getElementsByTagName('h1');

// console.log(element3[0]);
// create HTML tags with js

// const addElement = document.createElement('div');

// addElement.className = "newDiv";
// addElement.id = "newDiv"
// addElement.innerText = "Hope you have an amazing journey ahead."
// console.log(addElement);

// const targetElement = document.querySelectorAll(".text");
// console.log(targetElement[0]);
// // targetElement[0].appendChild(addElement)


// const addImage = document.createElement('img')
// console.log(addImage);
// addImage.setAttribute("src","./arc.jfif");
// targetElement[0].appendChild(addImage);


// function changeColor(){

//     const element1 = document.getElementsByClassName('text');

//     element1[0].innerText = "Hello Faizan!!!";
//     const addElement = document.createElement('div');

//     addElement.className = "newDiv";
//     addElement.id = "newDiv"
//     addElement.innerText = "Hope you have an amazing journey ahead."
//     console.log(addElement);

//     const targetElement = document.querySelectorAll(".text");
//     console.log(targetElement[0]);
//     // targetElement[0].appendChild(addElement)


//     const addImage = document.createElement('img')
//     console.log(addImage);
//     addImage.setAttribute("src","./arc.jfif");
//     targetElement[0].appendChild(addImage);

//     const addImage2 = document.createElement('img')
//     addImage2.setAttribute("src","./download.jfif");
//     targetElement[0].appendChild(addImage2);

//     // element1[0].style.flexDirection = "flex column"
//     element1[0].appendChild(imgElement);

//     element1[0].style.color = "orange";
//     element1[0].style.fontSize = "50px";
//     element1[0].style.backgroundColor = "cyan";
//     document.getElementsByClassName('text')[0].style.border = "5px solid black";

// }
// it use when we have to call function with class
// const button = document.getElementsByClassName('button')
// button[0].addEventListener('click', functionName); //events like mouseover and etc

// const add = document.getElementsByClassName('add')
// add[0].innerHTML = `
//                     <div> I am newly created element </div>
//                     <div> It is from innerHTML </div>
//                     <b>Faizan Ansari</b>
                    
// `

// const array = [];

// const tempObj = {
//     name: "faizan",
//     age: 25
// }
// array.push(tempObj)

// const tempObj1 = {
//     name: "faiz",
//     age: 21
// }
// array.push(tempObj1)

// const tempObj2 = {
//     name: "faisan",
//     age: 26
// }
// array.push(tempObj2)


// const tempObj3 = {
//     name: "ansari",
//     age: 25
// }
// array.push(tempObj3)

// const tempObj4 = {
//     name: "samual",
//     age: 28
// }
// array.push(tempObj4)


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 2, 1, 4, 3, 6, 7];
// unique Element
//more then frequency

// Time Clock
function clock(){
const date = new Date();

let hours = date.getHours();
console.log(hours);

const min = date.getMinutes();
console.log(min);

const sec = date.getSeconds();
console.log(sec);

let meridian;
if (hours > 12) {
    meridian = "PM"
    hours -= 12;
}
else {
    meridian = "AM"
}



const hoursSlot = document.getElementsByClassName("hours")
hoursSlot[0].innerHTML = `${hours} :`;

const minsSlot = document.getElementsByClassName("mins")
minsSlot[0].innerHTML = `${min} :`;

const secsSlot = document.getElementsByClassName("secs")
secsSlot[0].innerHTML = sec;

const meridianSlot = document.getElementsByClassName("meridian")
meridianSlot[0].innerHTML = meridian;
}

setInterval(() => {
    clock();
}, 1000);

// console.log(clock())

// mouse and key events

// 1. mousedown - It is fired when mouse button is pressed down.
// 2. mouseup - It is fired when mouse button is released up.
// 3. click - It is when the mouse is clicked. Here mousedown, mouseup and click all the three events are
//          called in sequence
// 4. dblclick - It is fired when the mouse is double clicked rapidly. Here  mousedown, mouseup and click, mousedown,
//          mouse up,click , dblclick
// 5. mouseenter - It is fired when the mouse starts to hover over on some element.
// 6. mouseleave - It is fired when the mouse exits while hovering over some element.
// 7. mouseover - It is fired when the mouse is hovering over some element.
// 8. mouseout - It is fired when the mouse leaves from hovering over some element.
// 9. mousemove - It is fired when the mouse moves over some element.
// 10. contextmenu - It is fired when the mouse right button is clicked.

function output(e){
    console.log(e.type)
}

divTwo.addEventListener('mouseup',output);
divTwo.addEventListener('mousedown',output);
divTwo.addEventListener('click',output);
divTwo.addEventListener('dblclick',output);
divTwo.addEventListener('mouseenter',output);
divTwo.addEventListener('mouseleave',output);
divTwo.addEventListener('mouseover',output);
divTwo.addEventListener('mouseout',output);
divTwo.addEventListener('mousemove',output);
divTwo.addEventListener('contextmenu',output);


// keyup, keydown, keypress(trigged on clicked key )
const myText = document.getElementById('myInput')
myText.addEventListener('keydown', keyEvent);
myText.addEventListener('keyup', keyEvent);
myText.addEventListener('keypress', keyEvent);

function keyEvent(e){
    console.log(e.type + " " + e.code + " " + String.fromCharCode(e.keyCode));
}

// Js Engine



