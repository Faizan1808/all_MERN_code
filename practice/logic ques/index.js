// var n = 2;

// for (i=1; i<=10 ; i++ ){
//     table = (n + " x " + i + " = " + (i * n));
//     document.write(table + "<br>");
    
// }


// var x = 4;

// for(var i = 1; i <= 10 ; i++){
    
//     // table4 = (x + " x "+ i + " = " +(i * x));
//     document.getElementById("table").innerHTML = x + " x "+ i + " = " +(i * x);
//     // document.write(table4 + "<br>")
// }

// prime num

// var a = 11;
// var count = 0;

// for (var b = 2; b < a / 2 ; b++){
//    if(a % b == 0){
//     count++;
//    }
// };

// if(count < 1){
//     document.write("not prime")
// }
// else{
//     document.write("prime")
// }

// var c = 7;
// var count = 0;

// for(d = 2; d < c / 2; d++){
//     if(c % d == 0){
//         count++;
//     }
// };

// if(count < 1){
//     document.write(c +" is not a prime")
// }
// else{
//     document.write(c +" is  a prime")
    
// };

// find digit
// var N = 7895;

// var count = 0;

// if (N >= 1){
//     ++count;
// }
// while (N / 10 >= 1 ){
//     N /=10;
//     ++count;
// }

// console.log(count);

// var N = 1505896;
// var count = 0;

// if (N >= 1){
//     ++count;
// }
// while(N / 10 >= 1){
//     N /= 10;
//     ++count;
// }

// console.log(count);


// var x = 7;
// var count = 0;

// for (var i = 2; i < x / 2; i++){
//     if (i % x == 0){
//         count++;
//     }
// }

// if(count < 1){
//     console.log("no");
// }
// else{
//     console.log("yes");
// }
 
// var x = 2;
// const tableElement = document.getElementById("table");
// for (let i = 1; i <= 10 ; i++ ){
//     let sec = document.createElement( "div");
//     tableElement.appendChild(sec); 
//     let result = document.createElement("span");
//     sec.appendChild(result) ;
//     result.innerHTML = x + " x "+ i + " = " +(i * x);
// };

// let age = [1,2,3,4,5,6];

// for (let i = 0; i < 7 ; i++){
//     console.log(age[i])
// }


// let age = [10,20,55,60,87];

// let dis = [];

// for (let i = 0; i < 8; i++){
//     dis[i] = age[i] * 2;
// }

// for (let i = 0; i < 8; i++){
//     console.log(dis[i]);
// }


// nested loop

// var money = 100;

// var mood = "sweet"

// if (money >= 100){
//     if (mood == "sweet"){
//         console.log("lets take kitkat");
//     }
//     else{
//         console.log("lets take lays");
//     }
// }

// else{
//     console.log("go home")
// }


// prime number btw 1 to 100

for (let i = 1; i <= 100 ; i++){
    
    let count = 0;

    for (let j = 2; j < i; j++){

        if (i % j == 0){
            count = 1;
            break;
        }
    }

    if (i > 1 && count == 0){
        // console.log(i);

        let primeElement = document.getElementById("prime"); // connect js and html using id.
    
        let sec = document.createElement("div"); // create div using createElement.
        
        primeElement.appendChild(sec); // add id and div.

        let result = document.createElement("span"); // create span using createElement.
        
        sec.appendChild(result); // append result to sec.
    
        result.innerHTML = i; //innserHTML is used to show output in browser.
    }
}


for (let i = 1; i <= 100; i++){

    count = 0;

    for(let j = 2; j < i; j++){

        if (i % j == 0){

            count = 1;
            break;
        }
    }

    if (i > 1 && count == 0){
        console.log(i);
    }
}