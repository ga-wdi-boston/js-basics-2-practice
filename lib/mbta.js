'use strict'

/*
Create a function in lib/mbta.js to calculate the number of stops between
stations on the "MBTA". Write additional functions used by this function
 as needed.
The function takes the line and stop that a rider is getting on at and the
line and stop that a rider is getting off at and returns the total number
of stops for the trip.
There are 3 subway lines:

The Red line has the following stops: South Station, Park Street, Kendall, Central, Harvard, Porter, Davis, Alewife
The Green line has the following stops: Government Center, Park Street, Boylston, Arlington, Copley, Hynes, Kenmore
The Orange line has the following stops: North Station, Haymarket, Park Street, State, Downtown Crossing, Chinatown, Back Bay, Forest Hills
All 3 subway lines intersect at Park Street, but there are no other intersection points. Some of this MBTA is fictionalized.
*/
// Code here. Practice


let startStation
let endStation
let endLine
let startLine

//creates arrays of each subway line
let red = ['South Station','Park Street','Kendall','Central','Harvard','Porter','Davis','Alewife']
let green = ['Government Center','Park Street','Boylston','Arlington','Copley','Hynes,Kenmore']
let orange = ['North Station','Haymarket','Park Street','State','Downtown Crossing','Chinatown','Backbay','Forest Hills']

//creates objects containing each line
let mbta = {}
mbta.red = red
mbta.green = green
mbta.orange = orange

console.log(mbta)

//get the stop number of the stop/start in relation to park to equate
let startIndex = mbta[startLine].indexOf(startStation)
let endIndex = mbta[startLine].indexOf(endStation)
let parkIndex = mbta[startLine].indexOf(parkStation)

console.log(startIndex)
console.log(endIndex)

mbta[startLine]

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
//creates simple equation if there are no intersections
  if (startLine === endLine){
    const numberOfStops = Math.abs(startLine[i]- endIndex[i])
}
//if user changes lines, we will find how many stops between Park each are
else if {
  const startParkIndex = Math.abs(startIndex - parkIndex)
  const endParkIndex = Math.abs(endIndex - parkIndex)

  const numberOfStops = Math.abs(startParkIndex - endParkIndex)
}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
