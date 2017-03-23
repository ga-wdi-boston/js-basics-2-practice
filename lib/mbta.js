'use strict'

let Red = ['South Station','Park Street','Kendall','Central','Harvard','Porter','Davis','Alewife']
let Green = ['Government Center','Park Street','Boylston','Arlington','Copley','Hynes','Kenmore']
let Orange = ['North Station','Haymarket','Park Street','State','Downtown Crossing','Chinatown','Backbay','Forest Hills']

let mbta = {}
mbta.Red = Red
mbta.Green = Green
mbta.Orange = Orange

console.log(mbta)

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  if (startLine !== endLine){
    let startIndex = mbta[startLine].indexOf(startStation)
    let startParkIndex = mbta[startLine].indexOf('Park Street')
    let startStopCount = Math.abs(startIndex - startParkIndex)
    // console.log(startIndex)
    // console.log(startParkIndex)
    // console.log(startStopCount)

    let endIndex = mbta[endLine].indexOf(endStation)
    let endParkIndex = mbta[endLine].indexOf('Park Street')
    let endStopCount = Math.abs(endIndex - endParkIndex)
    // console.log(endIndex)
    // console.log(endParkIndex)
    // console.log(endStopCount)

    let numStops = startStopCount + endStopCount
    // console.log(numStops)
    return numStops

  }
  else if (startLine === endLine) {
    let startIndex = mbta[startLine].indexOf(startStation)
    let endIndex = mbta[endLine].indexOf(endStation)
    let numStops = Math.abs(startIndex - endIndex)
    // console.log(startIndex)
    // console.log(endIndex)
    // console.log(numStops)

    return numStops
  }
}


stopsBetweenStations('Red','Harvard','Green','Arlington')

module.exports = {
  stopsBetweenStations,
  stretch: false
}
