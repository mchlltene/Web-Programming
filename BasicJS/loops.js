//1.WHILE
let i = 1;
while (i<= 10){
    console.log(i);
    i++;
}

// 2. do/while
let a=1;
do {
    console.log(a);
    a++;
} while (a<=10);

// 3. FOR
let u=1;
for(let u =1; u<=10; u++){
    console.log(u);
}

// 4. FOR/OF (ES6) - array
//for/of
let data = [25,17,80,9,15,16];
let sum=0;

for(let element of data ){
    sum+= element; 
}
console.log(sum);

//5. for/in (bisanya untuk objek)
const student = {
    nim: 105011910057,
    regNo:'S21910323',
    firstName: 'Michell',
    lastName : 'Tene'
};

for (let prop in student){
    console.log(`${prop} : ${student[prop]}`)
}