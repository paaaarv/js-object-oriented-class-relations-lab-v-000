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
  passengers(){
    return store.passengers.filter(passenger => {
      return passenger.driverId === this.id
    })

  }
  trips(){ 
    return store.trips.filter(trip =>{
      return trip.driverId === this.id
    })
  }

}

class Passenger{
    constructor(name){
      this.name = name
      this.id = ++passengerId
      store.passengers.push(this)
    }
    trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }
  drivers(){
    return store.drivers.filter(driver => {
      return driver.passengerId === this.id
    })
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
