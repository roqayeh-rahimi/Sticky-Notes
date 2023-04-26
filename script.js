let addButtom = document.querySelector('.add-note')
let addNoteForm = document.querySelector('.overlay')
let board = document.querySelector('#board')
let done = document.querySelector('#done')
let close = document.querySelector('#close')
let noteList = document.querySelector('.note-list')
let  textarea = document.querySelector('textarea')

let childCount = noteList.childElementCount
let emptyError = document.createElement('div')

addButtom.addEventListener('click',addNote)

done.addEventListener('click',doneNote)
close.addEventListener('click',closeNote)

window.addEventListener('load',empty)

function empty(){
    if(!noteList.children.length){
        emptyError.innerText = 'your board is Empty!!!'
        emptyError.classList.add('emptyError')
        noteList.appendChild(emptyError)
    }
    else{
        emptyError.remove()
    }
}

function addNote(){
    addNoteForm.classList.remove("display-none")
    board.classList.add('disable')  
}

function doneNote(){

    let newNote = document.createElement('div')
    let textNote = document.createElement('p')
    let colors = ['#c0ed38','#ff59ee','#34b6ff','#01bd1e','#bf8b1b']
    
    if(textarea.value.length < 90  && !textarea.value == '' && textarea.value){
        
        
        newNote.classList.add('note')
        textNote.innerText = textarea.value
        textNote.style.wordBreak = 'break-all';
        
        newNote.style.background = colors[(childCount % 5)]
        
        noteList.appendChild(newNote)
        newNote.appendChild(textNote)
        
        empty()
        childCount = noteList.childElementCount    
    }

    console.log(childCount);
    textarea.value = ''
    closeNote()
}

function closeNote(){
    addNoteForm.classList.add("display-none")
    board.classList.remove('disable')  
}

