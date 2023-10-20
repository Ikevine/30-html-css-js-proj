//get the data 
const notesContainer = document.querySelector(".notes-container");
const notesBox = document.querySelectorAll(".input-box");
const btn = document.querySelector(".btn");

//check if the is data in note before open
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
//need to store the data into the browser
function updateStorage (){
    localStorage.setItem("notes",notesContainer.innerHTML);
  }

btn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("button");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable" , "true");
    img.innerHTML = "hellow"
    img.className = "";
    notesContainer.appendChild(inputBox).appendChild(img);
})

//delete functionality

notesContainer.addEventListener("click" , (e)=>{
    if(e.target.tagName=== "BUTTON"){
        e.target.parentElement.remove();
        updateStorage();
    }
    //update data in p element we update the data in 
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.foreach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

