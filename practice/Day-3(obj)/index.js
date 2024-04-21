// // objects - Objects are collection of key and values pairs and also methods belonging to the objects.
// // objects don't preserve the order of insertion of key, value pairs.
// // objects keys are converted into string data type by default


// console.log(this);

// const student = {
//     fName : "Faizan",
//     lName : "Ansari",
//     age : 25,
//     isAdult: true,
//     showDetails: function(){
//         console.log(`Name of the student is ${this.fName} ${this.lName}`)
//     }
// }

// // function showDetails(){
//     // console.log()
// // }

// // two way's to update objects
// student.id = 15263;
// student["course"] = "BCA"

// delete student.isAdult;

// console.log(student);

// console.log(student.hasOwnProperty("fName"));

// // create function for object
// student.showAge = function(){
//     console.log(`age of the student is ${student.age}`)
// }

// student.showDetails()

// // this keyword - The behavior of "this" keyword depends where we are calling "this" keyword.
// // In global space it points to the window Object(Global Objects).
// // In object, this points to the parent object
// // In function this point to the Window Object(Global Object)
// // But using strict mode, now if we use this keyword inside the function, it will give us undefined instead
// // of Window Object(Global Object)

// const keys = Object.keys(student)
// console.log(key)

// const values = Object.values(student)
// console.log(values)

// for(const [key,value] of Object.entries(student)){
//     console.log(key,value);
// }

// // Function Constructor

function Employee(fName, lName, empCode, branch) {
    this.fName = fName;
    this.lName = lName;
    this.employeeId = empCode;
    this.branch = branch;
}

const faizan = new Employee("Faizan", "Ansari", 1, "IT")
const faisan = new Employee("Faisan", "Ansari", 2, "IT")
const faiz = new Employee("Faiz", "Ansari", 3, "IT")
Employee()
console.log(faizan)

console.log(faiz)


