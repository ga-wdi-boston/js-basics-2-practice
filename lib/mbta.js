'use strict'

// Code here.
const red = [
  'South Station',
  'Park Street',
  'Kendall',
  'Central',
  'Harvard',
  'Porter',
  'Davis',
  'Alewife'
]
const green = [
  'Government Center',
  'Park Street',
  'Boylston',
  'Arlington',
  'Copley',
  'Hynes',
  'Kenmore'
]
const orange = [
  'North Station',
  'Haymarket',
  'Park Street',
  'State',
  'Downtown Crossing',
  'Chinatown',
  'Back Bay',
  'Forest Hills'
]

let distance = 0
let distanceToPark = 0

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  if (startLine === endLine) {
    distance = startLine.indexOf(startStation) - endLine.indexOf(endStation)
    return Math.abs(distance)
  } else if (startLine !== endLine) {
    distanceToPark = endLine.indexOf(endStation) - endLine.indexOf('Park Street')
    distanceToPark = Math.abs(distanceToPark)
    distance = startLine.indexOf(startStation) - startLine.indexOf('Park Street')
    distance = Math.abs(distance)
    return distance - distanceToPark
  }
}

stopsBetweenStations('red', 'South Station', 'red', 'Alewife')

module.exports = {
  stopsBetweenStations,
  stretch: false
}
