import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { useCriminals } from "../criminals/CriminalProvider.js";
// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList")
    // Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", () => {
    NoteList()
})
eventHub.addEventListener("noteStateChanged", () => {
    NoteList()
})

const render = (noteArray, criminals) => {
        // convert the notes objects to HTML with NoteHTMLConverter
        //map takes a function
        const allNotesConvertedToStrings = noteArray.map((note) => {

            const associatedCriminal = criminals.find(
                (criminal) => {
                    return criminal.id === note.criminalId
                }
            )
            note.criminalName = associatedCriminal.name

            return NoteHTMLConverter(note, associatedCriminal)
        }).join("")

        contentTarget.innerHTML = allNotesConvertedToStrings
    } // an array is always the result of a map function

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    let criminals = useCriminals()
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes, criminals)
        })
}