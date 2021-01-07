import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js"
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js"
import { useCriminalFacilities, getCriminalFacilities } from "../facility/CriminalFacilityProvider.js"

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

let facilities = []
let crimFac = []
let criminals = []

export const CriminalList = () => {
    // Kick off the fetching of both collections of data
    getCriminals()
        .then(getFacilities)
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                facilities = useFacilities()
                crimFac = useCriminalFacilities()
                criminals = useCriminals()

                // Pass all three collections of data to render()
                render(criminals, facilities, crimFac)
            }
        )
}

const render = (criminalsToRender) => {
        // Step 1 - Iterate all criminals
        contentTarget.innerHTML = criminalsToRender.map(
            (criminalObject) => {
                // Step 2 - Filter all relationships to get only ones for this criminal
                const facilityRelationshipsForThisCriminal = crimFac.filter(cf => cf.criminalId === criminalObject.id)

                // Step 3 - Convert the relationships to facilities with map()
                const matchingFacilities = facilityRelationshipsForThisCriminal.map(cf => {
                    const matchingFacilityObject = facilities.find(facility => facility.id === cf.facilityId)
                    return matchingFacilityObject
                })

                // Must pass the matching facilities to the Criminal component
                return Criminal(criminalObject, matchingFacilities)
            }
        ).join("")
    }
    // const render = (criminals) => {
    //     let criminalCards = []
    //     for (const perp of criminals) {
    //         criminalCards.push(Criminal(perp))
    //     }

//     criminalElement.innerHTML = criminalCards.join("")
// }

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
        const criminalsToFilter = criminals.slice()
        const matchingCriminals = criminalsToFilter.filter((criminal) => criminal.conviction === crime.name)

        render(matchingCriminals)
    }
})

export const criminalList = () => {
    getCriminals().then(() => {
        let perps = useCriminals()
        render(perps)
    })
}

eventHub.addEventListener("officerSelected", event => {
    if (event.detail.officerThatWasSelected !== "0") {
        const officerName = useOfficers()
        const arrestingOfficer = officerName.find((officer) => officer.id === parseInt(event.detail.officer))
        const criminalsToFilter = criminals.slice()
        const matchingOfficer = criminalsToFilter.filter((criminal) => {
            return criminal.arrestingOfficer === arrestingOfficer.name
        })

        render(matchingOfficer)
    }
})