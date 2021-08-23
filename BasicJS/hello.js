/**
 * filename : hello.js
 * @description: print Hello world
 * Tanggal : 23 Agustus 2021
 */

console.log("Hello World");
console.error("This is an error"); // to show error text
console.warn("This is an Warn"); // to show warn texr

//VARIABELS
// let VariableName;    
// const VariabelName2; 

let firstName;
firstName="Michell";
console.log(firstName);

const lastName ="Tene";
console.log(lastName);

// DATA TYPES
//1.NUMBER
let salary = 10000000;
let average = 12.12;

console.log(average);
console.log(salary);
console.log(typeof average);
console.log(typeof salary); // To show type data of object

//2. STRING
console.log(typeof firstName);
console.log("😋" + firstName + ", " + lastName);
//ES6 - template/string literals
console.log(`😋, ${lastName}, ${firstName}`); //Another way to cocat/combine objek

//3. BOOLEAN
let isMarried = false;
console.log(isMarried);
console.log(typeof isMarried);

//4. NULL n UNDIFINED
let isGraduated = null;
console.log(isGraduated);
console.log(typeof isGraduated);

//5 SYMBOL
let nickname = Symbol('chell');
console.log(nickname);
console.log(typeof nickname);

//ARRAY TYPE
let grade = [80,90,85,75,12.5,"Michell"]; //array
console.log(grade);
console.log(typeof grade);

//OBJECT TYPE
const student ={
    nim : 105011910057,
    prodi: 'Sistem informasi',
    curicculum : '2018-2022'
}
 console.log(student);