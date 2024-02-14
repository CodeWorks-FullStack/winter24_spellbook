import { AppState } from "../AppState.js";
import { DetailedSpell } from "../models/DetailedSpell.js";
import { api } from "./AxiosService.js"

class SandboxSpellsService {

  setActiveSpell(spellId) {
    // NOTE no need to call to API here, we have all of the necessary data in our AppState
    const foundSpell = AppState.loggedInUsersSpells.find(spell => spell.id == spellId)
    AppState.activeDetailedSpell = foundSpell
  }
  async getSpellsForLoggedInUser() {
    // NOTE we use the api axios instance here to talk to the codeworks sandbox api
    const response = await api.get('api/spells')

    console.log('📡 getting my spells', response.data);

    const newSpells = response.data.map(spellPOJO => new DetailedSpell(spellPOJO))

    AppState.loggedInUsersSpells = newSpells
  }
  async createSpell() {
    // NOTE the single spell stored in the AppState that want to send and store on the codeworks api
    const activeSpell = AppState.activeDetailedSpell

    // NOTE the active spell in the appstate becomes our request body
    const response = await api.post('api/spells', activeSpell)

    console.log('📡 created spell', response.data);

    // NOTE turn the pojo from the api into our class model
    const newSpell = new DetailedSpell(response.data)

    // NOTE store our newly created spell in the AppState
    AppState.loggedInUsersSpells.push(newSpell)
  }

  async prepareSpell(spellId) {
    // NOTE we use findIndex here for two reasons: we use that index to pull out our speel index, and use the same index for our splice after the network request
    const indexOfSpellToUpdate = AppState.loggedInUsersSpells.findIndex(spell => spell.id == spellId)

    // NOTE always a good check
    if (indexOfSpellToUpdate == -1) {
      throw new Error('find index failed')
    }

    // NOTE use the index variable to pull the spell we want to update out of the AppState
    const foundSpell = AppState.loggedInUsersSpells[indexOfSpellToUpdate]

    // NOTE create an object with the opposite boolean value of the spell from our AppState. This variable will be our request body. We only want to update the prepared value on our object, so that is the only thing included here
    const spellUpdateData = { prepared: !foundSpell.prepared }

    console.log(spellUpdateData);

    // NOTE with a put request, you specify which resource you want to update by including it's id in the request URL (1st argument)
    // NOTE with a put request, you also specify what you want to update on the specified resource by supplying an object for the request body (2nd argument)
    const response = await api.put(`api/spells/${spellId}`, spellUpdateData)

    // NOTE the response data from the API after the put request is the object stored in the datamase will of it's values updated
    console.log('📡 Updated spell', response.data);
    console.log('old object', foundSpell);

    // NOTE we turn the object returned from the API into our class model 
    const updatedSpell = new DetailedSpell(response.data)

    // NOTE we use the index from above to start splicing at the index of the old object in our appstate
    // NOTE splice can take in a third argument, which allows us to put a value in at the specified splicing index
    // NOTE start splicing at old index, remove old object, replace with updated object from API
    AppState.loggedInUsersSpells.splice(indexOfSpellToUpdate, 1, updatedSpell)


  }

}

export const sandboxSpellsService = new SandboxSpellsService()