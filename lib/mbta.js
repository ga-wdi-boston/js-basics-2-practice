'use strict'

// Code here.
// pseudo Code
// create an object with arrays for each of thew SubwayLines
const mbta = {
  const redLine = [
    'South Station',
    'Park Street',
    'Kendall',
    'Central',
    'Harvard',
    'Porter',
    'Davis',
    'Alewife'
  ]

  const greenLine = [
    'Government Center',
    'Park Street',
    'Boylston',
    'Arlington',
    'Copley',
    'Hynes',
    'Kenmore'
  ]

  const orangeLine = [
    'North Station',
    'Haymarket',
    'Park Street',
    'State',
    'Downtown Crossing',
    'Chinatown',
    'Back Bay',
    'Forest Hills'
  ]
}



// calculate the number of stops on one subWayLine
// if array[index] === 'Park Street' && startLine === endLine {
//  let startStationPosition = startLine.indexOf(startStation)
//  let stopStationPostion = stopLine.indexOf(stopStation)
// if startStationPosition > stopStationPostion {
//    startStationPosition - stopStaionPosition
//      } else {
//      stopStaionPosition - startStationPosition
//      }
//}


/*
const numberOfStopsOnLine = function (getOnStation, startLine, getOffStation, endLine {

      // Identify the index number within an array
      // arrayName + "." + indexOf + (" + value +")"
  const getOnIndexNumber = line.indexOf(getOnStation)
  const getOn = line[getOnIndexNumber]

  const getOffIndexNumber = line.indexOf(getOffStation)
  const getOff = line[getOffIndexNumber]

  if (getOn > getOff) {
    const numberOfStops = getOn - getOff
  } else {
    const numberOfStops = getOff - getOn
  }
  return numberOfStops
}
const numberOfStops = function (start, stop, line)  {
  for (let i = 0; i < line.length; i++) {
    if (line[i] === stop) {
      return i
    }
  }

  return 0
}
*/



// multiple
const stopsBetweenStations = function (startLine, startStation, endLine, endStation)  {
  let stops = 0
  if (startLine === endLine) {
    stops = stopsOnOneLine(startLine, startStation, endStation)
  } else {
      // Park Street is the common intercection
      // Park Street it the starting point of the second leg of the trip
    stops = stopsOnOneLine(startLine, startStation, 'Park Street') +
      stopsOnOneLine(endLine, endStation, 'Park Street')
  }

  return stops
}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
