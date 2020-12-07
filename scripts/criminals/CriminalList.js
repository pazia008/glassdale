import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { getOfficers, useOfficers } from "../officers/OfficerProvider.js"

const criminalElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

const render = (criminals) => {
    let criminalCards = []
    for (const perp of criminals) {
        criminalCards.push(Criminal(perp))
    }

    criminalElement.innerHTML = criminalCards.join("")
}

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {

    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0") {
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        console.log('crime', event.detail);
        const crimes = useConvictions()
        const crime = crimes.find((crime) => crime.id === parseInt(event.detail.crimeThatWasChosen))

        const criminals = useCriminals()
        const matchingCriminals = criminals.filter((criminal) => criminal.conviction === crime.name)

        render(matchingCriminals)
    }
})

export const CriminalList = () => {
    getCriminals().then(() => {
        let perps = useCriminals()
        render(perps)
    })
}

eventHub.addEventListener("officerSelected", event => {
    if (event.detail.officerThatWasSelected !== "0") {
        const officerName = useOfficers()
        const arrestingOfficer = officerName.find((officer) => officer.id === parseInt(event.detail.officer))
        const criminals = useCriminals()
        const matchingOfficer = criminals.filter((criminal) => {
            return criminal.arrestingOfficer === arrestingOfficer.name
        })

        render(matchingOfficer)
    }
})