import { AppState } from "../AppState.js";
import { DetailedSpell } from "../models/DetailedSpell.js";
import { api } from "./AxiosService.js"

class SandboxSpellsService {

  setActiveSpell(spellId) {
    const foundSpell = AppState.loggedInUsersSpells.find(spell => spell.id == spellId)
    AppState.activeDetailedSpell = foundSpell
  }
  async getSpellsForLoggedInUser() {
    const response = await api.get('api/spells')

    console.log('📡 getting my spells', response.data);

    const newSpells = response.data.map(spellPOJO => new DetailedSpell(spellPOJO))

    AppState.loggedInUsersSpells = newSpells
  }
  async createSpell() {
    const activeSpell = AppState.activeDetailedSpell

    const response = await api.post('api/spells', activeSpell)

    console.log('📡 created spell', response.data);
  }

  async prepareSpell(spellId) {
    const foundSpell = AppState.loggedInUsersSpells.find(spell => spell.id == spellId)

    // console.log(foundSpell);

    // if (foundSpell.prepared == true){

    // }
    // else{

    // }

    const spellUpdateData = { prepared: !foundSpell.prepared }

    console.log(spellUpdateData);

    const response = await api.put(`api/spells/${spellId}`, spellUpdateData)

    console.log('📡 Updated spell', response.data);
    console.log('old object', foundSpell);



  }

}

export const sandboxSpellsService = new SandboxSpellsService()