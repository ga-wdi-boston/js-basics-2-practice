'use strict'

// Code here.
const subwayLines = {
  Red: [
    'South Station',
    'Park Street',
    'Kendall',
    'Central',
    'Harvard',
    'Porter',
    'Davis',
    'Alewife'
  ],
  Green: [
    'Haymarket',
    'Government Center',
    'Park Street',
    'Boylston',
    'Arlington',
    'Copley',
    'Hynes',
    'Kenmore'
  ],
  Orange: [
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

const countStops = function (line, startStation, endStation) {
  // find indexes for stops in the array and subtract one from another
  let stops = line.indexOf(startStation) - line.indexOf(endStation)
  // if resulty is negative
  if (stops < 0) {
    // make it positive
    stops = -stops
  }
  return stops
}
const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  let stops = 0
  if (startLine === endLine) {
    // if only travelling on one line
    stops = countStops(subwayLines[startLine], startStation, endStation)
  } else if ((startStation === 'North Station' || startStation === 'Government Center') &&
  (endStation === 'North Station' || endStation === 'Government Center')) {
    // start and end stations are either North Station or Government Center,
    // it is faster to change lines at Haymarket.
    stops = countStops(subwayLines[startLine], startStation, 'Haymarket') +
    countStops(subwayLines[endLine], endStation, 'Haymarket')
  } else {
    // change lines at park street then continue to destination on new line
    stops = countStops(subwayLines[startLine], startStation, 'Park Street') +
    countStops(subwayLines[endLine], endStation, 'Park Street')
  }
  return stops
}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
