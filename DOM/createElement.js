//CREATE NEW ELEMENT THROUGH DOM
const p = document.createElement('p');
pclassName = 'description';
p.id= ' form-description';

//insert text
let pText= document.createTextNode('Fill in the form (text Insert through DOM)');
p.appendChild(pText);

//insert to html
const main = document.querySelector('#main');
const form = document.querySelector('#faculty-form');
main.insertBefore(p,form);

console.log(p);

///
const p2 = document.createElement('p');
pclassName = 'description';
p2.id= ' Faclties-List';

const pText2 = document.createTextNode("Daftar Fakultas Universitas Klabat");
p2.appendChild(pText2);

const main2 = document.querySelector('#main');
const faculties = document.querySelector('#faculties');
main2.insertBefore(p2,faculties);