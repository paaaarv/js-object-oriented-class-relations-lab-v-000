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
    if (driver){
      this.driverId = driver.id
    }
    if (passenger){
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }

  passenger(){
    return store.passengers.find(function(passenger){
      if (passenger.id === this.passengerId){
        return passenger
      }
    })
  }
}
