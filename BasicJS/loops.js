//WHILE
let i = 1;
while (i<= 10){
    console.log(i);
    i++;
}

// do/while
let a=1;
do {
    console.log(a);
    a++;
} while (a<=10);

// FOR
let u=1;
for(let u =1; u<=10; u++){
    console.log(u);
}

// FOR/OF (ES6) - array
//for/of
let data = [25,17,80,9,15,16];
let sum=0;

for(let element of data ){
    sum+= element; 
}
console.log(sum);

//for/in
const student = {
    nim: 105011910057,
    regNo:'S21910323',
    firstName: 'Michell',
    lastName : 'Tene'
};

for (let prop in student){
    console.log(`${prop} : ${student[prop]}`)
}