import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"

class SandboxSpellsService {
  async createSpell() {
    const activeSpell = AppState.activeDetailedSpell

    const response = await api.post('api/spells', activeSpell)

    console.log('📡 created spell', response.data);
  }

}

export const sandboxSpellsService = new SandboxSpellsService()