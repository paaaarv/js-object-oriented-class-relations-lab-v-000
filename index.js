let driverId = 0
let store = {drivers:[], passengers: []}
class Driver{
  constructor(name){
    this.name = name
    this.id = ++driverId
    store.push(this)
  }

}
