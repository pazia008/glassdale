//html converter

export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <div class="note__title">Suspect: ${ noteObject.criminalName }</div>
            <div class="note__text">${ noteObject.text }</div>
            <div class="note__author">Author: ${ noteObject.author }</div>
            <div class="note__timestamp">Timestamp: ${ new Date(noteObject.timestamp).toLocaleDateString('en-US')  }</div>
            <button id="deleteNote--${noteObject.id}">Delete</button>
        </section>
    `
}




//change how the note is saved
//change how note objects are represented
//modules being used = Note, NoteForm, NoteList, notes.json