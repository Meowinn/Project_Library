const card_container = document.querySelector('.card_container');
const book_details = document.querySelector('.book_details');
const addBook = document.getElementById('addBook');
const form = document.querySelector('form');
const submit = document.getElementById('submit');
const input_fields = document.querySelectorAll('input');

const form_read = document.querySelector('#read');

const input_title = document.querySelector('#title');
const input_author = document.querySelector('#author');
const input_pages = document.querySelector('#pages');


let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    };

function addBookFunc() {
    event.preventDefault();
    myLibrary.push(new Book(title.value, author.value, pages.value, form_read.checked));
    render();
    console.log(myLibrary);
};

function render() {
    const allparentContainer = document.querySelectorAll('.parentContainer');
    allparentContainer.forEach(parentContainer => card_container.removeChild(parentContainer));

    for(i=0; i<myLibrary.length; i++) {
        createBook(myLibrary[i]);
    }
};

function createBook(item) {
    const parentContainer = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const readButtons = document.createElement('button');
    const notreadButtons = document.createElement('button');

    const closeButton = document.createElement('button');
    closeButton.setAttribute('id', 'closeButton');
    closeButton.innerText = "X";
    parentContainer.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item), 1);
        render();
        console.log(myLibrary);
    })

    parentContainer.classList.add('parentContainer');
    parentContainer.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('text');
    parentContainer.appendChild(titleDiv);



    authorDiv.textContent = item.author;
    authorDiv.classList.add('text');
    parentContainer.appendChild(authorDiv);

    pagesDiv.textContent = item.pages;
    pagesDiv.classList.add('text');
    parentContainer.appendChild(pagesDiv);

    readButtons.innerText = 'READ'; 
    readButtons.classList.add('readButtons');

    notreadButtons.innerText = 'NOT READ';
    notreadButtons.classList.add('notreadButtons');

    if(item.read == true) {
        parentContainer.appendChild(readButtons);
        }else {
        parentContainer.appendChild(notreadButtons);
        };
    
    readButtons.addEventListener('click', () => {
        readButtons.parentNode.replaceChild(notreadButtons, readButtons);
        item.read = false;
        });
    
    notreadButtons.addEventListener('click', () => {
        notreadButtons.parentNode.replaceChild(readButtons, notreadButtons);
        item.read = true;
        });

    card_container.appendChild(parentContainer);
};

addBook.addEventListener(`click`, ()=> {
    form.removeAttribute('id');
    
    for(const fields of input_fields) {
        fields.value = null;
    }
});

submit.addEventListener('click', ()=> {

    if(input_title.validity.valueMissing ) {
        input_title.setCustomValidity('Enter the title bitch');
    } else {
        input_title.setCustomValidity('');
    };

    if(input_author.validity.valueMissing) {
       input_author.setCustomValidity('Enter the books author'); 
    }else {
        input_author.setCustomValidity('');
    };

    if(input_pages.validity.valueMissing) {
        input_pages.setCustomValidity('Please enter a value bitch');
    }else {
        input_pages.setCustomValidity('');
        form.setAttribute('id', 'form_visible');
        addBookFunc();
    }
});

document.getElementById('close').addEventListener(`click`, () => {
    form.setAttribute('id', 'form_visible');
});












