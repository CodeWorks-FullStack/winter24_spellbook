import { AppState } from "../AppState.js";
import { dndSpellsService } from "../services/DNDSpellsService.js";
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js";

function _drawSpellList() {
  const spells = AppState.dndSpells
  let htmlString = ''
  spells.forEach(spell => htmlString += spell.ListButtonHTMLTemplate)
  setHTML('dndSpellList', htmlString)
}

function _drawDetailedSpell() {
  setHTML('spellDetails', AppState.activeDetailedSpell.DetailsCardHTMLTemplate)
}

export class DNDSpellsController {
  constructor () {
    this.getDNDSpells()

    AppState.on('dndSpells', _drawSpellList)
    AppState.on('activeDetailedSpell', _drawDetailedSpell)
  }
  async getDNDSpells() {
    try {
      await dndSpellsService.getDNDSpells()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  async getSpellDetails(spellIndex) {
    try {
      console.log('getting spell details', spellIndex);
      await dndSpellsService.getSpellDetails(spellIndex)
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
}