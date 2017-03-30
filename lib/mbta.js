'use strict'

let redLine = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife']
let greenLine = ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore']
let orangeLine = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  let numberOfStops = 0
  if (startLine === endLine) {
    let numberOfStops = Math.abs((startLine.indexOf(startStation)) - (endLine.indexOf(endStation)))
    console.log(numberOfStops)
  } else {
    let toPark =  Math.abs((startLine.indexOf(startStation)) - startLine.indexOf('Park Street'))
    let fromPark = Math.abs((endLine.indexOf('Park Street')) - endLine.indexOf(endStation))
    let numberOfStops = toPark + fromPark
    console.log(numberOfStops)
  }
}

 module.exports = {
   stopsBetweenStations,
   stretch: false
 }

stopsBetweenStations(redLine, 'South Station', redLine, 'Davis')
