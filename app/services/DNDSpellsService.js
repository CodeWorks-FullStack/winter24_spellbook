import { dndAPI } from "./AxiosService.js"

class DNDSpellsService {
  async getDNDSpells() {
    const response = await dndAPI.get('api/spells')

    console.log('📡 Got spells from DND API', response.data);
  }

}

export const dndSpellsService = new DNDSpellsService()