const contentTarget = document.querySelector(".witnessListButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showWitness") {
        const customEvent = new CustomEvent("showWitnessesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowWitnessButton = () => {
    contentTarget.innerHTML = "<button id='showWitness'>Show Witnesses</button>"
}