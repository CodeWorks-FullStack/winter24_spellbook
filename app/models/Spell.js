
// NOTE a small model for our initial data that we display in a list
export class Spell {
  constructor (data) {
    this.index = data.index
    this.name = data.name
    this.urlEnding = data.url
  }

  get ListButtonHTMLTemplate() {
    return `
    <div class="mb-2">
      <button onclick="app.DNDSpellsController.getSpellDetails('${this.index}')" class="btn btn-info w-75">${this.name}</button>
    </div>
    `
  }
}

// const spellData = {
//   "index": "acid-arrow",
//   "name": "Acid Arrow",
//   "url": "/api/spells/acid-arrow"
// }
