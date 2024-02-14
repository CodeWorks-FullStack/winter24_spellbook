import { AppState } from "../AppState.js";
import { sandboxSpellsService } from "../services/SandboxSpellsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawMySpells() {
  const mySpells = AppState.loggedInUsersSpells
  let htmlString = ''
  mySpells.forEach(spell => htmlString += spell.ListButtonHTMLTemplate)
  setHTML('mySpells', htmlString)
}

export class SandboxSpellsController {
  constructor () {
    // this.getSpellsForLoggedInUser()

    AppState.on('account', this.getSpellsForLoggedInUser)
    AppState.on('loggedInUsersSpells', _drawMySpells)
  }
  async saveSpell() {
    try {
      console.log('saving spell');
      await sandboxSpellsService.createSpell()
      Pop.success(`${AppState.activeDetailedSpell.name} has been saved!`)
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }
  async getSpellsForLoggedInUser() {
    try {
      await sandboxSpellsService.getSpellsForLoggedInUser()
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }

  setActiveSpell(spellId) {
    sandboxSpellsService.setActiveSpell(spellId)
  }

  async prepareSpell(spellId) {
    try {
      console.log('Preparing spell', spellId);
      await sandboxSpellsService.prepareSpell(spellId)
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }
}