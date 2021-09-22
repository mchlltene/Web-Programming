//1. FUNCTION DECLARATION
function namaFungsi(name='Anonymose') {        //parameter passing
    console.log(`hello ${name}`)
    // return `hello ${name}`;
}
namaFungsi('Michel');   // yang akan dipanggil adalah yang di asigm

function add (num1,num2){
    return num1+num2;
}
console.log(add(5,9));


//2. FUNCTION EXPRESSION
let greeting = function(name){     //function bisa memiliki nama atau tidak(opt)
    return `HI, ${name}`;
}  

console.log(greeting("Gabriell"));

const fct = function factorial(number){
    if(number<=1){
        return 1;
    } else {
        return number*factorial(number-1);
}
}
console.log(fct(10));

//3. IIFE -. immedaite invoked function -> hanya 1x dipanggil
const squared = (function(number){
    return number*number
})(7);
console.log(squared);

//4. ARROW FUNCTION -> mempersingkat code SYNTAX (paramert) => statement;
function hello(name= 'anonymus'){
    return `hello ${name}`
}

// const hello = (name) => {
//     return `hello ${name}`
// }

const hello2 = (name) => {
    return `hello ${name}`
}

const hello3 = (name) => `hello ${name}`;  //hanya satu parameter

console.log(hello3('Tene'));

//REWRITE FUNCTION 
const add2 = (num3,num4) => num3+num4;
console.log(add2(1,4));

const fct2 = (num)=> {
    if(num<= 1){
        return 1;
    } else {
        return num*fct2(num-1);
    }
}
console.log(fct2(5));


console.log((num => num*num)(9));