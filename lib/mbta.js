'use strict'

const trainLines = {
  Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
}

// Create and object that holds all the T
const stopsBetweenStations = function (startLine, startStation, endLine, endStation){
  let startStop = trainLines[startLine].indexOf(startStation)
  let endStop = trainLines[endLine].indexOf(endStation)

  if (startLine === endLine) {
      // create var that stores the starting position of the train

  return (Math.abs(endStop - startStop))
  } else {
      // absolute value of start to Intersection + absolute of Intersection to endLine
  let startIntersection = trainLines[startLine].indexOf('Park Street')
  let endIntersection = trainLines[endLine].indexOf('Park Street')

  return (Math.abs(startStop - startIntersection) + Math.abs(endStop - endIntersection))
  }
}



stopsBetweenStations('Red', 'Porter', 'Green', 'Boylston')


module.exports = {
  stopsBetweenStations,
  stretch: false
}
