'use strict'

// constant with subway paths and list 3 tracks with stop stations
// tested good on console (google) type mbtasubway get
// Object {redLine: Array[8], greenLine: Array[7], orangeLine: Array[8]}
//
const mbtaSubway = {
  redLine: [
    'South Station',
    'Park Street',
    'Kendall',
    'Central',
    'Harvard',
    'Porter',
    'Davis',
    'Alewife'
  ],
  greenLine: [
    'Government Center',
    'Park Street',
    'Boylston',
    'Arlington',
    'Copley',
    'Hynes',
    'Kenmore'
  ],
  orangeLine: [
    'North Station',
    'Haymarket',
    'Park Street',
    'State',
    'Downtown Crossing',
    'Chinatown',
    'Backbay',
    'Forest Hills'
  ]
}

// array1.indexOf(searchElement[, fromIndex])
// searchElement = the value of locate in array1
// fromIndex = array index tot which it starts the search.
//Math.abs() function returns the absoloute value of a number.


const stopsBetweenStations = function (startLine, startStation,
  endLine, endStation){
  let startSubway = mbtaSubway[startLine].indexOf(startStation)
  let endSubway = mbtaSubway[endLine].indexOf(endStation)
  if (startLine === endLine) {
    return (Math.abs(endSubway - startSubway))
  } else if (startLine !== endLine) {
  let startIntersection = mbtaSubway[startLine].indexOf('Park Street')
  let endIntersection = mbtaSubway[endLine].indexOf('Park Street')
  return (Math.abs((startSubway + startIntersection) - (endSubway + endIntersection)))
  }
}

// note: return Math.abs (end - start) needs to be (Math.abs(end-start))
// Need to really review with flash cards.  also calulations was wrong needed
// FIX Caluations - getting late can't add and '-' & '+' symbolls are on the walls
// its working tested in google
// got the right stops for both 1 trains to other trains


//not using this..dont even know where or how to start with this.
//const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {}


module.exports = {
  stopsBetweenStations,
  stretch: false
}
