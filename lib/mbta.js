'use strict';

// Code here..

let lines = {
Red_Line: [
'South Station',
'Park Street',
'Kendall',
'Central',
'Harvard',
'Porter',
'Davis',
'Alewife',
],
Green_Line: [
'Government Center',
'Park Street',
'Boylston',
'Arlington',
'Copley',
'Hynes',
'Kenmore',
],
Orange_Line: [
'North Station',
'Haymarket',
'Park Street',
'State Street',
'Downtown Crossing',
'Chinatown',
'Back Bay',
'Forest Hills',
],
};

const stops = (stop, line) => {
for (let i = 0; i < line.length; i++) {
if (line[i] === stop) {
return i;
}
}
};

const lineStops = (line, start, end) => {
let allStops =
stops(start, lines[line]) -
stops(end, lines[line]);

return allStops;
};

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
let allStops = 0;
if (startLine === endLine) {
allStops = lineStops(startLine, startStation, endStation);
} else {
allStops = lineStops(startLine, startStation, 'Park Street') +
lineStops(endLine, endStation, 'Park Street');
}

return allStops;
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
