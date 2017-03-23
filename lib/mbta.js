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
// fuck this shit - need to buckup and get my shit togethere! No xxxx on home!
// HOLY SHIT GOD LOVES ME
// array1.indexOf(searchElement[, fromIndex])
//array1 = required object = my fucking train
// searchElement = the value of locate in array1
// fromIndex = array index tot which it starts the search.
//Math.abs() function returns the absoloute value of a number.
//fate does love to smash my balls....wby does this code dont work!!!!

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

// WHY THE HELL THIS IS NOT WORKING!!!!....
// note: return Math.abs (end - start) needs to be (Math.abs(end-start))
// Need to really review with flash cards.  also calulations was wrong needed
// FIX Caluations - getting late can't add and '-' & '+' symbolls are on the walls
// when it should only be on my monitor.....
// its working tested in google
// got the right stops for both 1 trains to other trains
// WORKING OMG ITS WORKING!!! Hugs self! reflect on WAT moments....

//not using this..dont even know where or how to start with this.
//const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {}


module.exports = {
  stopsBetweenStations,
  stretch: false
}
