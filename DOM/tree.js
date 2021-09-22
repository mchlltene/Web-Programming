//  ParentNOde (ParnatElement)
const hr = document.querySelector('hr');
console.log(hr.parentNode);

//children
const footer = document.querySelector('#footer');
console.log(footer.children[1]);

//First child
const faculties =document.querySelector('#faculties');
console.log(faculties.firstElementChild);

//Last ELment CHild
const faculties2 =document.querySelector('#faculties');
console.log(faculties2.lastElementChild);

//NextelemtSibling
const form = document.querySelector('form');
console.log(form.nextElementSibling);

//PreviousElemtsSiblings
console.log(form.previousElementSibling);
