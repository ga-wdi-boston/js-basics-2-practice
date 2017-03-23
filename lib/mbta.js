'use strict'

// Code here.

const subwayLine = {
red: [
'SouthStation',
'ParkStreet',
'Kendall',
'Central',
'Harvard',
'Porter',
'Davis',
'Alewife'
],
green: [
'GovermentCenter',
'ParkStreet',
'Boylston',
'Arlington',
'Copley',
'Hynes'
],
orange: [
'NorthStation',
'Haymarket',
'ParkStreet',
'State',
'DowntownCrossing',
'Chinatown',
'BackBay',
'ForestHills'
]
}
let stops = 0
let startNum = 0
let endNum = 0
let stopsToParkStart = 0
let stopsToParkEnd = 0

const startNumFunc = function (startStation, startLine) {
  for (let i = 0; i < subwayLine[startLine].length; i++) {
    if (startStation === subwayLine.startLine[i]) {
    startNum = i
    }
  }
}

const stopNumFunc = function (endStation, endLine) {
  for (let i = 0; i < subwayLine[endLine].length; i++) {
    if (endStation === subwayLine.endLine[i]) {
    endNum = i
    }
  }
}

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  startNumFunc (startStation, startLine)
  stopNumFunc (endStation, endLine)
  if (startLine === endLine) {
    stops = endNum - startNum
  } else {
    stopNumFunc ('ParkStreet', startLine)
    stopsToParkStart = endNum
    stopNumFunc ('ParkStreet', endLine)
    stopsToParkEnd = endNum
    stopNumFunc (endStation, endLine)
    stops = stopsToParkStart - startNum + endNum - stopsToParkEnd
}
return stops
}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
