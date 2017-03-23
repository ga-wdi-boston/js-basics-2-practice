'use strict'

// Code here.

/* Red line - 8 stops:  South Station, Park Street, Kendall, Central, Harvard,
                        Porter, Davis, Alewife */
/* Green line - 7 stops:  Government Center, Park Street, Boylston, Arlington,
                          Copley, Hynes, Kenmore */
/* Orange line - 8 stops: North Station, Haymarket, Park Street, State,
                          Downtown Crossing, Chinatown, Back Bay, Forest Hills */
// All 3 intersect at Park Street

const subwayLines = {
  redLine: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  greenLine: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  orangeLine: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
}

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

  let stops = 0
  let intersection = 'Park Street'
  // define starting position
  let start = subwayLines[startLine].indexOf(startStation)
  //console.log('start ' +start)

  // define end position
  let end = subwayLines[endLine].indexOf(endStation)
  //console.log('end ' + end)

  // define start of intersection
  let startIntersection = subwayLines[startLine].indexOf(intersection)
  //console.log('startIntersection ' + startIntersection)

  // define end of intersection
  let endIntersection = subwayLines[endLine].indexOf(intersection)
  //console.log('endIntersection ' + endIntersection)

  // calculate total number of stops, converts any neg number to pos number
  let numberStops = Math.abs(start - startIntersection) + Math.abs(end - endIntersection)
  //console.log('number of stops ' + numberStops)
  return numberStops
}

//stopsBetweenStations('redLine', 'South Station', 'redLine', 'Alewife')
//stopsBetweenStations('redLine', 'Alewife', 'greenLine', 'Kenmore')

module.exports = {
  stopsBetweenStations,
  stretch: false
}
