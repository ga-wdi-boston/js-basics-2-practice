'use strict';

// Code here.

/* I tried to merge my code down to two lines per the challenge at the end of
class but it's hard to read so it's commented out at the bottom.  Below
is the longer, but easier to read code. */

// future enhancement: update below code to handle same line routes that
// don't go through Park

// define lines and stations
let mbta = {
    Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
    Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
};

// get number of stops between a station and Park Street
const stopsToPark = (line, station) => {
  let parkIndex = mbta[line].indexOf('Park Street');
  let stationIndex = mbta[line].indexOf(station);
  let numStops = Math.abs(parkIndex - stationIndex);
  return numStops;
};

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  let startStops = (stopsToPark(startLine, startStation));
	let endStops = (stopsToPark(endLine, endStation));
  return startStops + endStops;
};

// shortened, hard to read code
/*
let mbta = {Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'], Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'], Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']};
const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {return (Math.abs((mbta[startLine].indexOf('Park Street'))-(mbta[startLine].indexOf(startStation)))) + (Math.abs((mbta[endLine].indexOf('Park Street'))-(mbta[endLine].indexOf(endStation))));};
*/

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
