// 1. SPREAD OPERATOR ... (ES2018)
// kita bisa dengan mudah menambahkan elemen di dalam array dengan spread operator
let a =[1,2,3];
let b = [...a, 7, 8, 9] // menggunakan spread operator (mengambil array a)

console.log(a);


//2. TERNARY OPERATOR
// condition ? trueValue : falseValue -> SYNTAX
let age = 15;
if (age > 18){
    console.log("Collage");
} else {
    console.log("High school Student")
}

//gunakan ternary agar singkat
const student = age > 18 ? "Collage" : "High School";
console.log(student);

//3. NULLISH COALESCING OPERATOR (??)
// leftOperand ?? rightOperand 
let username = 'null';
console.log("Your Username : " + username ?? 'Nama Anda'); // nilai null/undifine maka dia kemabilkan nilai sebelah kanan jika tidak sebelah kiri

//4. THROW
let x = a;
if (x < 0) throw new Error ('Can not input negative number');
console.log(x)

//5. try.catch/finally
try {
    myFunction();
}
catch (error){
    console.log(error.name);
     console.log(error.massage);
     console.log(error.stack);
}
finally {
    console.log('DOne')
}
