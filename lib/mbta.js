'use strict'

// Code here.
const subway = {
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

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  let numberOfStops = 0
  const sLine = subway[startLine]
  const eLine = subway[endLine]
  if (startLine === endLine) {
    // Easy case where start and stop station are on the same lines'

    // find the index of the startStation in the line
    // find the index of the endStation in the line
    // subtract
    // -4 = 0 - 4

    const stops = sLine.indexOf(startStation) - eLine.indexOf(endStation)
    // Math.abs(-4) is always 4
    numberOfStops = Math.abs(stops)
  } else {
    // Hard case where start and stop stations are on different lines.
    let stops1 = sLine.indexOf(startStation) - sLine.indexOf('Park Street')
    stops1 = Math.abs(stops1)  // always positive number of stops

    let stops2 = eLine.indexOf(endStation) - eLine.indexOf('Park Street')
    stops2 = Math.abs(stops2)

    numberOfStops = stops1 + stops2
  }
  return numberOfStops
}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
/* I did this with the help of professional developer and I feel that
with the time spent on these topics this was so far off base from
the material taught that I did'nt know where to begin,  We had to use
Math.abs and indexOf multiple times to complete the tests and it has never
 even been shown or hinted at, the tests themselves were so advanced that
without the help of my friend I could barely read and comprehend */
