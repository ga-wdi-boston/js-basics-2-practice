'use strict'

// Code here.
const subwayLines = {
  redLine: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  greenLine: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  orangeLine: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
}

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  if (startLine === endLine) {
    return Math.abs(endLine.indexOf(endStation) - startLine.indexOf(startStation))
  } else {
    return Math.abs(startLine.indexOf(startStation) - startLine.indexOf('Park Street')) + Math.abs(endLine.indexOf('Park Street') - endLine.indexOf(endStation))
  }
}

// Bonus
// For bonus, do the same thing as in line 14, but with Haymarket instead of Park Street, and then compare them and take whichever one is smaller
// Consider using a new variable called "intersection" that could be either Park St or Haymarket

// Tests
// console.log(3, stopsBetweenStations(subwayLines.orangeLine, 'Downtown Crossing', subwayLines.orangeLine, 'Haymarket'))
// console.log(8, stopsBetweenStations(subwayLines.redLine, 'Harvard', subwayLines.greenLine, 'Kenmore'))
// console.log(6, stopsBetweenStations(subwayLines.redLine, 'Alewife', subwayLines.redLine, 'Park Street'))
// console.log(7, stopsBetweenStations(subwayLines.orangeLine, 'Forest Hills', subwayLines.orangeLine, 'North Station'))


// -----Here is how I thought about the problem and planned it out-----

// Something needs to check if the startStation and endStation are on the same subway line

// If they are, count the stops between them and return it

// If not, find the number of stops between startStation and Park St
// Then switch to the new subway line
// Then count the remaining stops on that line from Park St to endStation
// Add the stops from the previous line to the stops on the current line to get the total

// -----Info from README.md for reference-----
//
// -   The Red line has the following stops: South Station, Park Street, Kendall,
//   Central, Harvard, Porter, Davis, Alewife
//  -   The Green line has the following stops: Government Center, Park Street,
//   Boylston, Arlington, Copley, Hynes, Kenmore
//  -   The Orange line has the following stops:  North Station, Haymarket,
//  Park Street, State, Downtown Crossing, Chinatown, Back Bay, Forest Hills
//  -   All 3 subway lines intersect at *Park Street*, but there are no other
//   intersection points. Some of this MBTA is fictionalized.






module.exports = {
  stopsBetweenStations,
  stretch: false
}
