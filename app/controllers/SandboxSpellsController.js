import { AppState } from "../AppState.js";
import { sandboxSpellsService } from "../services/SandboxSpellsService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxSpellsController {
  constructor () {
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
}