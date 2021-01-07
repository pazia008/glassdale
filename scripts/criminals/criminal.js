export const Criminal = (criminalObj, facilities) => {
        return `
      <article class="criminal">
        <h2>${criminalObj.name}</h2>
        <div>Crime: ${criminalObj.conviction}</div>
        <div>Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
        <div>Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
        <button id="associates--${criminalObj.id}">Associate Alibis</button>
        <div>
      <h2>Facilities</h2>
      <ul>
          ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
      </ul>
  </div>
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