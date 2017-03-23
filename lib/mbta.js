'use strict'
const red = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife']
const green = ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore']
const orange = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
const mbta = { red, orange, green }
// Code here.
const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
// _________________INITIAL INPUT CHECKS _______________________________
// DATA SCRUB : Lower case the start and end line to reduce input errors
  startLine = startLine.toLowerCase()
  endLine = endLine.toLowerCase()

// DATA CHECK - STARTLINE : Check if StartLine entry is valid
  if (startLine !== 'red' && startLine !== 'green' && startLine !== 'orange') {
    return 'Please select a proper start line like red, green, or orange!'
  }
  // END DATA CHECK - STARTLINE

  // DATA CHECK - ENDLINE : Check if EndLine entry is valid
  if (endLine !== 'red' && endLine !== 'green' && endLine !== 'orange') {
    return 'Please select a proper end line like red, green, or orange!'
  }
    // END DATA CHECK - ENDLINE

    // DATA CHECK - START STATION : Check if station entry is valid
  if (mbta[startLine].indexOf(startStation) === -1) {
    return 'Please select a proper start station!'
  }
    // DATA CHECK - START STATION

    // DATA CHECK - END STATION : Check if station entry is valid
  if (mbta[endLine].indexOf(endStation) === -1) {
    return 'Please select a proper end station!'
  }
    // DATA CHECK - END STATION
   // ____________________ END OF DATA CHECK____________________

   // _______________ BEGIN CALCULATIONS ____________

  //  CALCULATE SAME LINE : Began Calculate if they are on the same line
  if (startLine === endLine) {
    //  If on same line compare the index of the stations and evaluate the distance
    let totalStops = mbta[startLine].indexOf(startStation) - mbta[startLine].indexOf(endStation)
    // If negative, then turn into positive distance
    if (totalStops < 0) {
      totalStops = totalStops * -1
    }  // Return the  number of stops from the same line
    return 'There were ' + totalStops + ' stops on the ' + startLine + ' line.'
// END OF SAME LINE Calc
  } else {
  // CALCULATE ON DIFFERENT LINES : Begin Cross Line Calculation
    // calculate Start line distance to Park Street
    let startLineStops = mbta[startLine].indexOf('Park Street') - mbta[startLine].indexOf(startStation)
    // If negative, then turn into positive distance
    if (startLineStops < 0) {
      startLineStops = startLineStops * -1
    }
    // calculate End line distance to Park Street
    let endLineStops = mbta[endLine].indexOf('Park Street') - mbta[endLine].indexOf(endStation)
    // If negative, then turn into positive distance
    if (endLineStops < 0) {
      endLineStops = endLineStops * -1
    }
    const totalStops = startLineStops + endLineStops
// Return Start Line Distance and End Line Distance together

    return 'There were ' + totalStops + ' stops. ' + startLineStops + ' on the starting ' + startLine + ' line. ' +
    endLineStops + ' on the ending ' + endLine + ' line. '
  }
  // END OF CALCULATION ON DIFFERENT LINES
  // _________ END OF CALCULATIONS ____________
}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
