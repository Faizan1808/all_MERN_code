// Array is a collection of data
// Create an array along with the values
let arrayOne = [1, 2, 3, 4, 5, 6];
let arrayTwo = ["a", "b", "c", true, 25, false, "d"];

//create an empty array and assign the value as per their indexes

let arrayThree = [];

arrayThree[0] = "a";
arrayThree[1] = "b";
arrayThree[2] = "c";
arrayThree[3] = "d";
arrayThree[4] = "e";
arrayThree[5] = "f";

console.log(arrayThree.length)
// last index = (array's length - 1)

//Array consturctor with new keyword
let arrayFour = new Array(7, 6, 8, "Faizan", true)
console.log(arrayFour)

//Array Methods

// 1.Push() - Enters the element at the end of the last index of the array.
let myArray = [1, 2, 3, 4]

myArray.push(5);

console.log(myArray)


// 2.pop() - Removes only the element from the last index of the array.

myArray.pop();
console.log(myArray);

// 3.Shift() - Remove the element from the first index of the array.

myArray.shift()
console.log(myArray)

// 4. unshift - Adds the element at the first index of the array.

myArray.unshift(1)
console.log(myArray)

// 5. Include - Check if the value is in the array.

console.log(myArray.includes(1))

// 6. concat - Creates a new array with the concatenation/addition of the values of the two or more arrays.

let arr1 = [1,2,3];
let arr2 = [4,5,6];

console.log(arr1.concat(arr2))

// 7.slice - Slices out a piece of an array.

let arr3 = [1,2,3,4,5,6,7,8,9]
// console.log(arr3.slice(2,7)) // first value is inclusive

// 8.splice - It follows certain method of addition and removal of values from the array. Also it modifies the original array.
//It gives us a new array with deleted elements
arr3.splice(3,2,12,14)
console.log(arr3);

// 9. sort - It sorts the values by first converting them into string

let arr4 = [1,2,3,11,44];
console.log(arr4.sort())

let arr5 = [23,31,11,22,36,101,123]
// console.log(arr5.sort())
// 10.reverse()

console.log(arr5.sort().reverse())

// indexOf its only give the value present in the index 

// 11. Map - Map iterate through each of the elements of the array and perform's a certain operation on the items.
// The no of item in the original array is equal to the number of the items in the newly created array.
// Original array is not manipulated.

let arr6 = [1,2,3,4,5,6,7]

let resultArr = arr6.map(i => i *2);

console.log(resultArr)

// 12. filter - It use to filter the item with operators
//  The no of items in the original array which passes the condition is inserted in the newly created array
const filterArray = arr6.filter(item => item % 2 == 0);
console.log(filterArray);
console.log(arr6);

// 13.reduce - All the items are shrinked into a single o/p value

const reduceArray = arr6.reduce((acc,curr) => acc = acc + curr,0);

console.log(reduceArray);

// Strings
// negative index not work in strings 
const myString = "Faizan"
console.log(myString.charAt(2))
console.log(myString.concat());
console.log(myString.endsWith("n"))
console.log(myString.startsWith("n"))
console.log(myString.includes("ai"))
console.log(myString.indexOf(' f'));
console.log(myString.lastIndexOf('a'));
console.log(myString.length)

console.log(myString.replace("Faizan","Faisan"))// it creates a new array and the old array will b same

console.log(myString.search("f"))//0
console.log(myString.search(" f"))//-1

console.log(myString.substr(1,5))// first value is index and second value is no of characters

console.log(myString.substring(1,5)) // it support automatic reversal of the indexes position it first index is the larger then the second

console.log(myString.slice(1,5))

console.log(myString.split(""))

const randValue = "          my$uwdcuibdec$iunfiucnef$isdbnc"

console.log(randValue.trim())


// map - Maps are collection of data of key,value pairs. It preserves the order of the insertion of the item. It also preserves the data types of the keys.
// No duplicates entries allows in map
// const myMap = new Map([
//     ["apples", 200],
//     ["banana", 300],
//     ["cherry", 400]
// ])


const myMap = new Map();
myMap.set(true,2); 
myMap.set("apple",200); 
myMap.set("banana",300); 
console.log(myMap)

console.log(myMap.get(true))


console.log(myMap.has(200));

// myMap.delete(key)
// myMap.clear();

// loop for map

for(let keys of myMap.keys()){
    console.log(keys)
}

for(let values of myMap.values()){
    console.log(values)
}

for(let values of myMap.entries()){
    console.log(values)

}

// sets are  collection of unique values. It doesn't have keys. Each value can occur only once, not twice or more
// Sets can hold values of any data types.

// const mySet = new Set([1,2,3,4,5])


const mySet = new Set();

mySet.add(100);
mySet.add(20.15);
mySet.add("apple");
mySet.add(true);

console.log(mySet.has(100))



