'use strict'

// Code here.

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  const mbta =
  {
  "Red": ["South Station", "Park Street", "Kendall", "Central", "Harvard",
  "Porter", "Davis", "Alewife"],

  "Green": ["Government Center", "Park Street","Boylston", "Arlington",
  "Copley", "Hynes", "Kenmore"],

  "Orange": ["North Station", "Haymarket", "Park Street", "State",
  "Downtown Crossing","Chinatown", "Back Bay", "Forest Hills"]
  }
  const intersection = 'Park Street'
  // let startLine = 'redLine'
  //let startStation = 'South Station'
  // let endLine = 'redLine'
  // let endStation = 'Park Street'
  let startIntersectionIndex
  let endIntersectionIndex
  let startStationIndex
  let endStationIndex

  let findIndex = function(trainLine,station) {
  // find the index for a station
    for (let i=0; i < mbta[trainLine].length; i++) {
      if (mbta[trainLine][i] === station) {
          return i
      }
    }
  }

  startStationIndex = findIndex(startLine,startStation)
  startIntersectionIndex = findIndex(startLine,intersection)
  endStationIndex = findIndex(endLine,endStation)
  endIntersectionIndex = findIndex(endLine,intersection)

  if (startLine === endLine) {
    return Math.abs(startStationIndex - endStationIndex)
  } else {
    return Math.abs(startStationIndex - startIntersectionIndex) +
    Math.abs(endIntersectionIndex - endStationIndex)
  }

}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
