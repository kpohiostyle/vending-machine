import { ProxyState } from '../AppState.js'
import { vendingService } from '../Services/VendingService.js'

function _draw() {
  let item = ProxyState.item
  document.getElementById('machine').innerHTML = `<div class="card">
      <img class="card-img-top" src="" alt="" style="width: 50vw">
      <div class="card-body">
        <h4 class="card-title">${ProxyState.name}</h4>
        <p class="card-text">Money: ${ProxyState.cost}</p>
      </div>
    </div>`
}
// {/* <p class="card-text">Money: ${quarter.amount}</p> */}


export default class VendingController {
  constructor() {
    ProxyState.on('money', _draw)
    _draw()
  }


  addCoin() {
    vendingService.addCoin()
  }
  buyItem(type) {
    vendingService.buyItem()
  }
}