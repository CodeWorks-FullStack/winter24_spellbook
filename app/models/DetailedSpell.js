export class DetailedSpell {
  constructor (data) {
    this.index = data.index
    this.name = data.name
    this.url = data.url
    // FIXME this might look weird
    this.description = data.desc
    this.range = data.range
    this.components = data.components
    this.material = data.material || ''
    this.ritual = data.ritual
    this.duration = data.duration
    this.concentration = data.concentration
    this.castingTime = data.casting_time
    this.level = data.level
  }

  get DetailsCardHTMLTemplate() {
    return `
    <div class="card p-4">
      <h2>${this.name}</h2>
      <h3>LEVEL ${this.level}</h3>
      <h4>
        RANGE: ${this.range}
        ${this.RitualSpan}
        ${this.ConcentrationSpan}
        DURATION ${this.duration}
      </h4>
      <h5>
        ${this.MaterialSpan}
        CASTING TIME ${this.castingTime}
      </h5>
      <p>${this.description}</p>
    </div>
    `
  }

  get RitualSpan() {
    if (!this.ritual) {
      return ''
    }

    return '<span>RITUAL</span>'
  }
  get ConcentrationSpan() {
    if (!this.concentration) {
      return ''
    }

    return '<span>CONCENTRATION</span>'
  }
  get MaterialSpan() {
    if (!this.material) {
      return ''
    }

    return `<span>MATERIAL ${this.material}</span>`
  }
}

// let spellData = {
//   "index": "conjure-woodland-beings",
//   "name": "Conjure Woodland Beings",
//   "desc": [
//     "You summon fey creatures that appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears:",
//     "- One fey creature of challenge rating 2 or lower",
//     "- Two fey creatures of challenge rating 1 or lower",
//     "- Four fey creatures of challenge rating 1/2 or lower",
//     "- Eight fey creatures of challenge rating 1/4 or lower",
//     "A summoned creature disappears when it drops to 0 hit points or when the spell ends.",
//     "The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which have their own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.",
//     "The GM has the creatures' statistics."
//   ],

//   "range": "60 feet",
//   "components": [
//     "V",
//     "S",
//     "M"
//   ],
//   "material": "One holly berry per creature summoned.",
//   "ritual": false,
//   "duration": "Up to 1 hour",

//   "concentration": true,

//   "casting_time": "1 action",
//   "level": 4,

//   "subclasses": [],
//   "url": "/api/spells/conjure-woodland-beings"
// }