'use strict'

// Code here.
const greenLine = ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore']
const redLine = ['South Station', 'Park Street', 'Kendal', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife']
const orangeLine = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']

const distance = function( startLine, startStation, endLine, endStation) {
  let startNum = startLine.indexOf(startStation)
  let endNum = endLine.indexOf(endStation)
  if (startLine === endLine) {
    return Math.abs(endNum - startNum)
  } else if (startLine === greenLine || startLine === redLine){
  startNum = Math.abs(startNum - 1)
} else {startNum = Math.abs(startNum - 2) }
if (endLine === greenLine || endLine === redLine){
endNum = Math.abs(endNum - 1)
} else {endNum = Math.abs(endNum - 2) }
return startNum + endNum }

const displayStops = function (stops) {
console.log("The number of stops it takes is " + stops)
}
displayStops(distance(redLine, 'South Station', orangeLine, 'North Station'))
displayStops(distance(orangeLine, 'Chinatown', redLine, 'Harvard'))
displayStops(distance(redLine, 'South Station', redLine, 'Harvard'))
displayStops(distance(greenLine, 'Kenmore', redLine, 'Alewife'))
displayStops(distance(greenLine, 'Government Center', orangeLine, 'Forest Hills'))
displayStops(distance(greenLine, 'Kenmore', greenLine, 'Arlington'))
displayStops(distance(orangeLine, 'State', orangeLine, 'Forest Hills'))
displayStops(distance(greenLine, 'Kenmore', redLine, 'Alewife'))
displayStops(distance(greenLine, 'Park Street', orangeLine, 'Chinatown'))
