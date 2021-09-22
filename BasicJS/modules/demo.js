import {myPI,squared,Student} from './module1.js'

function calculateCircum(radius){
    return 2* myPI * radius;
}

console.log(calculateCircum(10) );
console.log(squared(8));


const stu1 = new Student('105011910057','Fakultas ILmu Komputer')
console.log(stu1.display());

// import * from './module1.js'