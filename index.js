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
    return store.trips.filter(trip => {
      if(trip.passengerId === this.id){
        return trip.driver()
      }
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
  driver(){
    return store.drivers.find(function(driver){
      return driver.id === this.driverId
    })
  }
  passenger(){
    return store.passengers.find(function(passenger){
      if (passenger.id === this.passengerId){
        return passenger
      }
    })
  }
}
