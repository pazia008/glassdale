export const AlibiHTMLConverter = (alibiObj) => {
    return `
      <div class="associate">
        <div class="associate__name">Name: ${alibiObj.name}</div>
        <div class="associate__alibi">Albi: ${alibiObj.alibi}</div>
      </div>
    `
}