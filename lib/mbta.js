'use strict';

// Code here.
const redLine = [ 'South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife' ];

const greenLine = [ 'Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore' ];

const orangeLine = [ 'North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills' ];

const interStation = 'Park Street';

// Create a dictionary with line name and line stations.
let mbtaLineDictionary = {};

mbtaLineDictionary[ 'Red' ] = redLine;
mbtaLineDictionary[ 'Green' ] = greenLine;
mbtaLineDictionary[ 'Orange' ] = orangeLine;

// calculates the number of stops between the stations
const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

  // Initialize the return variable;
  let numStops = 0;

  // For the same line, calculate the difference between start and end stations
  // in the array.
  if( startLine === endLine )
  {
     numStops = Math.abs(mbtaLineDictionary[ startLine ].indexOf( startStation ) - mbtaLineDictionary[ endLine ].indexOf( endStation ));
  }

  // For different lines, calculate the difference between the start station
  // and intersection of the start line and the intersection and end station of
  // the end line.
  if( startLine !== endLine )
  {
    let numStopsStart = mbtaLineDictionary[ startLine ].indexOf( startStation ) - mbtaLineDictionary[ startLine ].indexOf( interStation );
    let numStopsEnd = mbtaLineDictionary[ endLine ].indexOf( interStation ) - mbtaLineDictionary[ endLine ].indexOf( endStation );
    numStops = Math.abs( numStopsStart ) + Math.abs( numStopsEnd );
  }
  return numStops;
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
