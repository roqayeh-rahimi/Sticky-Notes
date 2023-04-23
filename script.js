let addButtom = document.querySelector('.add-note')
let addNoteForm = document.querySelector('.overlay')
let bord = document.querySelector('#bord')
let done = document.querySelector('#done')
let close = document.querySelector('#close')
let noteList = document.querySelector('.note-list')
let  textarea = document.querySelector('textarea')


addButtom.addEventListener('click',addNote)

done.addEventListener('click',doneNote)
close.addEventListener('click',closeNote)

function addNote(){
    addNoteForm.classList.remove("display-none")
    bord.classList.add('disable')  
}

function doneNote(){

    let newNote = document.createElement('div')
    let textNote = document.createElement('p')
    let colors = ['#c0ed38','#ff59ee','#34b6ff','#01bd1e','#bf8b1b']

    if(textarea.value.length < 90  && !textarea.value == ''){
        newNote.classList.add('note')
        textNote.innerText = textarea.value
        textNote.style.wordBreak = 'break-all';
        
        let childCount = noteList.childElementCount 

        newNote.style.background = colors[(childCount % 5)]

        noteList.appendChild(newNote)
        newNote.appendChild(textNote)
    }    
    textarea.value = ''
    closeNote()
}

function closeNote(){
    addNoteForm.classList.add("display-none")
    bord.classList.remove('disable')  
}
