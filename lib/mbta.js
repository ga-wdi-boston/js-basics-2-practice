'use strict'

// Code here.
//Crete the objecs and arrays
let mbta = {}

mbta.greenLine = ['Government Center', 'Park Street', 'Boylston', 'Arlington',
      'Copley', 'Hynes', 'Kenmore']
mbta.redLine = ['South Station', 'Park Street', 'Kendall', 'Central',
      'Harvard', 'Porter', 'Davis', 'Alewife']
mbta.orangeLine = ['North Station', 'Haymarket', 'Park Street', 'State',
      'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']

const stopsBetweenStations = function(startLine, endLine, startStation, endStation) {
  if(startLine === endLine){
    let beginingOfTrip = mbta[startLine].indexOf(startStation)
    let endOfTrip = mbta[endLine].indexOf(endStation)
    let numberOfStops = Math.abs(endOfTrip - beginingOfTrip)
    console.log('Number of stops ' + numberOfStops)
    return numberOfStops
  } else{
    let startToPark = Math.abs(mbta[startLine].indexOf(startStation) - mbta[startLine].indexOf('Park Street'))
    let parkToEnd =  Math.abs(mbta[startLine].indexOf('Park Street') - mbta[startLine].indexOf(endStation))
    let numberOfStops = startToPark + parkToEnd
    console.log('Start to Patk ' + startToPark)
    console.log('End to Park ' + parkToEnd)
    console.log('Number of stops ' + numberOfStops)
    return numberOfStops
  }
}
stopsBetweenStations('redLine','redLine' , 'Alewife' ,'South Station')
stopsBetweenStations('redLine','redLine' ,'South Station', 'Alewife' )
stopsBetweenStations('greenLine','redLine' , 'Government Center' ,'Alewife')

module.exports = {
  stopsBetweenStations,
  stretch: false
}
