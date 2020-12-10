export const Criminal = (criminalObj) => {
    return `
      <article class="criminal">
        <h2>${criminalObj.name}</h2>
        <div>Crime: ${criminalObj.conviction}</div>
        <div>Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
        <div>Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
        <button id="associates--${criminalObj.id}">Associate Alibis</button>
      </article>
    `
}

const eventHub = document.querySelector(".criminalsContainer")

eventHub.addEventListener("click", clickEvent => {
    const [splitId, indexOne] = clickEvent.target.id.split("--")

    if ("associates" === splitId) {
        const customEvent = new CustomEvent("showAlibiClicked", {
            detail: {
                criminalThatWasChosen: indexOne
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})