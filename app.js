const create =document.querySelector('#create');
const contentbody=document.querySelector('#contentbody')
const text=document.querySelector('#text')
const deletebtn=document.querySelector('#deletebtn')
const notescard=document.querySelector('#notescard')
const deletecard=document.querySelector('#deletecard')


// events
create.addEventListener('click',()=>{
    const notes=document.createElement('textarea');
    notes.setAttribute("placeholder","Notes write here 'Double click on notes to delete notes'");
    notes.classList.add('active')
    text.appendChild(notes);
  
    notes.addEventListener('dblclick',()=>{
        console.log("notes deleted");
        confirm("do you want to really delete this note");
        text.removeChild(notes)
        
    })
    
})

    
