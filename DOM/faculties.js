const form = document.querySelector('form');
const search = document.querySelector('#search');
const faculties = document.querySelector('#faculties');


form.addEventListener('submit', insertFaculty);
search.addEventListener('keyup', searchFaculty);
faculties.addEventListener('click', removeFaculty);


function insertFaculty(e) {
  e.preventDefault();

  // get user input
  let facultyName = document.querySelector('#faculty-name');
  let facultyAbbr = document.querySelector('#faculty-abbr');

  // create element li
  const li = document.createElement('li');
  li.className = 'list-item';

  const liText = document.createTextNode(`${facultyName.value} / ${facultyAbbr.value} | `);
  li.appendChild(liText);

  let deleteLink = document.createElement('a');
  deleteLink.className = 'delete';
  deleteLink.setAttribute('href', '#');
  deleteLink.appendChild(document.createTextNode('Delete'));

  li.appendChild(deleteLink);

  // add li element to the parent ul element
  const ul = document.querySelector('#faculties');
  ul.appendChild(li);

  facultyName.value = '';
  facultyAbbr.value = '';
}


function searchFaculty(event) {
  let searchText = event.target.value.toLowerCase();

  let listOfFaculties = [...document.querySelectorAll('li')];
  
  listOfFaculties.forEach((faculty) => {
    let facultyName = faculty.firstChild.textContent;

    if(facultyName.toLowerCase().indexOf(searchText) != -1) {
      faculty.style.display = 'block';
    } else {
      faculty.style.display = 'none';
    }
  });
}


function removeFaculty(event) {
  if(event.target.classList.contains('delete')) {
    const li = event.target.parentElement;
    faculties.removeChild(li);
  }
}