'use strict'

// Code here.

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  // Create subway object with the lines as keys & the stops as values (array)
  const allSubwayLines = {
    'Red': ['South Station', 'Park Street', 'Kendall', 'Central',
      'Harvard', 'Porter', 'Davis', 'Alewife'],
    'Green': ['Government Center', 'Park Street', 'Boylston',
      'Arlington', 'Copley', 'Hynes', 'Kenmore'],
    'Orange': ['North Station', 'Haymarket', 'Park Street', 'State',
      'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
  }
  // if the lines are the same - just calculate stops in between
  if (startLine === endLine) {
    const firstStop = allSubwayLines[startLine].indexOf(startStation)
    const secondStop = allSubwayLines[endLine].indexOf(endStation)
    const numberOfStops = Math.abs(firstStop - secondStop)
    return numberOfStops
  } else {
    // if lines are different, need # of stops from start to Park and
    // then from Park to final then add those together
    const firstLine = allSubwayLines[startLine].indexOf(startStation)
    const intersectionOne = allSubwayLines[startLine].indexOf('Park Street')
    const firstPart = Math.abs(firstLine - intersectionOne)
    const secondLineStart = allSubwayLines[endLine].indexOf('Park Street')
    const secondLineEnd = allSubwayLines[endLine].indexOf(endStation)
    const secondPart = Math.abs(secondLineStart - secondLineEnd)
    const finalNumber = firstPart + secondPart
    return finalNumber
  }
}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
