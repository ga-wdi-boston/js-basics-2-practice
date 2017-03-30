'use strict'

// Goal: Calculate the number of stops between stations on the "MBTA".
// The function takes the line and stop that a rider is getting on at and the line and stop that a rider is getting off at and returns the total number of stops for the trip.

const redLineStops = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife']
const greenLineStops = ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore']
const orangeLineStops = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']

const mbta = {
  redLine: redLineStops,
  greenLine: greenLineStops,
  orangeLine: orangeLineStops
}

// console.log(mbta['redLine'][0]);

const stopsBetween = function (startLine, startStation, endLine, endStation) {
  if (startStation === endStation) {
    return 0
  } else if (startLine === endLine) {
    return (Math.abs((mbta[startLine].indexOf(startStation) - mbta[endLine].indexOf(endStation)))) - 1
  } else {
    return (Math.abs((mbta[startLine].indexOf(startStation) - mbta[startLine].indexOf('Park Street'))) + Math.abs((mbta[endLine].indexOf(endStation) - mbta[endLine].indexOf('Park Street')))) - 1
  }
}

// Testing: Calculate the number of stops BETWEEN stations
stopsBetween('redLine', 'Porter', 'redLine', 'Porter')
stopsBetween('orangeLine', 'North Station', 'greenLine', 'Kenmore')
stopsBetween('orangeLine', 'Haymarket', 'greenLine', 'Copley')
// console.log(redLineStops.indexOf("South Station"))
// console.log(mbta.redLine.indexOf("South Station"))

module.exports = {
  stopsBetweenStations,
  stretch: false
}
