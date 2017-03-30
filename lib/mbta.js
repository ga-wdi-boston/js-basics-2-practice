'use strict'
const subway = {
  Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
}
const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  let distance = 0
  let distanceToPark = 0
  const sLine = subway[startLine]
  const eLine = subway[endLine]
  if (startLine === endLine) {
    distance = Math.abs(sLine.indexOf(startStation) - eLine.indexOf(endStation))
    return distance
  } else {
    distanceToPark = Math.abs(eLine.indexOf(endStation) - eLine.indexOf('Park Street'))
    distance = Math.abs(sLine.indexOf(startStation) - sLine.indexOf('Park Street')) + distanceToPark
    return distance
  }
}
module.exports = {
  stopsBetweenStations,
  stretch: false
}
