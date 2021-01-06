import { saveNote } from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


const render = () => {
        const criminalsCollection = useCriminals()

        contentTarget.innerHTML = `
    <input type = "text" id="author" placeholder ="author name">
    <textarea id ="text" placeholder ="note text"></textarea>
     
   
    <select class="dropdown" id="suspect">
    <option value="0">Please select a suspect...</option>
    ${
        criminalsCollection.map((criminal) => `
          <option value=${criminal.id}>
            ${criminal.name}
          </option>
        `)
    }
    </select>

        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
getCriminals()
.then(()=> render())
        
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
        const criminalId = parseInt(document.querySelector("#suspect").value)
            // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            author: author,
            text: text,
            criminalId: criminalId,
            timestamp: Date.now()
        }

        // Change API state and application state
        saveNote(newNote)
    }
})