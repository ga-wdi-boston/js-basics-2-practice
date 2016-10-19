// 'use strict';

 // Data structure: lines object holds 3 arrays with stops as strings
 const lines = {   red:  ['South Station', 'Park Street', 'Kendall',
                         'Central', 'Harvad', 'Porter', 'Davis', 'Alewife'],
                 green:  ['Government Center', 'Park Street', 'Boylston',
                         'Arlington', 'Copley', 'Hynes', ,'Kenmore'],
                orange:  ['North Station', 'Haymarket', 'Park Street',
                         'State', 'Downtown Crossing', 'Chinatown',
                         'Back Bay', 'Forest Hills']
 };

const stopsToPark = function(line, station){
  let parkIndex = lines[line].indexOf('Park Street');
  let stationIndex = lines[line].indexOf(station);

  return Math.abs(parkIndex - stationIndex);
}




const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

  Math.abs(endLine.indexOf(endStation) - startLine.indexOf(startStation))

};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
