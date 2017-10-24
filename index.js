let driverId = 0
let passengerId = 0
let tripId = 0
let store = {drivers:[], passengers: [], trips: []}
class Driver{
  constructor(name){
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(trip => {
      return trip.userId === this.id
    })
  }
}

class Passenger{
    constructor(name){
      this.name = name
      this.id = ++passengerId
      store.passengers.push(this)
    }
}

class Trip{
  constructor(driver,passenger){
    this.id = ++tripId
    store.trips.push(this)
    if (driver){
      this.driverId = driver.id
    }
    if (passenger){
      this.passengerId = passenger.id
    }
  }
  
}
