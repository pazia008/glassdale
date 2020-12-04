import { getConvictions, useConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    // Get all convictions from application state
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            console.log(convictions)
            render(convictions)
        })

}

const render = convictionsCollection => {
        contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                 convictionsCollection.map(
                    conviction => {
                        const convictionsListItem = conviction.name
                        return `<option>${convictionsListItem}</option>`
                    }
                )
            }
        </select>
    `
}