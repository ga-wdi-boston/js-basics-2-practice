'use strict'

// Code here.

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

}

//-   The Red line has the following stops: South Station, Park Street, Kendall,
//  Central, Harvard, Porter, Davis, Alewife
// -   The Green line has the following stops: Government Center, Park Street,
//  Boylston, Arlington, Copley, Hynes, Kenmore
// -   The Orange line has the following stops:  North Station, Haymarket,
// Park Street, State, Downtown Crossing, Chinatown, Back Bay, Forest Hills
// -   All 3 subway lines intersect at *Park Street*, but there are no other
//  intersection points. Some of this MBTA is fictionalized.

const subwayLines = {
  redLine: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  greenLine: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  orangeLine: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
}

if (startLine === endLine) {
  return Math.abs(endStation - startStation)
} else if (startLine !== endLine) {
  return Math.abs((endStation - 'Park Street') + ('Park Street' - startStation))
}
}
// Something needs to check if the startStation and endStation are on the same subway line

// If they are, count the stops between them

// If not, stop the starting trip at Park St, and switch to the new subway line
// Then count the remaining stops on that line
// Add the stops from the previous line to the stops on the current line to get the total








module.exports = {
  stopsBetweenStations,
  stretch: false
}
