'use strict';

// Code here.

let mbta = {
	'Red' : ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
	'Green' : ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
	'Orange' : ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
};

const findPos = (line, station) => mbta[line].indexOf(station);

const findIntersect = (line) =>mbta[line].indexOf('Park Street');

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
	
	// find position in correct line arrays of start and end stations
	let startLinePos = findPos(startLine, startStation);
	let endLinePos = findPos(endLine, endStation);

	// find position in correct line arrays of intersection station (Park Street)
	let startIntersect = findIntersect(startLine);
	let endIntersect = findIntersect(endLine);

	// calculate distance from start and end stations to Park Street
	let startDist = Math.abs(startLinePos - startIntersect);
	let endDist = Math.abs(endLinePos - endIntersect);
	
	// if the two stations are on the same line
	// check to see if they're on the same side of Park Street
	// if so, return difference between station positions
	if (startLine === endLine) {
		if (startLinePos < startIntersect && endLinePos < endIntersect) {
			return Math.abs(startLinePos - endLinePos);
		} else if (startLinePos > startIntersect && endLinePos > endIntersect) {
			return Math.abs(startLinePos - endLinePos);
		}
	} 

	// otherwise, return sum of station positions
	return startDist + endDist;

};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
