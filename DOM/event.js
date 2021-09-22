//EVENT Handling

//1.Click
// const btnTest = document.querySelector('#testButton');
// btnTest.addEventListener('click',myEvenHandler)
// function myEvenHandler(){
//     console.log(event.type)

//     const subTitile = document.querySelector('.sub-title')
//     subTitile.textContent = 'Tambah Fakultas Baru';
//     subTitile.style.color ='red';

//     console.log('Button Clicked')


// }

//2. Mouse Move

// const kotak = document.querySelector('#kotak');
// kotak.addEventListener('mousemove', myEventHandler);

// function myEventHandler(event) {
//   console.log(event.type);

//   const outputX = document.querySelector('#outputX');
//   const outputY = document.querySelector('#outputY');

//   outputX.textContent = `${event.offsetX}`;
//   outputY.textContent = `${event.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${event.offsetX}, ${event.offsetY}, 20)`;
// }

//3. Keyboard Events
//KEYUP
let input = document.querySelector('#input'); //ambl dari input
input.addEventListener('keyup', myEvenHandler)

function myEvenHandler(e){
    const kotak = document.querySelector('#kotak');
    kotak.innerHTML = `<p> ${e.target.value}<p>`;
}
