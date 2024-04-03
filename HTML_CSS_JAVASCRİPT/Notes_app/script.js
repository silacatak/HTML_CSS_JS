const  notesContainer = document.querySelector(".notes-container");
const createBtn  =document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");



function showNotes(){
   notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}


createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className= "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src ="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName === "p") {
        notes = document.querySelector(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key ==="Enter"){
        document.execCommand("insertLineBreak");
    }
})// paragraf içinde alt satıra geçmek için enter 'a basılır execCommand -> metin düzenleme işlevi

/* event.preventDefault();: Bu satır, olayın varsayılan davranışını engeller.
 Enter tuşuna basıldığında normalde bir yeni satır eklenir, ancak bu kodda bu davranışı engelliyoruz 
 çünkü execCommand ile zaten yeni satır ekliyoruz ve aynı zamanda varsayılan Enter davranışıyla birlikte
  ekstra bir satır eklemesini istemiyoruz.*/ 