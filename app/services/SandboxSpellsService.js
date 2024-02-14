import { AppState } from "../AppState.js";
import { DetailedSpell } from "../models/DetailedSpell.js";
import { api } from "./AxiosService.js"

class SandboxSpellsService {
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