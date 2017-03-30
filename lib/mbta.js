'use strict'
const subway = {
  Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
}
const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  let distance = 0
  let distanceToPark = 0
  if (startLine === endLine) {
    distance = Math.abs(subway[startLine].indexOf(startStation) - subway[endLine].indexOf(endStation))
    return distance
  } else {
    distanceToPark = Math.abs(subway[endLine].indexOf(endStation) - subway[endLine].indexOf('Park Street'))
    distance = Math.abs(subway[startLine].indexOf(startStation) - subway[startLine].indexOf('Park Street')) + distanceToPark
    return distance
  }
}
module.exports = {
  stopsBetweenStations,
  stretch: false
}
