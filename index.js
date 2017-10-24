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
    return store.trips.filter(trip =>{
      return trip.driverId === this.id
    })
  }
  passengers(){
    let newArr = []
    this.trips().forEach(function(trip){
      let passenger = trip.passenger()
      newArr.push(passenger)
    })
    return newArr
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
    let newArr= []
    this.trips().forEach(function(trip){
      let driver = trip.driver()
      newArr.push(driver)
    })
    return newArr
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
// methods for class Trip
  passenger(){
    return store.passengers.find(passenger =>{
      return passenger.id === this.passengerId
    })
  }

  driver(){
    return store.drivers.find(driver =>{
      return driver.id === this.driverId
    })
  }




}
