import { useCriminals } from "../CriminalProvider.js"
import { AlibiHTMLConverter } from "./Alibi.js"


const contentTarget = document.querySelector(".associates")
const eventHub = document.querySelector(".criminalsContainer")

eventHub.addEventListener("showAlibiClicked", event => {
    if (event.detail.criminalThatWasChosen !== "0") {
        const criminals = useCriminals()
        const chosenCriminal = criminals.find((criminal) => criminal.id === parseInt(event.detail.criminalThatWasChosen))

        const associates = chosenCriminal.known_associates
        contentTarget.innerHTML = associates.map(associate => { return AlibiHTMLConverter(associate) }).join("")


    }
})

export const criminalList = () => {
    getCriminals().then(() => {
        let perps = useCriminals()
        render(perps)
    })
}