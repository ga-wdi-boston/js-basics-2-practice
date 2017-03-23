'use strict'

const red = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard',
  'Porter', 'Davis', 'Alewife']
const green = ['Government Center', 'Park Street', 'Boylston', 'Arlington',
  'Copley', 'Hynes', 'Kenmore']
const orange = ['North Station', 'Haymarket', 'Park Street', 'State',
  'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']

const stopsBetweenStations = function stopses (startLine, startStation, endLine, endStation) {
  if (startLine === endLine) {
    return Math.abs(startLine.indexOf(startStation) - endLine.indexOf(endStation))
  } else {
    return Math.abs(startLine.indexOf(startStation) -
    startLine.indexOf('Park Street')) +
    Math.abs(endLine.indexOf(endStation) - endLine.indexOf('Park Street'))
  }
}
stopsBetweenStations(red, 'South Station', green, 'Kenmore')

module.exports = {
  stopsBetweenStations,
  stretch: false
}
