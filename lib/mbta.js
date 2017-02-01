'use strict';

// Code here.
let redLineMap = {}
let redLine = ['South Station', 'Park Street', 'Kendall',
 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'];
let greenLineMap = {}
let greenLine = ['Government Center', 'Park Street',
 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'];
let orangeLineMap = {}
let orangeLine = ['North Station', 'Haymarket',
'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'];

const stopsBetweenStations = (startLine, startStation, endLine, endStation) =>
//number of stops)

let assignStation = function(stationlist, stationmap){
for (i=0; i<redLine.length; i+=); {
    var stationName = redLine[i]
    redLinemap[stationName] = i
    console.log(redLine[i]);
}
assignStation = assignStation(greenLine, greenLineMap)
assignStation = assignStation(orangeLine, orangeLineMap)
};
console.log('Enter station name')
console.log(assignStation()+ assignStation())
}
//join all line arrays.
//count number of values in arrays, iterate

//calculate distance betwen startStation and Park Street for each line and add
//them
//indexes right of PS do not begin at 1
//if start or endStation is Park Street

//maybe some method that calculates different indexes of arrays
//stopsBetweenStations is a function w/ parameters that return numStops

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
