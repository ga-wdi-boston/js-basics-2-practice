'use strict'

let red = ['South Station','Park Street','Kendall','Central','Harvard','Porter','Davis','Alewife']
let green = ['Government Center','Park Street','Boylston','Arlington','Copley','Hynes','Kenmore']
let orange = ['North Station','Haymarket','Park Street','State','Downtown Crossing','Chinatown','Backbay','Forest Hills']

let mbta = {}

mbta.red = red
mbta.green = green
mbta.orange = orange

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  if(startLine === endLine){
    //return "this works"
    let startTrain = mbta[startLine].indexOf(startStation)
    let endTrain = mbta[endLine].indexOf(endStation)
    let totalStops = Math.abs(startTrain - endTrain)
    return totalStops
  }
  else{

    let indexOfPark = mbta[startLine].indexOf('Park Street')
    let indexOfFirstStop = mbta[startLine].indexOf(startStation)

    let firstStopToPark = Math.abs(indexOfFirstStop - indexOfPark)
    let indexOfFinalStop = mbta[endLine].indexOf(endStation)
    let parkToFinalStop = Math.abs(indexOfPark - indexOfFinalStop)

    let totalStops = firstStopToPark + parkToFinalStop

    return totalStops
  }
}

 module.exports = {
   stopsBetweenStations,
   stretch: false
}
