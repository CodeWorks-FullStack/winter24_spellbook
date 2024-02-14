import { dndSpellsService } from "../services/DNDSpellsService.js";
import { Pop } from "../utils/Pop.js"

export class DNDSpellsController {
  constructor () {
    this.getDNDSpells()
  }
  async getDNDSpells() {
    try {
      await dndSpellsService.getDNDSpells()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
}