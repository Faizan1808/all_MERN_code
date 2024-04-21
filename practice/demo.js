/*
    Array : Collection of data (Homogenous or Heterogenous)
    [] : Array 
    Zero indexed : nth value is present in index n-1
    arr = [1][][][][5] 
    1D num array : Collection of numbers
    2D num array : Collection of 1D arrays 
    3D num array : Collection of 2D arrays 

    forEach() : Performs the specified action for each element in an array.
    map() : Performs the specified action for each element in an array, returns us a new array  
    filter() : Returns the elements of an array that meet the condition specified in a callback function.
    reduce() : Compress an entire array into a single value // reduce(callbackfunction,initialValue)
    slice() : create a sub-array from start index to (end-1) index
    splice() : remove & add elements into an array 
    removed elements are returned as a new Array 
    new elements will be added to the original array

    for removal : splice(position,count)
    for addition : splice(position,count,addon1,addon2,addon3,.....,addonN)
    A : 65
    a : 97
    0 : 48
    
    sort() : sorts the elements of the array as if every element is a string
    concat() : append either a value or contents of another array to the source array 
    join() : converts an array into a string , default elements are seperated by ','
    fill() : sets the elements of an array to the specified value 
    fill(value);
    fill(value,start,end) // ending index is exclusive
    push() : append value(s) onto the original array 
    pop() : removes the last element and returns it ,
    shift() : removes from the begining and return array of the removed elements 
    unshift() : insert at the begining and return the new legnth of the array 
    indexOf() : returns the index of the first occurence element specified , if not present : -1
    indexOf(value,startingIndex)
    lastIndexOf() : returns the index of the last occurence element specified , if not present : -1
    find() :  Returns the value of the first element in the array where predicate is true, and undefined otherwise.
    every() :  Determines whether all the members of an array satisfy the specified test.
    some() :  Determines whether atleast one member of an array satisfy the specified test.
    */
// const arr = [11,12,13,14,15,14,4,14,23]
// console.log(arr.some(callbackFunction))


// function callbackFunction(element)
// {
//     if(element>=100)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }



function Heading(){
    const h1 = document.getElementsByTagName('h1')
    h1[0].innerText = "MERN STACK"
}

function Clock(){
    let time = new Date()

    hours = time.getHours()
    mins = time.getMinutes()
    secs = time.getSeconds()

    console.log(hours)
    console.log(mins)
    console.log(secs)
}

// setInterval(() =>{
//     Clock()
// }, 1000)
