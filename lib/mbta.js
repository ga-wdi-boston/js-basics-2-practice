'use strict'

// Code here.

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

}

module.exports = {
  stopsBetweenStations,
  stretch: false
}

const stop = ['South Station', 'Park Street Red', 'Kendall', 'Central', 'Harvard',
'Porter','Davis', 'Alewife', 'Government Center', 'Park Street Green', 'Boylston',
'Arlington', 'Copley', 'Hynes', 'Kenmore', 'North Station', 'Haymarket',
'Park Street Orange', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay',
'Forest Hills']

const redLine = ['south station', 'park street', 'kendall', 'central',
'harvard', 'davis', 'alewife']

const greenLine = ['government center', 'park street', 'boylston',
'arlington', 'copley', 'hynes']

const orangeLine = ['north station', 'haymarket', 'park street',
'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']

const lineColor = ['redLine', 'greenLine', 'orangeLine']

const startStop = 0

const endStop = [stops, startStop]
for (let i = 0; i < stops.length; i++ ) {
  endStop[i] = startStop + stopsBetweenStations
}

const stopsBetweenStations = function (endStop, startStop) {
return endStop - startStop
  }
