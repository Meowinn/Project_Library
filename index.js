const card_container = document.querySelector('.card_container');
const book_details = document.querySelector('.book_details');
const addBook = document.getElementById('addBook');
const form = document.querySelector('form');
const submit = document.getElementById('submit');
const input_fields = document.querySelectorAll('input');
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    /* this.info = function() {
        return console.log(title,author,pages,read);
    }*/
}
/*
Book.prototype.chapters = function() {
    console.log("16");
}
*/

function addBookToLibrary(item) {
    myLibrary.push(new Book(title.value, author.value, pages.value));

    const parentContainer = document.createElement('div');
    parentContainer.setAttribute('id', 'parentContainer')

    const closeButton = document.createElement('button');
    closeButton.setAttribute('id', 'closeButton');
    let closeText = document.createTextNode("X")
    closeButton.appendChild(closeText);
    parentContainer.appendChild(closeButton);

    let internalCheck = document.createElement('input');
    internalCheck.type = "checkbox";
    internalCheck.name = "read";

    let internalChecktext = document.createTextNode("Read");
    parentContainer.appendChild(internalChecktext);
    parentContainer.appendChild(internalCheck);
    
    internalCheck.addEventListener('click', function(){
        if (internalCheck.checked == true) {
            console.log("I am checked");
            myLibrary[0].read = "true";
        } else {myLibrary[0].read = "false"};
    });

    closeButton.addEventListener('click', function(){
        myLibrary.splice(myLibrary.indexOf(item),1);
        parentContainer.remove();
    });

    for (let data in myLibrary[myLibrary.length-1]){
        console.log(myLibrary[myLibrary.length-1]);
        const parentBook = document.createElement(`div`);
        parentBook.setAttribute('id', 'parentBook')
        parentBook.textContent = myLibrary[myLibrary.length-1][data];
        card_container.appendChild(parentContainer);
        parentContainer.appendChild(parentBook);
    };
}

addBook.addEventListener(`click`, ()=> {
    form.removeAttribute('id');
    
    for(const fields of input_fields) {
        fields.value = "";
    }
});

submit.addEventListener('click', ()=> {
    event.preventDefault();
    addBookToLibrary();
    form.setAttribute('id', 'form_visible');
    
});

document.getElementById('close').addEventListener(`click`, () => {
    form.setAttribute('id', 'form_visible');
});










