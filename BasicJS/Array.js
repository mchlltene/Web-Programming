// Array Literal
const faculties =[
    'Fakultas Filsafat', 
    "Fakultas Ilmu computer", 
    "Fakultas Keguruan",
    "Fakultas Keperawatan",
    "Fakultas Pertanian",
    "Nurse",
    "ASMIK",
    "PASCASARJANA"
];

console.log(faculties)
console.log(faculties[3]);  // akses index array ke 2
console.log(faculties.length);

//1. PUSH (add elemen in the last)
console.log(faculties.push("Fakulatas Teknik Sipil"));

//2. UNSHIFT() -> add element in the first element
console.log(faculties.unshift("Fakutlas Kedokteran"));

//3. POP () -> delete first elemtn
console.log(faculties.pop());

//4. UNSHIFT() -> delete last element
console.log(faculties.unshift());

//INDEXOF() -> Acces index by Vlaue
console.log(faculties.indexOf('Fakultas Ilmu Komputer'));



//### HIGH ORDER FUNCTION
console.log("HIGH ORDER FUNCTION");

//1. FOR EACH -> Mengambil/ mengkesekusi emelen dalam array
faculties.forEach(function(faculty) {
    console.log("This is Faculty " + faculty);
})

//2. MAP -> Create Copy Array
const students= [
    {
    nim :105011910,
    regNo: 'S2193891',
    faculty: 'Computer Science',
    prodi : 'Sistem Informasi',
    firstName : 'MIchell',
    lastName : 'Tene',
    email : "tnee@gmail.com",
    address : {                      // objek di dalam objek
        city : 'Airmadidi',
        postCode : '82783',
        province : '0854774'
    },
    hobbies : ['membaca', 'belajar'] 
    },
   {
        nim :105011910,
        regNo: 'S2193892',
        faculty: 'Computer Science',
        prodi : 'Informatika',
        firstName : 'Gree',
        lastName : 'aray',
        email : "tnee@gmail.com",
        address : {                      // objek di dalam objek
            city : 'Airmadidi',
            postCode : '82783',
            province : '0854774'
        },
        hobbies : ['membaca', 'belajar'] 
     },
    {
            nim :105011910,
            regNo: 'S2193893',
            faculty: 'Computer Science',
            prodi : 'Informatika',
            firstName : 'Andrea',
            lastName : 'Barak',
            email : "tnee@gmail.com",
            address : {                      // objek di dalam objek
                city : 'Airmadidi',
                postCode : '82783',
                province : '0854774'
            },
            hobbies : ['membaca', 'belajar'] 
     }
];

const prodis = students.map(function (element){
    return element.prodi;
})

prodis.push('Management');
console.log(prodis); // menambahkan prodi management.



//3. FILTER() -> memilih hasil yang sesuai dengna kondisi yang kita berikan

const names =students.filter(function(nama){ // FInd students firstName >4
    return nama.firstName.length>4;
}).forEach(function(stu){  //sambung dengan foreach untuk mengetahui student name
    console.log(stu.lastName.toUpperCase()); //upercase buat huruf besar
})


const jurusan = students.filter(function(element){ //Find students who taken SI
    return element.prodi.length>11;
})
console.log(jurusan);

// SORT -> mengurtkan
const grades = [80,50,59,45,90,75];
console.log(grades.sort(function (a,b){
    return a-b;
}))

// .sort(function(a,b){
//     return a-b;
// });