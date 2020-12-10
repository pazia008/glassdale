//html converter
export const WitnessHTMLConverter = (witnessObj) => {
    return `
        <section class="witness">
            <div class="witness__name">Name: ${ witnessObj.name }</div>
            <div class="witness__statements">Statement: ${ witnessObj.statements }</div>
        </section>
    `
}