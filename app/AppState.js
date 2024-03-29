import { DetailedSpell } from './models/DetailedSpell.js'
import { Spell } from './models/Spell.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null


  /**
   * @type {Spell[]}
   */
  dndSpells = []

  /**
   * @type {DetailedSpell | null}
   */
  activeDetailedSpell = null


  /**
   * @type {DetailedSpell[]}
   */
  loggedInUsersSpells = []

  showMySpells = false
}

export const AppState = createObservableProxy(new ObservableAppState())