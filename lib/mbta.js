'use strict'

const mbta = {
  'Red': ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard',
    'Porter', 'Davis', 'Alewife'],
  'Green': ['Government Center', 'Park Street', 'Boylston', 'Arlington',
    'Copley', 'Hynes', 'Kenmore'],
  'Orange': ['North Station', 'Haymarket', 'Park Street', 'State',
    'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
}

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  const start = mbta[startLine].indexOf(startStation)
  const startParkStreet = mbta[startLine].indexOf('Park Street')
  const stopsToPark = Math.abs(startParkStreet - start)
  const end = mbta[endLine].indexOf(endStation)
  const endParkStreet = mbta[endLine].indexOf('Park Street')
  const stopsFromPark = Math.abs(endParkStreet - end)
  return stopsToPark + stopsFromPark
}

// stopsBetweenStations('Green Line', 'Kenmore', 'Red Line', 'Central')

module.exports = {
  stopsBetweenStations,
  stretch: false
}
