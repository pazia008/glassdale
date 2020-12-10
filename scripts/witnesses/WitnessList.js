import { getWitnesses, useWitnesses } from "./WitnessDataProvider.js";
import { WitnessHTMLConverter } from "./Witness.js";

const contentTarget = document.querySelector(".witnessList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showWitnessesClicked", () => {
    WitnessList()
})


const render = (witnessArray) => {
    const allWitnessesConvertedToStrings = witnessArray.map((witness) => WitnessHTMLConverter(witness)).join("")

    contentTarget.innerHTML = allWitnessesConvertedToStrings
}

export const WitnessList = () => {
    getWitnesses()
        .then(() => {
            const allWitnesses = useWitnesses()
            render(allWitnesses)
        })
}