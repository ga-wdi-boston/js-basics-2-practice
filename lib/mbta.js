'use strict'

let red = ['South Station','Park Street','Kendall','Central','Harvard','Porter','Davis','Alewife']
let green = ['Government Center','Park Street','Boylston','Arlington','Copley','Hynes,Kenmore']
let orange = ['North Station','Haymarket','Park Street','State','Downtown Crossing','Chinatown','Backbay','Forest Hills']

let mbta = {}

mbta.red = red
mbta.green = green
mbta.orange = orange

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  //count the number of stops between the that startStation and endStation
  //return the stops between stations

  if(startLine === endLine){
    let startTrain = mbta[startLine].indexOf(startStation)
    let endTrain = mbta[endLine].indexOf(endStation)
    let totalStops = math.abs(startTrain - endTrain)
    return totalStops
  }

  //count the number of stops on the current line to park Street
  //count the number of stops from park street on new line to final stop
  //return the total of stops from first line and new line
  else{
    let startTrain = mbta[startLine].indexOf('Park Street')
    let endTrain = mbta[endLine].indexOf('Park Street')
    let totalStops = startTrain + endTrain
  }

}

//call stopsBetweenStations

module.exports = {
  stopsBetweenStations,
  stretch: false
}
