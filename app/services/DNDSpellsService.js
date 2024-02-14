import { AppState } from "../AppState.js";
import { Spell } from "../models/Spell.js";
import { dndAPI } from "./AxiosService.js"

class DNDSpellsService {

  async getDNDSpells() {
    const response = await dndAPI.get('api/spells')

    console.log('📡 Got spells from DND API', response.data);

    const newSpells = response.data.results.map(spellPOJO => new Spell(spellPOJO))

    AppState.dndSpells = newSpells
  }

  async getSpellDetails(spellIndex) {
    const response = await dndAPI.get(`api/spells/${spellIndex}`)

    console.log('📡 getting spell details', response.data);
  }

}

export const dndSpellsService = new DNDSpellsService()