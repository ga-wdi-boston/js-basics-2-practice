'use strict'

// Code here.

const mbta = {
  'Red Line': ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  'Orange Line': ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'],
  'Green Line': ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore']
}

const calcStops = (line, firstStation, secondStation) => {
  // stops are on the same line.  calculate difference between them
  let startPos = -1
  let endPos = -1
  for (let i = 0; i < mbta[line].length; i++) {
    // console.log(mbta[line][i])
    if (firstStation === mbta[line][i]) {
      startPos = i
    } else if (secondStation === mbta[line][i]) {
      endPos = i
    }
  }
  if (startPos === -1 || endPos === -1) {
    console.log('couldn\'t find one of the stations?')
    return -1
  }

  if (startPos > endPos) {
    console.log(startPos - endPos)
    return (startPos - endPos)
  } else {
    console.log(endPos - startPos)
    return (endPos - startPos)
  }
}

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  let numStops
  // If the stops are on the same lines, eezy peezy
  if (startLine === endLine) {
    numStops = calcStops(startLine, startStation, endStation)
    return numStops
  } else { // Okay the stops are not on the same lines.
    // They all intersect at Park Street - so calculate how far to Park
    // Street from each of the two stops
    const numStopsToParkLine1 = calcStops(startLine, startStation, 'Park Street')
    const numStopsToParkLine2 = calcStops(endLine, endStation, 'Park Street')
    console.log(numStopsToParkLine2 + numStopsToParkLine1)
    return (numStopsToParkLine2 + numStopsToParkLine1)
  }
}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
