import { sandboxSpellsService } from "../services/SandboxSpellsService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxSpellsController {
  constructor () {
  }

  async saveSpell() {
    try {
      console.log('saving spell');
      await sandboxSpellsService.createSpell()
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }
}