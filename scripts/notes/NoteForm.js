import { saveNote } from "./NoteDataProvider.js"
const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


const render = () => {
    contentTarget.innerHTML = `
    <input type = "text" id="author" placeholder ="author name">
    <textarea id ="text" placeholder ="note text"></textarea>
    <input type = "text" id="suspect" placeholder="suspect name">
    

        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
        render()
    }
    //add event listener for a click on the button 
    //gather data from the form
    //convert form data to an object
    //send data to be stored


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        const author = document.querySelector("#author").value
        const text = document.querySelector("#text").value
        const suspect = document.querySelector("#suspect").value
            // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            author: author,
            text: text,
            suspect: suspect,
            timestamp: Date.now()
        }

        // Change API state and application state
        saveNote(newNote)
    }
})