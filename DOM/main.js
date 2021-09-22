console.log(document);
console.log(document.URL) // URL document

//1.GET ELEMENT BY ID (hanya return 1 element) -> sifat uniq hanya diapkai 1x
let footer = document.getElementById('footer');
console.log(footer);

let main = document.getElementById("main");
console.log("main");

let header = document.getElementById('main-header');
console.log(header);

let form = document.getElementById('faculty-form');
console.log(form);

//2. GET ELEMNTs BY CLASS
let listFaculty = document.getElementsByClassName('list-item');
console.log(listFaculty);

for(faculty of listFaculty){
    console.log(faculty.textContent)
    // console.log(listFaculty[1]); // akses elemen 1 di dalam atribut klass
}


//3.GET ELEMNTS BY TAG NAEM (p,h,dll yg ptg tag html)
let heading2 = document.getElementsByTagName('h2');
console.log(heading2);

//4. QUERY SELECTOR (hanya return the first element)
let footer2 = document.querySelector('#footer');
console.log(footer2);

let listFaculty2 = document.querySelector('.list-item') // ambil brdsrkn class pakai titik dan hanya ambil elemetn pertama
console.log(listFaculty2)

 //5. QUERY SELECTOR ALL (ambil semua beda dengan query selector cima 1)
 let listFaculty3 = document.querySelectorAll('.list-item') // ambil brdsrkn class pakai titik dan hanya ambil elemetn pertama
 console.log(listFaculty3)

 //Atribute Selector
 let submit = document.querySelector('input[type="text"]');
 console.log(submit);

 //Pseudo Class Selector
 let firstName = document.querySelectorAll('list-item:first-child');
 console.log(firstItem)