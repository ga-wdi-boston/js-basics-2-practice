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
let numberOfStartStops
let numberOfEndStops

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  if (startLine === endLine) {
    startIndex = mbtaSubway[startLine].indexOf(startStation)
    endIndex = mbtaSubway[endLine].indexOf(endStation)
    numberOfStops = Math.abs(startIndex - endIndex)
    return numberOfStops
  } else {
    startIndex = mbtaSubway[startLine].indexOf(startStation)
    startParkIndex = mbtaSubway[startLine].indexOf('Park Street')
    endIndex = mbtaSubway[endLine].indexOf(endStation)
    endParkIndex = mbtaSubway[startLine].indexOf('Park Street')
    numberOfStartStops = Math.abs(startIndex - startParkIndex)
    numberOfEndStops = Math.abs(endIndex - endParkIndex)
    numberOfStops = numberOfStartStops + numberOfEndStops
    return numberOfStops
  }
}

// const stopsBetweenStations = (startLine, startStation, endLine, endStation) =>{

stopsBetweenStations('Red', 'Harvard', 'Orange', 'Backbay')

module.exports = {
  stopsBetweenStations,
  stretch: false
}
