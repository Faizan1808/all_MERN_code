// Question -- 1

const parent={
    calc(){
        console.log(`${this.fName}`);
    },
    age(){
        console.log(`${this.age}`);
    }
}
let child = Object.create(parent);
child.fName = "sam";
child.calc()

// Question -- 2
let chaining={
    faiz:"not my name",
    age:23,
    career:"SE"
}

let firstChain = {
    name:"Sam",
    surname:"Jhon",

}
let secondChain = {
    iq:"150",
    apptitude:"nill"
}

firstChain.__proto__ = chaining
console.log(firstChain.age);

// Question -- 3

const addSum = {
    add : function(a){
        let sum = 0;
        for(let i = 0; i < a.length; i++){
            sum += a[i];
        }
        console.log(sum);
    }
}

addSum.add([50,55,19,60,58])
// Question -- 4
let animal={
    legs:4,
    moves:'fast',
    crawl:true
}

let obj1={
    pets:"dog,cat,birds",
    living:"in home with us",
    loyal:true
}

let obj2={
    func:function humans(){
        console.log("cruel");
    }
}
console.log(obj1.hasOwnProperty('pets'));