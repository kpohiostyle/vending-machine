import Chips from "./Models/Chips.js"
import Candybar from "./Models/candyBar.js"
import Cookie from "./Models/cookie.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  money = 0
  chips = new Chips("Sun Chips", 1.75)
  candyBar = new Candybar("Snickers", 1.25)
  cookie = new Cookie("Chocolate Chunk", 2.00)
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
