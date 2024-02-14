export class Spell {
  constructor (data) {
    this.index = data.index
    this.name = data.name
    this.urlEnding = data.url
  }
}

// const spellData = {
//   "index": "acid-arrow",
//   "name": "Acid Arrow",
//   "url": "/api/spells/acid-arrow"
// }