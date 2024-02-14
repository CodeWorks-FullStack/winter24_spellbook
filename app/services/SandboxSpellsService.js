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

}

export const sandboxSpellsService = new SandboxSpellsService()