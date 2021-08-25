// literall object
const student = {
    nim :105011910,
    regNo: 'S2193892',
    faculty: 'Computer Science',
    firstName : 'MIchell',
    lastName : 'Tene',
    email : "tnee@gmail.com",
    address : {                      // objek di dalam objek
        city : 'Airmadidi',
        postCode : '82783',
        province : '0854774'
    },
    hobbies : ['membaca', 'belajar'] // array di dalam objek
};
console.log(student);
console.log(student.address.city);
console.log(student.hobbies[1]);