'use strict'

// calc number of stops between stations
// takes line and stop user getting on and the line and stop getting off
// returns the total number of stops for the trip.

// list for each subway line
// subway lines are keys in a dictionary
// subway stops are values in an array

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
    'Forest Hills',
    'Back Bay',
    'Chinatown',
    'Downtown Crossing',
    'State',
    'Park Street',
    'Haymarket',
    'North Station'
  ]
}

// find intersection of each line at Park Street

// find the position in each array for park st
// let parkStreetStopRed = subwayLines.Red.indexOf('Park Street')
// let parkStreetStopGreen = subwayLines.Green.indexOf('Park Street')
// let parkStreetStopOrange = subwayLines.Orange.indexOf('Park Street')

// look at the position in the array for each line then do the math

const stopNumber = (stop, line) => {
  for (let i = 0; i < line.length; i++) {
    if (line[i] === stop) {
      return i
    }
  }

  return 0
}
// count stops by subtracting index of end stop from index of start stop
const stopsOnOneLine = (line, start, end) => {
  const stops =
    stopNumber(start, subwayLines[line]) -
    stopNumber(end, subwayLines[line])

  return stops < 0 ? -stops : stops
}

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
// declaring stops
  let stops = 0
  // if user got on and off the same subway line, run the stopsOnOneLine function
  if (startLine === endLine) {
    stops = stopsOnOneLine(startLine, startStation, endStation)
  // if user started and stopped on different lines, run stopsOnOneLine for both
  // sectors of the trip, counting stops to Park Street intersection.  Add counts.
  // if Haymarket is the end stop, calculate separately
  } else if (endStation === 'Haymarket') {
    stops = stopsOnOneLine(startLine, startStation, 'Haymarket') +
      stopsOnOneLine(endLine, endStation, 'Haymarket')
  } else {
    stops = stopsOnOneLine(startLine, startStation, 'Park Street') +
      stopsOnOneLine(endLine, endStation, 'Park Street')
  }
  return stops
}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
