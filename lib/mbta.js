'use strict'

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

const stopAt = function (stop, lineColor) {
  for (let i = 0; i < lineColor.length; i++) {
    if (lineColor[i] === stop) {
      return i
    }
  }
}

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  if (startLine === endLine) {

  }

}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
