'use strict'

// Code here.



module.exports = {
  stopsBetweenStations,
  stretch: false
}

const subwayLines = {
  Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes","Kenmore'],
  Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'],
}

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {

const subwayStart = subwayLines[startLine].indexOf(startStation)
const subwayEnd = subwayLines[endLine].indexOf(endStation)
const startIntersection = subwayLines[startLine].indexOf('Park Street')
const endIntersection = subwayLines[endLine].indexOf('Park Street')

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
return Math.abs(subwayStart - startIntersection) + Math.abs(subwayEnd - endIntersection)
}

let subwayStart = subwayLines[startLine].indexOf(startStation)
let subwayEnd = subwayLines[endLine].indexOf(endStation)
if (startLine === endLine) {
  return (Math.abs(subwayEnd - subwayStart))
} else if (startLine !== endLine) {
let startIntersection = mbtaSubway[startLine].indexOf('Park Street')
let endIntersection = mbtaSubway[endLine].indexOf('Park Street')
return (Math.abs((subwayStart + startIntersection) - (subwayEnd + endIntersection)))
},
}
