function changeDir() {
    const column = document.getElementsByClassName('child')

    console.log(column)
    column[0].style.backgroundColor = "red"
    column[1].style.backgroundColor = "aqua"
    column[2].style.backgroundColor = "yellow"
    column[3].style.backgroundColor = "yellowgreen"
    column[4].style.backgroundColor = "teal"

    column[0].style.borderRadius = "10px"
    column[1].style.borderRadius = "10px"
    column[2].style.borderRadius = "10px"
    column[3].style.borderRadius = "10px"
    column[4].style.borderRadius = "10px"

    // column
    const column1 = document.getElementsByClassName('parent')

    column1[0].style.flexDirection = "column"

    const h1 = document.getElementsByTagName('h1')
    h1[0].innerText = "Row converted into Column"
}

function returnDir() {
    const column1 = document.getElementsByClassName('parent')

    column1[0].style.flexDirection = "row"

    const column = document.getElementsByClassName('child')
    column[0].style.borderRadius = "0px"
    column[1].style.borderRadius = "0px"
    column[2].style.borderRadius = "0px"
    column[3].style.borderRadius = "0px"
    column[4].style.borderRadius = "0px"

    const h1 = document.getElementsByTagName('h1')
    h1[0].innerText = "Column converted into Row"

}

function magic() {

    const h1 = document.getElementsByTagName('h1');
    h1[0].innerText = "OOPS! You have clicked the wrong button refresh the page."

    const column = document.getElementsByClassName('child');

    console.log(column)
    column[0].style.display = "none"
    column[1].style.display = "none"
    column[2].style.display = "none"
    column[3].style.display = "none"
    column[4].style.display = "none"

    const img = document.createElement('img');
    img.setAttribute("src", "./1.png");

    const targetElement = document.querySelectorAll(".parent");
    console.log(targetElement[0]);
    targetElement[0].appendChild(img);

    button.disable = true
}

// const button = document.getElementsByClassName('button')
// button[0].addEventListener('click', functionName); // events like mouseover and etc

// Unique Value

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 2, 1, 4, 3, 6, 7, 10];

let newArray = [];

for (let i = 0; i < arr.length; i++) {

    let count = 0;
    let x = arr[i]
    for (let j = 0; j < arr.length; j++) {

        if (arr[j] == x) {

            count++;
            arr[j] = 0;
        }
    }

    if (count > 1 && x !== 0) {
        newArray.push(x)
    }
}

console.log(newArray)