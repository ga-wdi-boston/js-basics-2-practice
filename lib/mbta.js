'use strict'

// Code here.

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  const subwayStation = {
    'Red Line': ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    'Green Line': ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
    'Orange Line': ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
  }
  const startLineStops = subwayStation[startLine].indexOf(startStation)
  const endLineStops = subwayStation[endLine].indexOf(endStation)
  const startLineToPark = subwayStation[startLine].indexOf('Park Street')
  const endLineToPark = subwayStation[endLine].indexOf('Park Street')

  console.log(startLineStops)
  console.log(startLineToPark)
  console.log(endLineStops)
  console.log(endLineToPark)

  const numOfStops = Math.abs(startLineStops - startLineToPark) + Math.abs(endLineToPark - endLineStops)
  console.log(numOfStops)
  return numOfStops
}

stopsBetweenStations('Red Line', 'South Station', 'Red Line', 'Alewife')

module.exports = {
  stopsBetweenStations,
  stretch: false
}
