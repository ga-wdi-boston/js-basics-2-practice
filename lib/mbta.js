'use strict'

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

}

const redLine =
  ['South Station',
  'Park Street',
  'Kendall',
  'Central',
  'Harvard',
  'Porter',
  'Davis',
  'Alewife']

const greenLine =
  ['Government Center',
  'Park Street',
  'Boylston',
  'Arlington',
  'Copley',
  'Hynes',
  'Kenmore']

const orangeLine =
  ['North Station',
  'Haymarket',
  'Park Street',
  'State',
  'Downtown Crossing',
  'Chinatown',
  'Back Bay',
  'Forest Hills']

let mbtaDictionary = {}
  mbtaDictionary.redLine = redLine
  mbtaDictionary.greenLine = greenLine
  mbtaDictionary.orangeLine = orangeLine

let isSameLine = function(line1, line2) {
  if (line1 === line2) return true
  return false
}

let totalNumberOfMbtaStopsForTrip = function(startLine, startStop, endLine, endStop) {
  /*
  console.log('MBTA Start Line = ' + startLine)
  console.log('Start Stop = ' + startStop)
  console.log('MBTA End Line = ' + endLine)
  console.log('End Stop = ' + endStop)
  */

  //console.log('IS SAME LINE = ', isSameLine(startLine, endLine))

  let numberOfStopsTraveled = 0
  let startStopIndex = 0
  let endStopIndex = 0

  // Check for SAME start line and end line
  if (isSameLine(startLine, endLine)) {
    switch (startLine) {
      case 'Red':
        // Find index of starting and ending stops
        for (let  i = 0; i < mbtaDictionary.redLine.length; i++) {
          if (mbtaDictionary.redLine[i] === startStop) {
            startStopIndex = i
          }

          if (mbtaDictionary.redLine[i] === endStop) {
            endStopIndex = i
          }
        }
        //console.log('i = ' + i, '-- redLine[' + i + '] = ', mbtaDictionary.redLine[i])
        //console.log('StartStopIndex = ' + startStopIndex);
        //console.log('EndStopIndex = ' + endStopIndex);

        break;
      case 'Green':
        // Find index of starting and ending stops
        for (let  i = 0; i < mbtaDictionary.greenLine.length; i++) {
          if (mbtaDictionary.greenLine[i] === startStop) {
            startStopIndex = i
          }

          if (mbtaDictionary.greenLine[i] === endStop) {
            endStopIndex = i
          }
        }
        //console.log('i = ' + i, '-- greenLine[' + i + '] = ', mbtaDictionary.greenLine[i])
        //console.log('StartStopIndex = ' + startStopIndex);
        //console.log('EndStopIndex = ' + endStopIndex);

        break;
      case 'Orange':
        // Find index of starting and ending stops
        for (let  i = 0; i < mbtaDictionary.orangeLine.length; i++) {
          if (mbtaDictionary.orangeLine[i] === startStop) {
            startStopIndex = i
          }

          if (mbtaDictionary.orangeLine[i] === endStop) {
            endStopIndex = i
          }
        }
        //console.log('i = ' + i, '-- orangeLine[' + i + '] = ', mbtaDictionary.orangeLine[i])
        //console.log('StartStopIndex = ' + startStopIndex);
        //console.log('EndStopIndex = ' + endStopIndex);

      break;

      default:
        console.log("Incorrect stop")
      }
    }

    // Calculate number of stops traveled
    //numberOfStopsTraveled = Math.abs(endStopIndex, startStopIndex)
    numberOfStopsTraveled = endStopIndex - startStopIndex

    //console.log('Number of Stops Traveled = ' + numberOfStopsTraveled);

    console.log('TOTAL number of stops traveled between ('
        + startLine + ',' + startStop + ') and ('
        + endLine + ',' + endStop + ') = '
        + numberOfStopsTraveled + '\n')

    // Return Total Number of MBTA Stops for trip
    return totalNumberOfMbtaStopsForTrip

}

totalNumberOfMbtaStopsForTrip('Green', 'Arlington', 'Green', 'Kenmore')
totalNumberOfMbtaStopsForTrip('Red', 'Harvard', 'Red', 'Davis')
totalNumberOfMbtaStopsForTrip('Orange', 'North Station', 'Orange', 'Back Bay')

module.exports = {
  stopsBetweenStations,
  stretch: false
}
