'use strict'

// Code here.
const mbtaSubway = {
  Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Backbay', 'Forest Hills']
}
let startIndex
let endIndex
let numberOfStops
let startParkIndex
let endParkIndex

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  startIndex = mbtaSubway[startLine].indexOf(startStation)
  endIndex = mbtaSubway[endLine].indexOf(endStation)
  if (startLine === endLine) {
    numberOfStops = Math.abs(startIndex - endIndex)
    return numberOfStops
  } else {
    startParkIndex = mbtaSubway[startLine].indexOf('Park Street')
    endParkIndex = mbtaSubway[endLine].indexOf('Park Street')
    numberOfStops = Math.abs(startIndex - startParkIndex) + Math.abs(endIndex - endParkIndex)
    return numberOfStops
  }
}

// const stopsBetweenStations = (startLine, startStation, endLine, endStation) =>{

stopsBetweenStations('Red', 'Harvard', 'Orange', 'Backbay')

module.exports = {
  stopsBetweenStations,
  stretch: false
}
