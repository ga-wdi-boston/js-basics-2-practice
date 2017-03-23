'use strict'

// Code here.

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

}

module.exports = {
  stopsBetweenStations,
  stretch: false
}

// The subwayLines dictionary is created.  The lines are keys.  The stops are
//values within those arrays.
const subwayLines = {
  Red: ["South Station","Park Street","Kendall","Central","Harvard","Porter","Davis","Alewife"],
  Green: ["Government Center","Park Street","Boylston","Arlington","Copley","Hynes","Kenmore"],
  Orange: ["North Station","Haymarket","Park Street","State","Downtown Crossing","Chinatown","Back Bay","Forest Hills"],
}

const stopNumber = (stop, line) => {
  for (let i = 0; i < line.length; i++) {
    if (line[i] === stop) {
      return i
    }
  }

  return 0
}

//This determins the number of stops on a single line by subtracting
//end station from the start station.
const stopsOnOneLine = (line, start, end) => {
  const stops =
    stopNumber(start, subwayLines[line]) -
    stopNumber(end, subwayLines[line])

  return stops < 0 ? -stops : stops
}

//When there is only one line, the total number of stops equals stopsOneOneLine.
//However, when there is more than one line, the total for stopsOneOneLine
//is determined for each line and then added together to arrive at the
//grand total number of stops.
const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  let stops = 0
  if (startLine === endLine) {
    stops = stopsOnOneLine(startLine, startStation, endStation)
  } else {
    stops = stopsOnOneLine(startLine, startStation, 'Park Street') +
      stopsOnOneLine(endLine, endStation, 'Park Street')
  }

//This returns the number of stops.
  return stops
}
