
'use strict'; //jshint ignore:line

 // Data structure: lines object holds 3 arrays with stops as strings
const lines = {   Red:  ['South Station', 'Park Street', 'Kendall',
                         'Central', 'Harvad', 'Porter', 'Davis', 'Alewife'],
                 Green:  ['Government Center', 'Park Street', 'Boylston',
                         'Arlington', 'Copley', 'Hynes', 'Kenmore'],
                Orange:  ['North Station', 'Haymarket', 'Park Street',
                         'State', 'Downtown Crossing', 'Chinatown',
                         'Back Bay', 'Forest Hills']
};

const stopsToPark = function(line, station){
  let parkIndex = lines[line].indexOf('Park Street');
  let stationIndex = lines[line].indexOf(station);

  return Math.abs(parkIndex - stationIndex);
};

const parkToEnd = function(line, station) {

  let parkIndex = lines[line].indexOf('Park Street');
  let endIndex = lines[line].indexOf(station);

  return Math.abs( parkIndex - endIndex);
};

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

  //console.log("startLine= " + startLine);
  console.log("startStation= " + startStation);
  //console.log("endLine= " + endLine);
  console.log("endStation= " + endStation);
  console.log("stopsToPark = " + stopsToPark(startLine, startStation));
  console.log("parkToEnd = " + parkToEnd(endLine, endStation));

  if (startLine === endLine) {

    let startIndex = lines[startLine].indexOf(startStation);
    console.log("startIndex= " + startIndex);
    let endIndex = lines[endLine].indexOf(endStation);
    console.log("endIndex= " + endIndex);

    return Math.abs( endIndex - startIndex );

  } else {

  	let parkIndex = Math.abs(stopsToPark(startLine, startStation));
    let endIndex = parkToEnd(endLine, endStation);

    return ( Math.abs(parkIndex) + Math.abs(endIndex) );
  }

};

//console.log("lines['Orange'].indexOf('Haymarket') = " +
//lines['Orange'].indexOf('Haymarket'));
//console.log("lines['Green'] = " + lines['Green'][1]);

//console.log("Distance from haymarket to copley = " +
//stopsBetweenStations('Orange', 'Haymarket', 'Green', 'Copley'));



module.exports = {
  stopsBetweenStations,
  stretch: false,
};
