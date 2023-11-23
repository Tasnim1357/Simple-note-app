
const addBtn = document.getElementById("add");

const notes= JSON.parse(localStorage.getItem("notes"));


if(notes){
    notes.forEach((note) => addNewNote(note));
}



addBtn.addEventListener("click", () => addNewNote());
function addNewNote(text=""){
    const note= document.createElement("div");
    note.classList.add("note");
    note.innerHTML= ` <div class="tools">
    <button class="edit"><i class="fa-regular fa-pen-to-square"></i></button>
    <button class="delete"><i class="fa-solid fa-trash"></i></button>
</div>
<div class="main ${text ? "": "h"}"></div>
<textarea class="${ text ? "h": ""}" ></textarea>`;




const editbtn=note.querySelector(".edit");
const deletebtn=note.querySelector(".delete");
const main=note.querySelector(".main");
const textarea=note.querySelector("textarea");


textarea.value=text;
main.innerHTML= marked(text);

deletebtn.addEventListener("click", () => {
    var result = confirm("Want to delete this note?");
    if (result) {
            note.remove();
    //Logic to delete the item
        }

localst();

});

editbtn.addEventListener("click",() => {

    
        main.classList.toggle("h");
        textarea.classList.toggle("h");
    //Logic to delete the item
   
        
       
    

});

textarea.addEventListener("input", (e) =>{
   
     const {value} = e.target;
     main.innerHTML=  marked(value);
     
    localst();
});




document.body.appendChild(note);



}

function localst(){
    const notesText= document.querySelectorAll('textarea');
    const notes= [];
    notesText.forEach((note) => notes.push(note.value));
    localStorage.setItem("notes", JSON.stringify(notes));
}