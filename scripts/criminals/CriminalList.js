import { getCriminals, useCriminals } from "./CriminalProvider.js"

import { Criminal } from "./criminal.js"

export const CriminalList = () => {
    getCriminals().then(
        () => {
            const usesCriminal = useCriminals()
            const contentElement = document.querySelector(".criminalsContainer")
            for (const criminal of usesCriminal) {
                const criminalHTML = Criminal(criminal)
                contentElement.innerHTML += criminalHTML
            }
        }
    )
}