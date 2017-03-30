'use strict'

const red = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife']
const green = ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore']
const orange = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']

let distance = 0
let distanceToPark = 0

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  if (startLine === endLine) {
    distance = Math.abs(startLine.indexOf(startStation) - endLine.indexOf(endStation))
    return distance
  } else {
    distanceToPark = Math.abs(endLine.indexOf(endStation) - endLine.indexOf('Park Street'))
    distance = Math.abs(startLine.indexOf(startStation) - startLine.indexOf('Park Street')) + distanceToPark
    return distance
  }
}

stopsBetweenStations(red, 'South Station', green, 'Hynes')
