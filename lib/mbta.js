"use strict"
// Code here.
const subwayLines = {
  Red: ["South Station", "Park Street", "Kendall", "Central", "Harvard",
    "Porter", "Davis", "Alewife"],
  Green: ["Government Center", "Park Street", "Boylston", "Arlington", "Copley",
    "Hynes", "Kenmore"],
  Orange: ["North Station", "Haymarket", "Park Street", "State",
    "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
}

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  console.log("StartLine: "+ startLine + " StartStation: "+startStation)
  console.log("EndLine: "+ endLine + " EhdStation: "+endStation)
  let totalStops = "99"
  // First check if StartLine and end line are the same.
  if(startLine === endLine) {
     console.log("Startline and EndLine are the same")
     // array of stops
     let startStops = subwayLines[startLine];
     let startingIndex  = startStops.indexOf(startStation);
     let endingIndex = startStops.indexOf(endStation);

     console.log("startStops beginning at: "+startingIndex)
     console.log("endStops at: "+endingIndex)
     return "Number of stops: " + (endingIndex - startingIndex)
  }
  else {
    console.log("We are starting and finishing on different lines")
    // find the numnber of stops to park street.
    let startCount = findNumberOfStopsToPark(startLine, startStation)
    // find the number of stops from on the newline
    let endCount = findNumberofStopsFromPark(endLine, endStation)
    // add stops
    return startCount + endCount
  }
}
const parkStreet = "Park Street"

const findNumberOfStopsToPark = function(startLine, startStop) {
  let startingIndex  = subwayLines[startLine].indexOf(startStop)
  let endingIndex = subwayLines[startLine].indexOf(parkStreet)
  let count = endingIndex - startingIndex
  console.log( "Number of stops to Park: " + count )
  if ( count < 0 )
     return -count
  else
    return count
}
const findNumberofStopsFromPark = function(endLine, endStation) {
  let startingIndex  = subwayLines[endLine].indexOf(endLine)
  let endingIndex = subwayLines[endLine].indexOf(parkStreet)
  let count = endingIndex - startingIndex
  console.log( "Number of stops from Park: " + count )
  if ( count < 0 )
     return -count
  else
    return count
}

module.exports = {
  stopsBetweenStations,
  stretch: false
}
