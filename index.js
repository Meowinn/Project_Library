const card_container = document.querySelector('.card_container');
const book_details = document.querySelector('.book_details');
const addBook = document.getElementById('addBook');
const form = document.querySelector('form');
const submit = document.getElementById('submit');
const input_fields = document.querySelectorAll('input');

const form_read = document.querySelector('#read');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    };

function addBookToLibrary(item) {
    myLibrary.push(new Book(title.value, author.value, pages.value, form_read.checked));

    const parentContainer = document.createElement('div');
    parentContainer.setAttribute('id', 'parentContainer')

    const closeButton = document.createElement('button');
    closeButton.setAttribute('id', 'closeButton');
    let closeText = document.createTextNode("X")
    closeButton.appendChild(closeText);
    parentContainer.appendChild(closeButton);

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

    let status = document.querySelectorAll('#parentBook:nth-child(5)');
    for (const readStatus of status){
        readStatus.style.display = 'none';
    }

    let readButtons = document.createElement('button');
    let readText = document.createTextNode('READ');
    readButtons.classList.add('readButtons');
    let readButtons2 = document.createElement('button');
    let readText2 = document.createTextNode('NOT READ');
    readButtons2.classList.add('readButtons2')

    if(form_read.checked == true) {
        readButtons.appendChild(readText);
        parentContainer.appendChild(readButtons); 
         }else { 
        readButtons2.appendChild(readText2);
        parentContainer.appendChild(readButtons2); 
         }
    
    readButtons.addEventListener('click', function(){
            if(readText.nodeValue == "READ"){
                readText.nodeValue = "NOT READ";
                myLibrary[0].read = false;
                readButtons.classList.add('readButtons2');
            }else{
                readText.nodeValue = "READ"
                myLibrary[0].read = true;
                readButtons.classList.remove('readButtons2');
             };
        })

    readButtons2.addEventListener('click', function(){
            if(readText2.nodeValue == "NOT READ"){
                readText2.nodeValue = "READ";
                myLibrary[0].read = false;
                readButtons2.classList.remove('readButtons2');
                readButtons2.classList.add('readButtons');
            }else{
                readText2.nodeValue = "NOT READ"
                myLibrary[0].read = true;
                readButtons2.classList.remove('readButtons');
                readButtons2.classList.add('readButtons2');
             };
        })
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










