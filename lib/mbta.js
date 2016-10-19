'use strict';

 // Data structure: lines object holds 3 arrays with stops as strings
 const lines = {   red:  ['South Station', 'Park Street', 'Kendall',
                         'Central', 'Harvad', 'Porter', 'Davis', 'Alewife'],
                 green:  ['Government Center', 'Park Street', 'Boylston',
                         'Arlington', 'Copley', 'Hynes', ,'Kenmore'],
                orange:  ['North Station', 'Haymarket', 'Park Street',
                         'State', 'Downtown Crossing', 'Chinatown',
                         'Back Bay', 'Forest Hills']
 };

const sameLine = function(startLine, endLine){

   if (startLine === endLine) {
     return true;
   } else {
     return false;
   }
 };

const stopsToPark = function(line, station){
  let parkIndex = lines[line].indexOf('Park Street');
  let stationIndex = lines[line].indexOf(station);

  return Math.abs(parkIndex - stationIndex);
};

const parkToEnd = function(endLine, endStation) {

  let parkIndex = lines[endLine].indexOf('Park Street');
  let endIndex = lines[endLine].indexOf(endStation);

  return Math.abs( parkIndex - endStation );
};

const calcStops = function(startLine, startStation, endLine, endStation) {

  if (sameLine(startLine, endLine) === true) {

    let startIndex = lines[startLine].indexOf(startStation);
    let endIndex = lines[endLine].indexOf(endStation);

    return Math.abs( endIndex - startIndex );

  } else {

    return Math.abs( stopsToPark(startLine, startStation) + parkToEnd(endLine, endStation) );
  }

};


const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

  calcStops(startLine, startStation, endLine, endStation)

};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
