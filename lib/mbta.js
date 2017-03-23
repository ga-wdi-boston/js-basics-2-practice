'use strict'

// Code here.

let redLine = ['South Station', 'Park Street','Kendall','Central','Harvard','Porter','Davis','Alewife']
let greenLine = ['Government Center','Park Street','Boylston','Arlington','Copley','Hynes','Kenmore']
let orangeLine = ['North Station','Haymarket','Park Street','State','Downtown Crossing','Chinatown','Back Bay','Forest Hills']

let lines = {
  'Red': redLine,
  'Green': greenLine,
  'Orange': orangeLine
}

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  if(startLine === endLine) {
    let distance = (lines[startLine].indexOf(startStation) - lines[endLine].indexOf(endStation))
    return Math.abs(distance)
  } else if ((lines[startLine].indexOf(startStation) - lines[startLine].indexOf('Park Street')) <= 0) {
    let firstLineStops = lines[startLine].indexOf(startStation) - lines[startLine].indexOf('Park Street')
    firstLineStops = Math.abs(firstLineStops)
    let secondLineStops = lines[endLine].indexOf('Park Street') - lines[endLine].indexOf(endStation)
    secondLineStops = Math.abs(secondLineStops)
    return firstLineStops + secondLineStops
  }

  }

module.exports = {
  stopsBetweenStations,
  stretch: false
}
