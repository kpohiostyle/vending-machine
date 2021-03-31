import { ProxyState } from "../AppState.js"

class buyItem {
    buyItem(type) {
        if (type == ProxyState.chips.name) {
            ProxyState.money -= ProxyState.chips.price
        } else if (type == ProxyState.candyBar.name) {
            ProxyState.money -= ProxyState.chips.price
        } else if (type == ProxyState.cookie.name) {
            ProxyState.money -= ProxyState.chips.price
        }
    }

}

class AddService {
    addCoin() {
        ProxyState.money += .25

        // ProxyState.quarter.amount += .25
        // ProxyState.quarter = ProxyState.quarter
    }
}
export const vendingService = (new AddService(), new buyItem())