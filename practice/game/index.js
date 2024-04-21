const data = [
    {title:"You are a Lion", img: "./images/lion.png"},
    {title:"You are a Bear", img: "./images/bear.png"},
    {title:"You are a Crocodile", img: "./images/crocodile.png"},
    {title:"You are a Fox", img: "./images/fox.png"},
    {title:"You are a Rhino", img: "./images/rhino.png"},
];

let main = document.getElementById("main");
let button = document.getElementsByTagName("button")[0];


let img = document.createElement("img");
let title = document.createElement("h1");

main.appendChild(img);
main.appendChild(title);

data.forEach(randomClick); // for getting all image at once...!!!

function randomClick(n) {
    
    let value = Math.random() * 5;
    let newValue = Math.floor(value);
    

    title.innerHTML = data[newValue].title;
    img.src = data[newValue].img;                    
   console.log(data[newValue].title)
}
